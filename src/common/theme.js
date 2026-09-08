// Switches between the light and dark themes based on the system preference
// Exports functions to detect that preference and react when it changes

/**
 * Detects the user's system colour scheme preference
 * @param {Object} lightTheme - The theme to use when in light mode
 * @param {Object} darkTheme - The theme to use when in dark mode
 * @returns {Object} The appropriate theme based on system preference
 */
function getSystemTheme(lightTheme, darkTheme) {
  // Check if the browser supports prefers-colour-scheme media query
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
}

/**
 * Sets up a listener for system theme changes
 * @param {Object} lightTheme - The theme to use when in light mode
 * @param {Object} darkTheme - The theme to use when in dark mode
 * @param {Function} onThemeChange - Callback for when the theme changes
 * @returns {void}
 */
function initThemeListener(lightTheme, darkTheme, onThemeChange) {
  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', (e) => {
      const newTheme = e.matches ? darkTheme : lightTheme;
      onThemeChange(newTheme);
    });
  }

/**
 * Resolve theme objects accounting for any saved GUI preferences
 * @param {Object} lightTheme - Default light theme
 * @param {Object} darkTheme - Default dark theme
 * @returns {{light: Object, dark: Object}} Resolved themes
 */
function resolveConfiguredThemes(lightTheme, darkTheme) {
  const themesMap = { latte, frappe, macchiato, mocha };
  const savedLight = localStorage.getItem('preferredLightTheme');
  const savedDark = localStorage.getItem('preferredDarkTheme');

  return {
    light: savedLight && themesMap[savedLight] ? themesMap[savedLight] : lightTheme,
    dark: savedDark && themesMap[savedDark] ? themesMap[savedDark] : darkTheme,
  };
}}

/**
 * Initialise the theme system and keep it in sync with the system preference
 * @param {Object} lightTheme - The theme to use when in light mode
 * @param {Object} darkTheme - The theme to use when in dark mode
 * @param {Function} onThemeChange - Optional callback for when the theme changes
 * @returns {Object} The current theme based on system preference
 */
function initThemeSystem(lightTheme, darkTheme, onThemeChange = null) {
  const initialTheme = getSystemTheme(lightTheme, darkTheme);

  // Set up listener with default page reload if no callback provided
  if (onThemeChange) {
    initThemeListener(lightTheme, darkTheme, onThemeChange);
  } else {
    initThemeListener(lightTheme, darkTheme, () => {
      window.location.reload();
    });
  }

  return initialTheme;
}
