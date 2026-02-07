const browser = self.browser || self.chrome;
const TARGETS = [
    "https://miyabi381.github.io/Scheduler-test.html",
    "https://x.com/",
    "http://127.0.0.1:5500/"
];


browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status !== "complete") return;
    if (!tab.url || !tab.url.startsWith("http")) return;
    if (!TARGETS.some(url => tab.url.startsWith(url))) return;

    browser.scripting.insertCSS({
        target: { tabId },
        files: ["main.css"]
    });

    browser.scripting.executeScript({
        target: { tabId },
        files: ["common.js", "main.js"]
    });
});
