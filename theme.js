(function () {
  const STORAGE_KEY = "theme";

  // 1. Determine active theme (from localStorage or system preference)
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  // 2. Apply theme to <html> element
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleUI(theme);
  }

  // 3. Update toggle button icon, label, and ARIA state
  function updateToggleUI(theme) {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", isDark ? "true" : "false");

    const icon = toggle.querySelector(".theme-toggle-icon");
    const text = toggle.querySelector(".theme-toggle-text");

    if (icon) {
      icon.textContent = isDark ? "☀️" : "🌙";
    }
    if (text) {
      text.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  // Apply immediately so page doesn't flash on load
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  // 4. Initialize toggle button events once DOM is loaded
  function init() {
    updateToggleUI(document.documentElement.getAttribute("data-theme") || "light");

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const currentTheme =
          document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
      });
    }

    // Listen for OS system theme changes if user hasn't explicitly set preference
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? "dark" : "light");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
