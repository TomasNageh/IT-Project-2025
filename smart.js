var i = 0;
var images = [];
var time = 2000;

images[0] = "https://gamal66.w3spaces.com/Watch-1-modified.png?bypass-cache=71361200";
images[1] = "https://gamal66.w3spaces.com/Watch-2-modified.png?bypass-cache=71361200";
images[2] = "https://gamal66.w3spaces.com/Watch-3-modified.png?bypass-cache=71361209";
images[3] = "https://gamal66.w3spaces.com/Watch-4-modified.png?bypass-cache=71406313";

function changeImg() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

if (selectedTheme) {

	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {

	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'
