console.log('we contenting on youtube')
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    request.message.forEach(operation_array => {
        if(operation_array[0] === "volume" && operation_array[1] === "up"){
            increaseVolume()
        } else if (operation_array[0] === "volume" && operation_array[1] === "down"){
            decreaseVolume()
        } else if (operation_array[0] === "toggle_pause_play"){
            togglePausePlay()
        } else if (operation_array[0] === "toggle_fullscreen"){
            toggleFullScreen()
        } else if (operation_array[0] === "next_video"){
            nextVideo()
        } else if (operation_array[0] === "go_back"){
            goBack()
        }
    });
});

function increaseVolume(){
    try {
        console.log('increasing volume')
        document.querySelector('video').volume += 0.1
    } catch (error) {
        console.log('we cant increase volume', error)
    }
}

function decreaseVolume(){
    try {
        console.log('decreasing volume')
        document.querySelector('video').volume -= 0.1
    } catch (error) {
        console.log('we cant decrease volume', error)
    }
}

function togglePausePlay(){
    try {
        console.log('toggling pause play')
        document.querySelector('button[aria-keyshortcuts="k"]').click()
    } catch (error) {
        console.log('we cant toggle pause/play', error)
    }
}

function toggleFullScreen(){
    try {
        console.log('toggling full screen')
        document.querySelector('button[aria-keyshortcuts="t"]').click()
    } catch (error) {
        console.log('we cant toggle full screen', error)
    }
}

function nextVideo(){
    try {
        console.log('going to next video')
        document.querySelector('a[aria-keyshortcuts="SHIFT+n"]').click()
    } catch (error) {
        console.log('we cant go to next video', error)
    }
}

function goBack(){
    try {
        console.log('going back')
        window.history.back()
    } catch (error) {
        console.log('we cant go back', error)
    }
}