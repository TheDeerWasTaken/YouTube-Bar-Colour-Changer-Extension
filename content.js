chrome.runtime.onMessage.addListener(gotMessage)




function gotMessage(message, sender, sendResponse){
    let elements = document.body.getElementsByClassName('ytp-swatch-background-color')
    let i;
    for (i = 0; i < elements.length; i++){
        document.body.getElementsByClassName('ytp-swatch-background-color')[i].style.backgroundColor = message;
    }
    
    
}

