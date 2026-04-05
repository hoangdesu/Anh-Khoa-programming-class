#!/usr/bin/env python3
"""
Simple window: add HEIC files or a folder, click Convert.
Built for PyInstaller → double-click .exe on Windows.
"""

from __future__ import annotations

import queue
import threading
import tkinter as tk
from pathlib import Path
from tkinter import filedialog, messagebox, ttk

from converter import (
    DEFAULT_JPEG_QUALITY,
    DEFAULT_SUBSAMPLING,
    collect_heic_paths,
    convert_one,
)


class App(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("HEIC to JPG")
        self.minsize(520, 360)
        self.geometry("640x420")

        self._paths: list[Path] = []
        self._ui_queue: queue.Queue[tuple[str, object]] = queue.Queue()
        self._worker: threading.Thread | None = None

        main = ttk.Frame(self, padding=12)
        main.pack(fill=tk.BOTH, expand=True)

        row1 = ttk.Frame(main)
        row1.pack(fill=tk.X, pady=(0, 8))
        ttk.Button(row1, text="Add files…", command=self._add_files).pack(side=tk.LEFT, padx=(0, 8))
        ttk.Button(row1, text="Add folder…", command=self._add_folder).pack(side=tk.LEFT, padx=(0, 8))
        ttk.Button(row1, text="Clear list", command=self._clear).pack(side=tk.LEFT)

        self._subfolders = tk.BooleanVar(value=False)
        ttk.Checkbutton(
            main,
            text="When using Add folder, include subfolders",
            variable=self._subfolders,
        ).pack(anchor=tk.W, pady=(0, 4))

        self._overwrite = tk.BooleanVar(value=False)
        ttk.Checkbutton(
            main,
            text="Overwrite existing JPG files in the same folder",
            variable=self._overwrite,
        ).pack(anchor=tk.W, pady=(0, 8))

        ttk.Label(main, text="Files to convert:").pack(anchor=tk.W)
        list_frame = ttk.Frame(main)
        list_frame.pack(fill=tk.BOTH, expand=True, pady=(4, 8))
        scroll = ttk.Scrollbar(list_frame)
        scroll.pack(side=tk.RIGHT, fill=tk.Y)
        self._listbox = tk.Listbox(list_frame, yscrollcommand=scroll.set, selectmode=tk.EXTENDED)
        self._listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scroll.config(command=self._listbox.yview)

        self._status = tk.StringVar(value="Add HEIC files, then click Convert.")
        ttk.Label(main, textvariable=self._status).pack(anchor=tk.W, pady=(0, 8))

        btn_row = ttk.Frame(main)
        btn_row.pack(fill=tk.X)
        self._convert_btn = ttk.Button(btn_row, text="Convert to JPG", command=self._start_convert)
        self._convert_btn.pack(side=tk.LEFT)
        ttk.Label(
            btn_row,
            text="JPGs are saved next to each HEIC (high quality).",
            foreground="gray",
        ).pack(side=tk.LEFT, padx=(16, 0))

        self.after(100, self._pump_queue)

    def _pump_queue(self) -> None:
        try:
            while True:
                kind, payload = self._ui_queue.get_nowait()
                if kind == "status":
                    self._status.set(str(payload))
                elif kind == "done":
                    ok, errors = payload
                    self._convert_btn.config(state=tk.NORMAL)
                    self._worker = None
                    if errors:
                        messagebox.showwarning(
                            "Finished with errors",
                            f"Converted: {ok}\n\nProblems:\n" + "\n".join(errors[:12])
                            + ("\n…" if len(errors) > 12 else ""),
                        )
                    else:
                        messagebox.showinfo("Done", f"Converted {ok} file(s).")
                elif kind == "error":
                    self._convert_btn.config(state=tk.NORMAL)
                    self._worker = None
                    messagebox.showerror("Error", str(payload))
        except queue.Empty:
            pass
        self.after(100, self._pump_queue)

    def _sync_listbox(self) -> None:
        self._listbox.delete(0, tk.END)
        for p in self._paths:
            self._listbox.insert(tk.END, str(p))

    def _add_files(self) -> None:
        paths = filedialog.askopenfilenames(
            title="Select HEIC images",
            filetypes=[
                ("HEIC / HEIF", "*.heic *.HEIC *.heif *.HEIF *.hif *.HIF"),
                ("All files", "*.*"),
            ],
        )
        if not paths:
            return
        for s in paths:
            p = Path(s)
            if p.suffix.lower() in {".heic", ".heif", ".hif"}:
                if p.resolve() not in {x.resolve() for x in self._paths}:
                    self._paths.append(p)
        self._sync_listbox()
        self._status.set(f"{len(self._paths)} file(s) in list.")

    def _add_folder(self) -> None:
        folder = filedialog.askdirectory(title="Select folder with HEIC images")
        if not folder:
            return
        try:
            found = collect_heic_paths([Path(folder)], recursive=self._subfolders.get())
        except FileNotFoundError as e:
            messagebox.showerror("Error", str(e))
            return
        existing = {x.resolve() for x in self._paths}
        for p in found:
            if p.resolve() not in existing:
                existing.add(p.resolve())
                self._paths.append(p)
        self._sync_listbox()
        self._status.set(f"{len(self._paths)} file(s) in list ({len(found)} from folder).")

    def _clear(self) -> None:
        self._paths.clear()
        self._sync_listbox()
        self._status.set("List cleared.")

    def _start_convert(self) -> None:
        if self._worker is not None:
            return
        if not self._paths:
            messagebox.showinfo("Nothing to convert", "Add files or a folder first.")
            return

        self._convert_btn.config(state=tk.DISABLED)
        paths = list(self._paths)
        overwrite = self._overwrite.get()

        def work() -> None:
            errors: list[str] = []
            ok = 0
            total = len(paths)
            for i, src in enumerate(paths, start=1):
                self._ui_queue.put(("status", f"Converting {i} of {total}…"))
                try:
                    convert_one(
                        src,
                        None,
                        quality=DEFAULT_JPEG_QUALITY,
                        subsampling=DEFAULT_SUBSAMPLING,
                        overwrite=overwrite,
                    )
                    ok += 1
                except Exception as e:
                    errors.append(f"{src.name}: {e}")
            self._ui_queue.put(("done", (ok, errors)))

        self._worker = threading.Thread(target=work, daemon=True)
        self._worker.start()


def main() -> None:
    app = App()
    app.mainloop()


if __name__ == "__main__":
    main()
