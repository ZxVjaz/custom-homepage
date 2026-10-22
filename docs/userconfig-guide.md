# Configuration Guide: `userconfig.js`

This guide provides a comprehensive reference for customizing your startpage using `userconfig.js`.

---

## Table of Contents

- [Overview & Architecture](#overview--architecture)
- [Themes & Palettes](#themes--palettes)
- [General Settings](#general-settings)
  - [Page Title (`title`)](#page-title-title)
  - [Favicon Image (`favicon`)](#favicon-image-favicon)
  - [Animation Speed (`animationSpeed`)](#animation-speed-animationspeed)
  - [Fastlink (`fastlink`)](#fastlink-fastlink)
  - [Local Fonts (`localFonts`)](#local-fonts-localfonts)
  - [Open Last Visited Tab (`openLastVisitedTab`)](#open-last-visited-tab-openlastvisitedtab)
- [Weather Widget (`temperature`)](#weather-widget-temperature)
- [Clock & Additional Time Zones (`clock`, `additionalClocks`)](#clock--additional-time-zones-clock-additionalclocks)
- [Search Engines (`search`)](#search-engines-search)
- [Keybindings (`keybindings`)](#keybindings-keybindings)
- [Bookmarks, Tabs & Categories (`tabs`)](#bookmarks-tabs--categories-tabs)
  - [Banner Picker Reference](#banner-picker-reference)
  - [Categories & Links](#categories--links)
- [Complete Example `userconfig.js`](#complete-example-userconfigjs)

---

## Overview & Architecture

There are two primary ways to customize your homepage:
1. **Editing `userconfig.js` directly**: Recommended for version-controlling your configuration or deploying custom defaults via GitHub Pages.
2. **Visual Settings Modal (GUI)**: Press <kbd>s</kbd>, type `:settings`, and hit <kbd>Enter</kbd>. Changes made in the GUI are stored in browser `localStorage`.

> [!NOTE]
> By default, `overrideStorage: true` is enabled in `userconfig.js`. When you make changes through the visual GUI modal, a flag (`guiModified`) is set in your browser so GUI settings take precedence over `userconfig.js`. If you wish to force `userconfig.js` to always take precedence or reset GUI overrides, use the **Reset to Default** button under the *Backup & Sync* tab in the settings modal.

---

## Themes & Palettes

The homepage supports four official [Catppuccin](https://catppuccin.com) palettes:
- `latte` (Light)
- `frappe` (Low Contrast Dark)
- `macchiato` (Medium Dark)
- `mocha` (Deep Dark)

At the top of `userconfig.js`, define your preferred light and dark themes:

```javascript
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);
```

The system automatically switches between them according to your operating system's dark/light mode preference.

---

## General Settings

```javascript
const default_configuration = {
  overrideStorage: true,
  title: "~/.config",
  favicon: "src/img/favicon.png",
  animationSpeed: {
    bookmark: 1.0,
    search: 1.0,
  },
  fastlink: "https://www.google.com",
  localFonts: true,
  openLastVisitedTab: false,
};
```

### Page Title (`title`)
Sets the browser tab title displayed for your homepage.

- **Type**: `String`
- **Default**: `"~/.config"`
- **Example**:
  ```javascript
  title: "Dashboard | My Startpage",
  ```

### Favicon Image (`favicon`)
Sets the website favicon (the icon shown on your browser tab) and the statusbar fastlink button icon.

- **Type**: `String` (relative path or external URL)
- **Default**: `"src/img/favicon.png"`
- **Examples**:
  ```javascript
  // Local image asset
  favicon: "src/img/favicon.png",

  // Custom remote PNG or SVG
  favicon: "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
  ```

### Animation Speed (`animationSpeed`)
Adjusts the playback speed of transitions. Supports independent multipliers for bookmark clicks and search interactions, or a single global number.

- **Recommended Range**: `0.1` to `2.5` , step `0.1`. (ex: 0.1, 0.2, 0.3)
- **Disable / Instant Mode**: Set to `0` to turn off animations completely for instant, zero-delay navigation.
- **Maximum Recommended Limit**: `2.5` – `3.0` (higher values may feel unresponsive).

#### Dual Multiplier (Recommended):
```javascript
animationSpeed: {
  bookmark: 1.0, // Radial clip-path expansion when clicking bookmark cards
  search: 1.0,   // Wave transition when opening search bar and pressing Enter
}
```


#### Disabling Animations (Instant Navigation):
```javascript
animationSpeed: {
  bookmark: 0, // Click opens URL immediately without animation
  search: 0,   // Search Enter jumps straight to engine without animation
}
```

#### Single Global Multiplier (Alternative):
```javascript
// Applies to both bookmark and search animations
animationSpeed: 1.2,
```
### Fastlink (`fastlink`)
The URL navigated to when clicking the fastlink logo button at the bottom-left corner of the statusbar.

- **Type**: `String`
- **Default**: `"https://www.google.com"`
- **Example**:
  ```javascript
  fastlink: "https://github.com",
  ```

### Local Fonts (`localFonts`)
Whether to load fonts locally from `src/fonts/` or fetch them from Google Fonts CDN.

- **Type**: `Boolean`
- **Default**: `true`
- **Example**:
  ```javascript
  localFonts: true,
  ```

### Open Last Visited Tab (`openLastVisitedTab`)
When `true`, the page remembers which tab (e.g. `work`, `daily`, `media`) you were viewing when you close or reload the browser, and automatically re-activates it on launch.

- **Type**: `Boolean`
- **Default**: `false`

---

## Weather Widget (`temperature`)

Displays current weather and temperature in the statusbar.

```javascript
temperature: {
  location: "London",
  scale: "C",       // "C" for Celsius, "F" for Fahrenheit
  appId: "",        // OpenWeatherMap API key (optional)
}
```

> [!TIP]
> If `appId` is left empty, the weather widget displays a mock placeholder without performing external network calls. You can get a free API key at [openweathermap.org](https://openweathermap.org/api).

---

## Clock & Additional Time Zones (`clock`, `additionalClocks`)

Configure primary time display and additional international time zones in the statusbar.

### Primary Clock
```javascript
clock: {
  format: "k:i p",               // e.g. "10:30 AM" or "H:i" for 24-hour format
  icon_color: palette.maroon,    // Palette color for the clock icon
}
```

### Additional Clocks
Add as many additional city clocks as you wish:
```javascript
additionalClocks: [
  {
    label: "Tokyo",
    timezone: "Asia/Tokyo",
    format: "h:i",
    icon_color: palette.peach,
  },
  {
    label: "New York",
    timezone: "America/New_York",
    format: "h:i A",
    icon_color: palette.blue,
  },
]
```

---

## Search Engines (`search`)

Defines the search engines available when opening the search bar (<kbd>s</kbd>).

```javascript
search: {
  engines: {
    g: ["https://google.com/search?q=", "Google", "brand-google"],
    d: ["https://duckduckgo.com/?q=", "DuckDuckGo", "brand-duckduckgo"],
    p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI", "sparkles"],
    yt: ["https://www.youtube.com/results?search_query=", "YouTube", "brand-youtube"],
    gh: ["https://github.com/search?q=", "GitHub", "brand-github"],
  },
  default: "g", // Key of default search engine when no prefix is typed
}
```

To search with a specific engine, prefix your search with `!<key> ` (e.g. `!yt lo-fi beats` or `!gh catppuccin`).

---

## Keybindings (`keybindings`)

Custom key shortcuts to activate page actions.

```javascript
keybindings: {
  "s": "search-bar",
}
```

---

## Bookmarks, Tabs & Categories (`tabs`)

The startpage organizes bookmarks into **Tabs**, which contain **Categories**, which in turn contain individual **Links**.

### Structure:
```javascript
tabs: [
  {
    name: "work",
    background_url: "src/img/banners/banner_03.gif",
    categories: [
      {
        name: "productivity",
        links: [
          {
            name: "gmail",
            url: "https://mail.google.com",
            icon: "brand-gmail",
            icon_color: palette.red,
          },
        ],
      },
    ],
  },
]
```

### Banner Picker Reference
Each tab has a `background_url` displaying an animated GIF or image above the bookmarks. You can use any of the 18 built-in preset banners, or provide a URL / local file path:

| Preset Name | Relative Path |
| :--- | :--- |
| `banner_01` | `src/img/banners/banner_01.gif` |
| `banner_02` | `src/img/banners/banner_02.gif` |
| `banner_03` | `src/img/banners/banner_03.gif` |
| `banner_04` | `src/img/banners/banner_04.gif` |
| `banner_05` | `src/img/banners/banner_05.gif` |
| `banner_06` | `src/img/banners/banner_06.gif` |
| `banner_07` | `src/img/banners/banner_07.gif` |
| `banner_08` | `src/img/banners/banner_08.gif` |
| `banner_09` | `src/img/banners/banner_09.gif` |
| `banner_10` | `src/img/banners/banner_10.gif` |
| `banner_11` | `src/img/banners/banner_11.gif` |
| `banner_12` | `src/img/banners/banner_12.gif` |
| `banner_13` | `src/img/banners/banner_13.gif` |
| `banner_14` | `src/img/banners/banner_14.gif` |
| `banner_15` | `src/img/banners/banner_15.gif` |
| `banner_16` | `src/img/banners/banner_16.gif` |
| `banner_17` | `src/img/banners/banner_17.gif` |
| `banner_18` | `src/img/banners/banner_18.gif` |

> [!TIP]
> You can also browse and select these visually using the **Choose Banner** button in the Settings Modal GUI (`:settings` -> *Bookmarks Editor*).

### Categories & Links
Each link entry accepts:
- `name`: Display text for the link.
- `url`: Target web address.
- `icon`: Tabler icon identifier (without the `ti-` prefix, e.g. `brand-github`, `brand-reddit`, `code`, `music`). Browse all icon names on [tabler.io/icons](https://tabler.io/icons).
- `icon_color`: Color for the icon, typically from `palette` (e.g. `palette.blue`, `palette.mauve`, `palette.peach`, `palette.green`, `palette.red`).

---

## Complete Example `userconfig.js`

you can open [userconfig.js](/userconfig.js)
