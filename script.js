let newDate = new Date();
let year = newDate.getFullYear();

let getFullYear = document.getElementById('getFullYear')
getFullYear.innerHTML = year;

let btnForShop = document.getElementById('btnForShop')
btnForShop.innerHTML = '$455'

let isBtn = document.createElement('button')
isBtn.className = 'shopBtn'
isBtn.innerHTML = 'SHOP NOW'

function functionEnter(e) {
    if(btnForShop.className.includes('avail')){
        btnForShop.innerHTML = ''
        btnForShop.append(isBtn)
    }
}
function functionLeave(e) {
    if(btnForShop.className.includes('avail')){
        btnForShop.style.display = 'block'
        btnForShop.innerHTML = '$455'
    }
}

