const agent = navigator.userAgent;
const platform = navigator.platform;
const appVersion = navigator.appVersion;
const language = navigator.language;
const languages = navigator.languages;
const hardwareConcurrency = navigator.hardwareConcurrency;
const deviceMemory = navigator.deviceMemory;
const cookieEnabled = navigator.cookieEnabled;
const doNotTrack = navigator.doNotTrack;
const maxTouchPoints = navigator.maxTouchPoints;
const connection = navigator.connection;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const devicePixelRatio = window.devicePixelRatio;
const performanceNow = performance.now();
const localStorageAvailable = typeof localStorage !== 'undefined';
const sessionStorageAvailable = typeof sessionStorage !== 'undefined';
const indexedDBAvailable = typeof indexedDB !== 'undefined';
const webAssemblyAvailable = typeof WebAssembly !== 'undefined';
const serviceWorkerAvailable = 'serviceWorker' in navigator;
const referrer = document.referrer;
const origin = location.origin;
const memory = performance.memory;

const btn = document.getElementById("brn");
const output = document.getElementById("output");

function addInfo(label, value) {
  const p = document.createElement("p");
  p.textContent = `${label}: ${value}`;
  output.appendChild(p);
}

addInfo("UserAgent", agent);
addInfo("Platform", platform);
addInfo("AppVersion", appVersion);
addInfo("Language", language);
addInfo("Languages", languages);
addInfo("HardwareConcurrency", hardwareConcurrency);
addInfo("DeviceMemory", deviceMemory);
addInfo("CookieEnabled", cookieEnabled);
addInfo("DoNotTrack", doNotTrack);
addInfo("MaxTouchPoints", maxTouchPoints);
addInfo("Connection", JSON.stringify(connection));
addInfo("ScreenWidth", screenWidth);
addInfo("ScreenHeight", screenHeight);
addInfo("DevicePixelRatio", devicePixelRatio);
addInfo("PerformanceNow", performanceNow);
addInfo("LocalStorageAvailable", localStorageAvailable);
addInfo("SessionStorageAvailable", sessionStorageAvailable);
addInfo("IndexedDBAvailable", indexedDBAvailable);
addInfo("WebAssemblyAvailable", webAssemblyAvailable);
addInfo("ServiceWorkerAvailable", serviceWorkerAvailable);
addInfo("Referrer", referrer);
addInfo("Origin", origin);
addInfo("Memory", JSON.stringify(memory));

function out() {
    setTimeout(() => {
        alert("Pass!");
    }, 1000);
}

btn.addEventListener("click", out);
