"""HEIC/HEIF → JPEG conversion (shared by CLI and GUI)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

import pillow_heif

pillow_heif.register_heif_opener()

HEIC_EXTENSIONS = frozenset({".heic", ".heif", ".hif"})

DEFAULT_JPEG_QUALITY = 98
DEFAULT_SUBSAMPLING = 0


def _exif_bytes(img: Image.Image) -> bytes | None:
    exif = img.getexif()
    if exif:
        return exif.tobytes()
    return None


def convert_one(
    src: Path,
    dest: Path | None,
    *,
    quality: int,
    subsampling: int,
    overwrite: bool,
) -> Path:
    if not src.is_file():
        raise FileNotFoundError(f"Not a file: {src}")

    suffix = src.suffix.lower()
    if suffix not in HEIC_EXTENSIONS:
        raise ValueError(f"Expected HEIC/HEIF extension, got: {src.suffix}")

    out = dest if dest is not None else src.with_suffix(".jpg")
    if out.is_dir():
        out = out / (src.stem + ".jpg")
    out = out.resolve()

    if out.exists() and not overwrite:
        raise FileExistsError(f"File already exists: {out}")

    out.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(src) as img:
        img = ImageOps.exif_transpose(img)
        rgb = img.convert("RGB")

        save_kw: dict = {
            "format": "JPEG",
            "quality": quality,
            "subsampling": subsampling,
            "optimize": True,
        }
        exif = _exif_bytes(rgb)
        if exif:
            save_kw["exif"] = exif

        icc = rgb.info.get("icc_profile")
        if icc:
            save_kw["icc_profile"] = icc

        rgb.save(out, **save_kw)

    return out


def collect_heic_paths(paths: list[Path], *, recursive: bool) -> list[Path]:
    """Resolve folders and files into a de-duplicated list of HEIC paths."""
    files: list[Path] = []
    for p in paths:
        p = Path(p).expanduser()
        if p.is_file():
            if p.suffix.lower() in HEIC_EXTENSIONS:
                files.append(p)
        elif p.is_dir():
            globber = p.rglob if recursive else p.glob
            for ext in HEIC_EXTENSIONS:
                files.extend(sorted(globber(f"*{ext}")))
                files.extend(sorted(globber(f"*{ext.upper()}")))
        else:
            raise FileNotFoundError(f"Not found: {p}")

    seen: set[Path] = set()
    unique: list[Path] = []
    for f in files:
        r = f.resolve()
        if r not in seen:
            seen.add(r)
            unique.append(f)
    return unique
