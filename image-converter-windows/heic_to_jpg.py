#!/usr/bin/env python3
"""
Convert HEIC/HEIF images to JPEG on Windows (and other platforms).
Uses high quality settings to minimize visible loss when saving as JPEG.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from converter import (
    DEFAULT_JPEG_QUALITY,
    DEFAULT_SUBSAMPLING,
    collect_heic_paths,
    convert_one,
)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Convert HEIC/HEIF to JPEG with high quality settings (Windows-friendly)."
    )
    parser.add_argument(
        "inputs",
        nargs="+",
        type=Path,
        help="HEIC/HEIF files, or folders (recursive .heic/.heif/.hif)",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="Output file (only if a single input file) or output directory",
    )
    parser.add_argument(
        "-q",
        "--quality",
        type=int,
        default=DEFAULT_JPEG_QUALITY,
        metavar="1-100",
        help=f"JPEG quality (default: {DEFAULT_JPEG_QUALITY}). Higher = larger files, fewer artifacts.",
    )
    parser.add_argument(
        "--subsampling",
        type=int,
        default=DEFAULT_SUBSAMPLING,
        choices=(0, 1, 2),
        help="JPEG chroma subsampling: 0=4:4:4 (best), 1=4:2:2, 2=4:2:0 (smaller). Default: 0.",
    )
    parser.add_argument(
        "-r",
        "--recursive",
        action="store_true",
        help="When inputs are folders, find images in subfolders too",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Allow replacing existing .jpg files",
    )

    args = parser.parse_args(argv)

    if not (1 <= args.quality <= 100):
        parser.error("quality must be between 1 and 100")

    try:
        sources = collect_heic_paths(args.inputs, recursive=args.recursive)
    except (FileNotFoundError, ValueError) as e:
        print(e, file=sys.stderr)
        return 1

    if not sources:
        print("No HEIC/HEIF files found.", file=sys.stderr)
        return 1

    if len(sources) > 1 and args.output is not None and args.output.is_file():
        print(
            "With multiple inputs, --output must be a directory (or omit for same folder as each source).",
            file=sys.stderr,
        )
        return 1

    out_dir = args.output if args.output is not None and args.output.is_dir() else None
    if len(sources) == 1 and args.output is not None and not args.output.exists():
        single_out: Path | None = args.output
    elif len(sources) == 1 and args.output is not None and args.output.is_file():
        single_out = args.output
    else:
        single_out = None if len(sources) != 1 else args.output

    if len(sources) > 1 or out_dir is not None:
        single_out = None
        if args.output is not None and not args.output.is_dir():
            if len(sources) == 1:
                single_out = args.output
            else:
                print(
                    "With multiple inputs, use an existing directory with --output or omit it.",
                    file=sys.stderr,
                )
                return 1

    ok = 0
    for src in sources:
        try:
            if out_dir is not None:
                dest = out_dir / (src.stem + ".jpg")
            elif single_out is not None and len(sources) == 1:
                dest = single_out
            else:
                dest = None
            out = convert_one(
                src,
                dest,
                quality=args.quality,
                subsampling=args.subsampling,
                overwrite=args.overwrite,
            )
            print(out)
            ok += 1
        except Exception as e:
            print(f"{src}: {e}", file=sys.stderr)

    return 0 if ok == len(sources) else 1


if __name__ == "__main__":
    raise SystemExit(main())
