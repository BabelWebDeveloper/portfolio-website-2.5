let matchScreen = window.matchMedia("(max-width: 768px)")
let getMenuBtn = document.getElementById('menuButtonMobile')
let getUl = document.getElementById('menu')
let getNav = document.getElementById('navi')
let menuOpen = false

let setScreenOnLoad = () => {
    menuOpen = false
    if(matchScreen.matches) {
        console.log(menuOpen)
        getMenuBtn.addEventListener('click', () => {
            if(menuOpen === false) {
                getMenuBtn.classList.add('open')
                getUl.style.display = 'flex'
                getNav.style.background = 'rgba(0, 0, 0, 0.514)'
                menuOpen = true
                console.log(menuOpen)
            } else {
                getMenuBtn.classList.remove('open')
                getUl.style.display = 'none'
                getNav.style.background = 'transparent'
                menuOpen = false
                console.log(menuOpen)
            }
        })
    } else {
        getUl.style.display = 'flex'
        console.log(menuOpen)

    }
}

let setScreenOnChange = () => {
    if(matchScreen.matches){
        menuOpen = false
        getMenuBtn.classList.remove('open')
        getUl.style.display = 'none'
        getNav.style.background = 'transparent'
        console.log(menuOpen)
    } else {
        menuOpen = true
        getMenuBtn.classList.remove('open')
        getUl.style.display = 'flex'
        getNav.style.background = 'black'
        console.log(menuOpen)
    }
    
}

matchScreen.addEventListener('change', setScreenOnChange)
window.addEventListener('DOMContentLoaded', setScreenOnLoad)