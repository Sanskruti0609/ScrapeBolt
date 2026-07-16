const button = document.getElementById("startBtn");

button.addEventListener("click", async () => {

    document.getElementById("status").textContent = "Starting...";

    chrome.runtime.sendMessage({

        action: "START"

    });

});