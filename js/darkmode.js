export function handleDarkMode() {
    let rootElm = document.documentElement;
    let switchElm = document.querySelector(".header-darkmode-switch");
    let userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDarkMode = getLS("darkMode");

    isDarkMode = isDarkMode == null ? userPreference : isDarkMode

    switchElm.checked = isDarkMode;
    updateMode(isDarkMode)

    switchElm.addEventListener("change", function () {
        console.log(userPreference, isDarkMode)
        isDarkMode = switchElm.checked;
        setLS("darkMode", isDarkMode);
        updateMode(isDarkMode)
    })

    function updateMode(bool) {
        rootElm.setAttribute("data-darkmode", bool);
    }

    function setLS(key, value) {
        localStorage.setItem(key, value)
    }

    function getLS(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}