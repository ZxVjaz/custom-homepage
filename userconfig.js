// User configuration for the homepage - update the palette, location, and your preferred tabs, categories, and links

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  // Page title displayed in the browser tab
  title: "~/.config",
  // Custom favicon image URL/path (used for browser tab icon and fastlink button in statusbar)
  favicon: "src/img/favicon.png",
  // Transition animation speed multiplier:
  // Recommended range: 0.1 (very fast) to 2.5 (cinematic slow), step 0.1 (ex: 0.1, 0.2, 0.3)
  // Set to 0 to disable animations entirely (instant navigation). Max recommended limit: 2.5
  animationSpeed: {
    bookmark: 1.0, // Speed for bookmark click animations
    search: 1.0,   // Speed when opening search & performing a search (pressing Enter)
  },
  temperature: {
    location: "London",
    scale: "C",
    // Optional OpenWeatherMap API key, get a free one at https://openweathermap.org/api
    // Leave empty to keep the placeholder and skip the network request
    appId: "",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "Tokyo",
      timezone: "Asia/Tokyo",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  localFonts: true,
  fastlink: "https://www.google.com",
  openLastVisitedTab: false,
tabs: [
  {
    name: "dai ly",
    background_url: "src/img/banners/banner_02.gif",
    categories: [
      {
        name: "communication",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com",
            icon: "brand-whatsapp",
            icon_color: palette.blue,
          },
          {
            name: "gmail",
            url: "https://mail.google.com",
            icon: "brand-gmail",
            icon_color: palette.peach,
          },
          {
            name: "discord",
            url: "https://discord.com/app",
            icon: "brand-discord",
            icon_color: palette.green,
          },
          {
            name: "telegram",
            url: "https://web.telegram.org",
            icon: "brand-telegram",
            icon_color: palette.red,
          },
        ],
      },
      {
        name: "workspace",
        links: [
          {
            name: "calendar",
            url: "https://calendar.google.com",
            icon: "calendar-event",
            icon_color: palette.blue,
          },
          {
            name: "keep",
            url: "https://keep.google.com",
            icon: "note",
            icon_color: palette.peach,
          },
          {
            name: "drive",
            url: "https://drive.google.com",
            icon: "brand-google-drive",
            icon_color: palette.green,
          },
          {
            name: "notion",
            url: "https://www.notion.so",
            icon: "brand-notion",
            icon_color: palette.red,
          },
        ],
      },
      {
        name: "intelligence",
        links: [
          {
            name: "gemini",
            url: "https://gemini.google.com",
            icon: "sparkle",
            icon_color: palette.blue,
          },
          {
            name: "claude",
            url: "https://claude.ai",
            icon: "brand-zapier",
            icon_color: palette.peach,
          },
          {
            name: "chatgpt",
            url: "https://chatgpt.com",
            icon: "brand-openai",
            icon_color: palette.green,
          },
          {
            name: "perplexity",
            url: "https://www.perplexity.ai",
            icon: "search",
            icon_color: palette.red,
          },
        ],
      },
    ],
  },
  {
    name: "dev",
    background_url: "src/img/banners/banner_07.gif",
    categories: [
      {
        name: "code & repositories",
        links: [
          {
            name: "github",
            url: "https://github.com",
            icon: "brand-github",
            icon_color: palette.mauve,
          },
          {
            name: "gitlab",
            url: "https://gitlab.com",
            icon: "brand-gitlab",
            icon_color: palette.teal,
          },
          {
            name: "stackoverflow",
            url: "https://stackoverflow.com",
            icon: "brand-stackoverflow",
            icon_color: palette.yellow,
          },
          {
            name: "dev.to",
            url: "https://dev.to",
            icon: "code",
            icon_color: palette.sapphire,
          },
        ],
      },
      {
        name: "cloud & backend",
        links: [
          {
            name: "vercel",
            url: "https://vercel.com",
            icon: "brand-vercel",
            icon_color: palette.mauve,
          },
          {
            name: "supabase",
            url: "https://supabase.com/dashboard",
            icon: "brand-supabase",
            icon_color: palette.teal,
          },
          {
            name: "gcp",
            url: "https://console.cloud.google.com",
            icon: "cloud",
            icon_color: palette.yellow,
          },
          {
            name: "cloudflare",
            url: "https://dash.cloudflare.com",
            icon: "brand-cloudflare",
            icon_color: palette.sapphire,
          },
        ],
      },
      {
        name: "tools & prototyping",
        links: [
          {
            name: "figma",
            url: "https://www.figma.com",
            icon: "brand-figma",
            icon_color: palette.mauve,
          },
          {
            name: "npm",
            url: "https://www.npmjs.com",
            icon: "brand-npm",
            icon_color: palette.teal,
          },
          {
            name: "bundlephobia",
            url: "https://bundlephobia.com",
            icon: "package",
            icon_color: palette.yellow,
          },
          {
            name: "excalidraw",
            url: "https://excalidraw.com",
            icon: "pencil",
            icon_color: palette.sapphire,
          },
        ],
      },
    ],
  },
  {
    name: "learn",
    background_url: "src/img/banners/banner_05.gif",
    categories: [
      {
        name: "documentation",
        links: [
          {
            name: "mdn web docs",
            url: "https://developer.mozilla.org",
            icon: "file-code",
            icon_color: palette.sky,
          },
          {
            name: "roadmap.sh",
            url: "https://roadmap.sh",
            icon: "map",
            icon_color: palette.lavender,
          },
          {
            name: "w3schools",
            url: "https://www.w3schools.com",
            icon: "school",
            icon_color: palette.green,
          },
          {
            name: "devdocs",
            url: "https://devdocs.io",
            icon: "book",
            icon_color: palette.flamingo,
          },
        ],
      },
      {
        name: "tech feeds",
        links: [
          {
            name: "hacker news",
            url: "https://news.ycombinator.com",
            icon: "brand-ycombinator",
            icon_color: palette.sky,
          },
          {
            name: "medium",
            url: "https://medium.com",
            icon: "brand-medium",
            icon_color: palette.lavender,
          },
          {
            name: "daily.dev",
            url: "https://daily.dev",
            icon: "device-desktop-analytics",
            icon_color: palette.green,
          },
          {
            name: "reddit webdev",
            url: "https://www.reddit.com/r/webdev",
            icon: "brand-reddit",
            icon_color: palette.flamingo,
          },
        ],
      },
      {
        name: "practice",
        links: [
          {
            name: "leetcode",
            url: "https://leetcode.com",
            icon: "brand-leetcode",
            icon_color: palette.sky,
          },
          {
            name: "codepen",
            url: "https://codepen.io",
            icon: "brand-codepen",
            icon_color: palette.lavender,
          },
          {
            name: "stackblitz",
            url: "https://stackblitz.com",
            icon: "bolt",
            icon_color: palette.green,
          },
          {
            name: "frontend mentor",
            url: "https://www.frontendmentor.io",
            icon: "layout-dashboard",
            icon_color: palette.flamingo,
          },
        ],
      },
    ],
  },
  {
    name: "chi ll",
    background_url: "src/img/banners/banner_09.gif",
    categories: [
      {
        name: "streaming",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com",
            icon: "brand-youtube",
            icon_color: palette.red,
          },
          {
            name: "netflix",
            url: "https://www.netflix.com",
            icon: "brand-netflix",
            icon_color: palette.maroon,
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv",
            icon: "brand-twitch",
            icon_color: palette.pink,
          },
          {
            name: "prime video",
            url: "https://www.primevideo.com",
            icon: "movie",
            icon_color: palette.mauve,
          },
        ],
      },
      {
        name: "audio & music",
        links: [
          {
            name: "yt music",
            url: "https://music.youtube.com",
            icon: "music",
            icon_color: palette.red,
          },
          {
            name: "spotify",
            url: "https://open.spotify.com",
            icon: "brand-spotify",
            icon_color: palette.maroon,
          },
          {
            name: "soundcloud",
            url: "https://soundcloud.com",
            icon: "brand-soundcloud",
            icon_color: palette.pink,
          },
          {
            name: "podcasts",
            url: "https://podcasts.google.com",
            icon: "headphones",
            icon_color: palette.mauve,
          },
        ],
      },
      {
        name: "gaming & hobbies",
        links: [
          {
            name: "steam",
            url: "https://store.steampowered.com",
            icon: "brand-steam",
            icon_color: palette.red,
          },
          {
            name: "epic games",
            url: "https://store.epicgames.com",
            icon: "device-gamepad-2",
            icon_color: palette.maroon,
          },
          {
            name: "pinterest",
            url: "https://www.pinterest.com",
            icon: "brand-pinterest",
            icon_color: palette.pink,
          },
          {
            name: "ign",
            url: "https://www.ign.com",
            icon: "flame",
            icon_color: palette.mauve,
          },
        ],
      },
    ],
  },
  {
    name: "tool",
    background_url: "src/img/banners/banner_17.gif",
    categories: [
      {
        name: "navigation & travel",
        links: [
          {
            name: "maps",
            url: "https://maps.google.com",
            icon: "map-pin",
            icon_color: palette.rosewater,
          },
          {
            name: "flightradar24",
            url: "https://www.flightradar24.com",
            icon: "plane",
            icon_color: palette.teal,
          },
          {
            name: "accuweather",
            url: "https://www.accuweather.com",
            icon: "sun",
            icon_color: palette.peach,
          },
          {
            name: "rome2rio",
            url: "https://www.rome2rio.com",
            icon: "route",
            icon_color: palette.text,
          },
        ],
      },
      {
        name: "finance & metrics",
        links: [
          {
            name: "sheets",
            url: "https://sheets.google.com",
            icon: "table",
            icon_color: palette.rosewater,
          },
          {
            name: "tradingview",
            url: "https://www.tradingview.com",
            icon: "chart-candle",
            icon_color: palette.teal,
          },
          {
            name: "currency converter",
            url: "https://www.xe.com",
            icon: "currency-dollar",
            icon_color: palette.peach,
          },
          {
            name: "fast.com",
            url: "https://fast.com",
            icon: "gauge",
            icon_color: palette.text,
          },
        ],
      },
      {
        name: "system & network",
        links: [
          {
            name: "github status",
            url: "https://www.githubstatus.com",
            icon: "activity",
            icon_color: palette.rosewater,
          },
          {
            name: "downdetector",
            url: "https://downdetector.com",
            icon: "alert-triangle",
            icon_color: palette.teal,
          },
          {
            name: "dns checker",
            url: "https://dnschecker.org",
            icon: "world-search",
            icon_color: palette.peach,
          },
          {
            name: "caniuse",
            url: "https://caniuse.com",
            icon: "browser-check",
            icon_color: palette.text,
          },
        ],
      },
    ],
  },
],
}

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);