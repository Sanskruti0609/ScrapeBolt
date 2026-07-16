const button = document.getElementById("startBtn");

button.addEventListener("click", async () => {

    console.log("Button Clicked");

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    console.log(tab);

    chrome.tabs.sendMessage(
        tab.id,
        { action: "PARSE_CURRENT_PAGE" },
        (companies) => {

            console.log(companies);

        }
    );

});