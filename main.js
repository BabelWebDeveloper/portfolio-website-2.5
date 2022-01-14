let matchScreen = window.matchMedia("(max-width: 768px)")
let getMenuBtn = document.getElementById('menuButtonMobile')
let getUl = document.getElementById('menu')
let getNav = document.getElementById('navi')
let menuStatus = false

// Check screen start here:
let checkScreen = (screen) => {
    let value = ''
    if (matchScreen.matches) {
        value = 'Small'
    } else {
        value = 'Big'
    }
    screen(value);
}
// Check screen end here.

// Display show start here:
let displayShow = (menuDisplay, getUlDisplay, getNavBackground) => {
    getMenuBtn.style.display = menuDisplay
    getUl.style.display = getUlDisplay
    getNav.style.background = getNavBackground
}
// Display show end here.

// Display menu status start here:
let displayStatusMenu = (status) => {
    menuStatus = status
}
// Display menu status end here.

// Screen on load/on change start here:
let setScreen = (formCheckScreen) => {
    if (formCheckScreen === 'Small') {
        displayShow('inline','none','transparent')
        getMenuBtn.classList.remove('open')
        displayStatusMenu(false)
        console.log(menuStatus)
    } else if (formCheckScreen === 'Big'){
        displayShow('none','flex','black')
        getMenuBtn.classList.remove('open')
        displayStatusMenu(false)
        console.log(menuStatus)
    }
}
let screenOnLoad = () => {
    checkScreen(setScreen)
} 
matchScreen.addEventListener('change', screenOnLoad)
window.addEventListener('DOMContentLoaded', screenOnLoad)
// Screen on load/on change end here.

// List chapter control start here:
let listChapter = (formCheckScreen) => {
    if (formCheckScreen === 'Small') {
        displayShow('inline','none')
        if (menuStatus === true) {
            displayShow('inline','none','transparent')
            getMenuBtn.classList.remove('open')
            displayStatusMenu(false)
            console.log(menuStatus)
        } else if (menuStatus === false) {
            displayShow('inline','flex','rgba(0,0,0,0.25')
            getMenuBtn.classList.add('open')
            displayStatusMenu(true)
            console.log(menuStatus)
        }
    } else if (formCheckScreen === 'Big'){
        displayShow('none','flex')
        if (menuStatus === true) {
            displayShow('none','flex','black')
            displayStatusMenu(false)
            console.log(menuStatus)
        } else if (menuStatus === false) {
            displayShow('none','flex','black')
            displayStatusMenu(true)
            console.log(menuStatus)
        }   
    }
}
let listChapterControl = () => {
    checkScreen(listChapter)
} 
getMenuBtn.addEventListener('click', listChapterControl)
// List chapter control end here.