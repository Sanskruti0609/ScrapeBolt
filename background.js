
let allCompanies = [];
let downloaded = false;

chrome.runtime.onInstalled.addListener(() => {
    console.log("⚡ ScrapeBolt Installed");
});

chrome.runtime.onMessage.addListener((message, sender) => {

    if (message.action === "PAGE_PARSED") {

        allCompanies.push(...message.companies);

        console.log(`✅ Total Companies: ${allCompanies.length}`);

        if (!downloaded) {

            downloaded = true;

            downloadJSONL();

        }

    }

});

function downloadJSONL() {

    const jsonl = allCompanies
        .map(company => JSON.stringify(company))
        .join("\n");

    const dataUrl =
        "data:application/json;charset=utf-8," +
        encodeURIComponent(jsonl);

    chrome.downloads.download({
        url: dataUrl,
        filename: "companies.jsonl",
        saveAs: true
    }, (downloadId) => {

        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log("✅ Download Started:", downloadId);
        }

    });

}

async function createTestTab() {

    console.log("Opening Zauba...");

    await chrome.tabs.create({
        url: "https://www.zaubacorp.com/companies-list-company.html",
        active: false
    });

}

createTestTab();