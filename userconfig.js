// User configuration for the homepage - update the palette, location, and your preferred tabs, categories, and links

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
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
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-event",
              icon_color: palette.blue,
            },
            {
              name: "notion",
              url: "https://www.notion.so",
              icon: "brand-notion",
              icon_color: palette.peach,
            },
            {
              name: "drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "collaboration",
          links: [
            {
              name: "slack",
              url: "https://slack.com",
              icon: "brand-slack",
              icon_color: palette.mauve,
            },
            {
              name: "trello",
              url: "https://trello.com",
              icon: "brand-trello",
              icon_color: palette.blue,
            },
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: palette.peach,
            },
            {
              name: "meet",
              url: "https://meet.google.com",
              icon: "video",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "finance & docs",
          links: [
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document",
              icon: "file-text",
              icon_color: palette.blue,
            },
            {
              name: "keep",
              url: "https://keep.google.com",
              icon: "note",
              icon_color: palette.peach,
            },
            {
              name: "canva",
              url: "https://www.canva.com",
              icon: "palette",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "code & repo",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "gitlab",
              url: "https://gitlab.com",
              icon: "brand-gitlab",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "cloud & devops",
          links: [
            {
              name: "vercel",
              url: "https://vercel.com",
              icon: "brand-vercel",
              icon_color: palette.blue,
            },
            {
              name: "cloudflare",
              url: "https://dash.cloudflare.com",
              icon: "brand-cloudflare",
              icon_color: palette.peach,
            },
            {
              name: "docker",
              url: "https://hub.docker.com",
              icon: "brand-docker",
              icon_color: palette.blue,
            },
            {
              name: "aws",
              url: "https://aws.amazon.com/console",
              icon: "brand-aws",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "learn & practice",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-ycombinator",
              icon_color: palette.red,
            },
            {
              name: "dev.to",
              url: "https://dev.to",
              icon: "code",
              icon_color: palette.green,
            },
            {
              name: "mdn docs",
              url: "https://developer.mozilla.org",
              icon: "book-2",
              icon_color: palette.mauve,
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
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.green,
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
          name: "socials",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
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
          name: "gaming & hobby",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "goodreads",
              url: "https://www.goodreads.com",
              icon: "books",
              icon_color: palette.peach,
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
            {
              name: "chess",
              url: "https://www.chess.com",
              icon: "chess",
              icon_color: palette.green,
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