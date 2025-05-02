let newDate = new Date();
let year = newDate.getFullYear();

let getFullYear = document.getElementById('getFullYear')
getFullYear.innerHTML = year;

let miniConsole = document.getElementById('miniConsole')
let videoConsole = document.getElementById('videoConsole')
miniConsole.innerHTML = '$455'
videoConsole.innerHTML = '$123'

let isBtn = document.createElement('button')
isBtn.className = 'shopBtn'
isBtn.innerHTML = 'SHOP NOW'

function functionEnter(e) {
    if(e == 'mini') {
        if(miniConsole.className.includes('avail')){
            miniConsole.innerHTML = ''
            miniConsole.append(isBtn)
        }
    }else if(e ==  'video'){
        if(videoConsole.className.includes('avail')){
            videoConsole.innerHTML = ''
            videoConsole.append(isBtn)
        }
    }
}
function functionLeave(e) {
    if(e == 'mini') {
        if(miniConsole.className.includes('avail')){
            miniConsole.style.display = 'block'
            miniConsole.innerHTML = '$455'
        }
    }else if(e == 'video'){
        if(videoConsole.className.includes('avail')){
            videoConsole.style.display = 'block'
            videoConsole.innerHTML = '$123'
        }
    }
}

