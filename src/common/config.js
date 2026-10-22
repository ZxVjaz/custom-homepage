class Config {
  // Default configuration values for the homepage - these can be overridden by user configuration or local storage
  defaults = {
    overrideStorage: false,
    title: "~/.config",
    favicon: "src/img/favicon.png",
    animationSpeed: {
      bookmark: 1.0,
      search: 1.0,
    },
    temperature: {
      location: "London",
      // Temperature scale: C for Celsius, F for Fahrenheit
      scale: "C",
      // OpenWeatherMap API key, leave empty to disable the weather widget
      appId: "",
    },
    clock: {
      // 12-hour format with AM/PM
      format: "k:i p",
    },
    additionalClocks: [
      {
        label: "Tokyo",
        timezone: "Asia/Tokyo",
        format: "h:i",
      }
    ],
    search: {
      engines: {
        p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
        d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
        g: ["https://google.com/search?q=", "Google"],
      }
    },
    // List of disabled components
    disabled: [],
    // URL to open when clicking the fastlink button in the statusbar
    fastlink: "",
    // Whether to use local fonts instead of Google Fonts CDN
    localFonts: true,
    openLastVisitedTab: false,
    // User-defined bookmark tabs
    tabs: [],
    keybindings: {
      "s": "search-bar",
    }
  };

  config;

  /**
   * Initialise the configuration with user settings and palette
   * @param {Object} configuration - User configuration object
   * @param {Object} palette - Colour palette for the homepage
   */
  constructor(configuration, palette) {
    this.config = configuration;
    this.palette = palette;
    this.storage = new Storage("configuration");

    this.autoConfig();
    this.setKeybindings();
    this.applyDocumentMeta();
    this.save();

    // Use a Proxy to automatically persist configuration changes
    return new Proxy(this, {
      ...this,
      __proto__: this.__proto__,
      set: (target, prop, value) => this.settingUpdatedCallback(target, prop, value),
    });
  }

  /**
   * Automatically save whenever a configuration property is updated
   * @param {Object} target - The proxy target object
   * @param {string} prop - The property being set
   * @param {*} val - The new value for the property
   * @returns {boolean} Whether the operation was successful
   */
  settingUpdatedCallback(target, prop, val) {
    if (!(prop in target)) return false;

    Reflect.set(target, prop, val);
    Object.assign(this, target);

    if (prop === 'title' || prop === 'favicon') {
      this.applyDocumentMeta();
    }

    this.save();

    return true;
  }

  /**
   * Set default configuration values or load them from local storage
   * @returns {void}
   */
  autoConfig() {
    Object.keys(this.defaults).forEach((setting) => {
      if (this.canOverrideStorage(setting)) this[setting] = this.config[setting];
      else if (this.storage.hasValue(setting)) this[setting] = this.storage.get(setting);
      else this[setting] = this.defaults[setting];
    });
  }

  /**
   * Determines whether localStorage can be overridden for a given setting
   * If the setting is for the tabs section, always override
   * @param {string} setting - The setting name to check
   * @returns {boolean} Whether the setting can override storage
   */
  /**
   * Apply page title and favicon to the DOM document head
   * @returns {void}
   */
  applyDocumentMeta() {
    const pageTitle = this.title || this.defaults.title || "~/.config";
    if (document.title !== pageTitle) {
      document.title = pageTitle;
    }

    const faviconHref = this.favicon || this.defaults.favicon || "src/img/favicon.png";
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }
    if (link.getAttribute("href") !== faviconHref) {
      link.setAttribute("href", faviconHref);
    }
  }

  canOverrideStorage(setting) {
    if (localStorage.getItem("guiModified") === "true") {
      return false;
    }
    return setting in this.config && (this.config.overrideStorage || setting === "tabs" || setting === "title" || setting === "favicon");
  }

  /**
   * Serialise the configuration object for export or storage
   * @returns {Object} Serialised configuration object
   */
  toJSON() {
    return {
      ...this,
      defaults: undefined,
    };
  }

  /**
   * Set up keybinding actions for the homepage
   * @returns {void}
   */
  setKeybindings() {
    document.addEventListener("keydown", ({ key }) => {
      if (document.activeElement !== document.body) return;

      const settingsModal = document.querySelector("settings-modal");
      if (settingsModal && (settingsModal.hasAttribute("active") || settingsModal.shadowRoot?.querySelector("#settings-modal.active"))) {
        return;
      }

      if (key in this.keybindings) Actions.activate(this.keybindings[key]);
    });
  }

  /**
   * Persist the current configuration to local storage
   * @returns {void}
   */
  save() {
    this.storage.save(stringify(this));
  }

  /**
   * Export the current configuration as a downloadable file
   * @returns {void}
   */
  exportSettings() {
    const anchor = document.createElement('a');
    const filename = 'dawn.configuration.json';
    const mimeType = 'data:text/plain;charset=utf-8,';

    anchor.href = mimeType + encodeURIComponent(stringify(this, null, 2));
    anchor.download = filename;

    anchor.click();
  }
}
