chrome.runtime.onInstalled.addListener(() => {
    console.log("⚡ ScrapeBolt Installed");
});

chrome.runtime.onMessage.addListener((message, sender) => {

    if (message.action === "PAGE_PARSED") {

        console.log("✅ Received Companies:", message.companies.length);

        console.log(message.companies);

    }

});

async function createTestTab() {

    console.log("Opening Zauba...");

    await chrome.tabs.create({
        url: "https://www.zaubacorp.com/companies-list-company.html",
        active: false
    });

}

createTestTab();