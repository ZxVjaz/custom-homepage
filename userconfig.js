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
      name: "daily",
      background_url: "src/img/banners/banner_03.gif",
      categories: [
        {
          name: "communication",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-event",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "personal tracking & notes",
          links: [
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
              name: "maps",
              url: "https://maps.google.com",
              icon: "map-pin",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "daily info & utilities",
          links: [
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "message-chatbot",
              icon_color: palette.peach,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "sparkles",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "team collaboration",
          links: [
            {
              name: "meet",
              url: "https://meet.google.com",
              icon: "video",
              icon_color: palette.green,
            },
            {
              name: "zoom",
              url: "https://zoom.us",
              icon: "brand-zoom",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "code & repository",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "cloud, devops & docs",
          links: [
            {
              name: "vercel",
              url: "https://vercel.com",
              icon: "brand-vercel",
              icon_color: palette.blue,
            },
            {
              name: "gcp",
              url: "https://console.cloud.google.com",
              icon: "cloud",
              icon_color: palette.red,
            },
            {
              name: "supabase",
              url: "https://supabase.com/dashboard",
              icon: "brand-supabase",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/banner_16.gif",
      categories: [
        {
          name: "media & streaming",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "yt music",
              url: "https://music.youtube.com",
              icon: "music",
              icon_color: palette.red,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "social & communities",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "x / twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.blue,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.mauve,
            },
            {
              name: "discord",
              url: "https://discord.com/app",
              icon: "brand-discord",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "gaming & leisure",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);