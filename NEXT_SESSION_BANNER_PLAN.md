# Next Session Roadmap: Banner Customization & Image Upload

## Context & Current State
- **Branch**: `feat/image-cropper-upload`
- **Accomplished So Far**:
  1. `title`, `favicon`, and dual dynamic `animationSpeed` sliders (`0x` to `2.5x` with `0` instant mode) implemented and tested.
  2. Standalone guide written: [`docs/userconfig-guide.md`](docs/userconfig-guide.md) and linked in [`README.md`](README.md).
  3. Built-in preset banner picker modal (18 animated GIFs + custom URL input) added to the Settings GUI.
  4. Discord-style interactive avatar cropper implemented for Favicon (pan, zoom, boundary clamping, and full alpha transparency preserved into `localStorage`).
  5. Favicon UI updated to a clean preview thumbnail with **Update** and **Reset** buttons (no visible text input).

---

## Objectives for Next Session: Banner Stuff

### 1. Banner Upload & Aspect-Ratio Cropper
- **Goal**: Allow users to upload their own local images/GIFs as tab banners directly from disk without needing external image hosting.
- **Workflow**:
  - In the Bookmarks & Tabs editor (or inside the Banner Picker sub-modal), add an **"Upload Banner"** action.
  - Launch a rectangular aspect-ratio cropper (e.g. `3:1` or `16:9` banner viewport) with the same Discord-style mechanics:
    - Mouse drag / touch to pan.
    - Zoom slider & mouse wheel scaling.
    - Boundary clamping (so the image never exposes empty borders).
    - Transparency checkerboard support for transparent PNGs/SVGs.
  - Export via HTML5 Canvas as an optimized, compressed Base64 Data URL (using WebP/JPEG quality ~0.82 to keep file size under ~100–180 KB for `localStorage` safety).

### 2. Animated GIF Support for Uploaded Banners
- **Challenge**: Standard HTML5 Canvas rasterization flattens animated GIFs into their first frame.
- **Approaches to Explore**:
  - Direct local file storage: If the user uploads an animated `.gif`, detect `file.type === 'image/gif'` and offer the option to save the raw GIF data URL directly (bypassing canvas crop) or crop static banners.
  - File size validation / warnings: Ensure raw GIFs stay within `localStorage` capacity limits (~1–2 MB max).

### 3. Banner Management & Persistence
- Support setting custom banners per tab:
  - Tab 1: Custom uploaded banner
  - Tab 2: Preset `banner_03.gif`
  - Tab 3: Remote URL
- Add a **"Reset to Preset"** button for tab banners.
- Synchronize with `userconfig.js` and JSON export/import so custom banners can be backed up and restored seamlessly.

### 4. Documentation Updates
- Add a dedicated section to [`docs/userconfig-guide.md`](docs/userconfig-guide.md) explaining:
  - How custom banners work with `localStorage` (Base64 vs URLs vs local paths).
  - How to convert images to Base64 manually or use the built-in cropper.
  - Recommended dimensions and aspect ratios for startpage banners (`600x200` to `1200x400`).

---

## Quick Reference / Handover Commands
- **Current Branch**: `feat/image-cropper-upload`
- **Start Local Server**: `python -m http.server 8000`
- **Verify Syntax**: `node --check src/components/settings/settings.component.js`
- **Main Files to Modify**:
  - `src/components/settings/settings.component.js` (Banner Picker sub-modal & cropper mode)
  - `docs/userconfig-guide.md`
