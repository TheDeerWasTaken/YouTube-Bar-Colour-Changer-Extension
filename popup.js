let red = document.body.getElementsByClassName('red')[0];
let blue = document.body.getElementsByClassName('blue')[0];
let green = document.body.getElementsByClassName('green')[0];
let yellow = document.body.getElementsByClassName('yellow')[0];
let pink = document.body.getElementsByClassName('pink')[0];

let params = {
    active: true,
    currentWindow: true
}

chrome.storage.sync.get(['key'], function(result) {
    if (result.key){
        document.getElementById(result.key).childNodes[0].classList.add('selected')
    } else {
        red.classList.add('selected')
    }
    
});


let msg = "";

red.addEventListener('click', () => {
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + red.parentElement.id).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:red.parentElement.id}, () => {});
    chrome.tabs.query(params, gotTab)
})
blue.addEventListener('click', () => {
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + blue.parentElement.id).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:blue.parentElement.id}, () => {});
    chrome.tabs.query(params, gotTab)
})
green.addEventListener('click', () => {
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + green.parentElement.id).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:green.parentElement.id}, () => {});
    chrome.tabs.query(params, gotTab)
})
yellow.addEventListener('click', () => {
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + yellow.parentElement.id).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:yellow.parentElement.id}, () => {});
    chrome.tabs.query(params, gotTab)
})
pink.addEventListener('click', () => {
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + pink.parentElement.id).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:pink.parentElement.id}, () => {});
    chrome.tabs.query(params, gotTab)
})










function selectColor(btn){
    red.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected')
    yellow.classList.remove('selected')
    pink.classList.remove('selected')
    document.body.querySelector('#' + btn).childNodes[0].classList.add('selected');
    chrome.storage.sync.set({key:btn}, () => {});
    chrome.tabs.query(params, gotTab)

}



function gotTab(tab){
    msg = document.querySelector('.selected').parentElement.id;
    chrome.tabs.sendMessage(tab[0].id, msg)

    
}   

