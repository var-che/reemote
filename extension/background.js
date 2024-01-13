console.log("bg script")

setInterval(() => {
    fetch("http://localhost:3000/read")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            chrome.windows.getCurrent({ populate: true }, function (currentWindow) {
                const activeTab = currentWindow.tabs.find(tab => tab.active);
                const windowInfo = `Active Window Title: ${currentWindow.title}\nActive Tab URL: ${activeTab.url}`;

                if(activeTab.url.includes("https://www.youtube.com/watch?v=")){
                    // Send the message to youtube video
                    chrome.tabs.sendMessage(activeTab.id, { message: res });

                } else {
                    console.log("We just consume the operations.")
                }
            });
            // console.log(res)
        })
}, 1000);