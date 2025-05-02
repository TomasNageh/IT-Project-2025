function changebackgroundcolor(){
    document.getElementById('body').style.
    backgroundColor='#333';

}

function returnbackgroundcolor(){
    document.getElementById('body').style.
    backgroundColor='rgb(238, 230, 230)';

}
function openpage(){
    var x = document.getElementById("search").value;

    if (x === "RULEFISS Wireless Earbud"){
        window.open("badry3.html")
    }

    if (x === "LENOVO lEGION 5 PRO"){
        window.open("lenovo.html")
    }

    if (x === "AMAZFIT GTR3 .. 3050"){
        window.open("smart_watch%20(1).html")
    }

    if (x === "DELL G15"){
        window.open("dell.html")
    }

    if (x === "GALAXY Z FLIP3"){
        window.open("galaxy.html")
    }

    if (x === "SAMSUNG Galaxy Tab S7 Plus"){
        window.open("product-tab.html")
    }

    if (x === "Huawei D15"){
        window.open("product-5.html")
    }

    if (x === "SAMSUNG S22 ULTRA"){
        window.open("newproject.html")
    }

    if (x === "SONY WH-1000XM3"){
        window.open("")
    }

    if (x === "IPHONE 13 PRO MAX"){
        window.open("index.html")
    }

    if (x === "REDRAGON M607"){
        window.open("red.html")
    }
}


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right' 