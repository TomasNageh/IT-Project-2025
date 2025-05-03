const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme ='bx bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-Icon')

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-toggle-left'? 'add':'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-theme', getCurrentTheme())



})

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(IconTheme) ? 'bx bx-toggle-left' : 'bx bx-toggle-right'