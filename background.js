chrome.runtime.onInstalled.addListener(() => {

    console.log("⚡ ScrapeBolt Installed");

});


chrome.runtime.onMessage.addListener((message, sender) => {

    if (message.action === "START") {

        console.log("Starting ScrapeBolt...");

    }

});