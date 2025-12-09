function changebackgroundcolor(){
  document.body.style.backgroundColor = '#333';
}

function returnbackgroundcolor(){
  document.body.style.backgroundColor = 'rgb(238, 230, 230)';
}

function openpage(){
  const input = document.getElementById("search");
  if (!input) {
    console.error('Search input with id="search" not found');
    return;
  }

  const q = input.value.trim().toLowerCase();
  const routes = {
    "rulefiss wireless earbud": "badry3.html",
    "lenovo legion 7 pro": "lenovo.html",
    "amazfit gtr5": "smart_watch.html",
    "dell g16": "dell.html",
    "galaxy z flip 6": "galaxy.html",
    "samsung galaxy tab s10 plus": "product-tab.html",
    "huawei d16": "product-5.html",
    "samsung s25 ultra": "newproject.html",
    "sony wh-1000xm5": "badry2.html",
    "iphone 16 pro max": "iphone.html",
    "redragon m908": "red.html"
  };

  if (routes[q]) {
    // use location.href to open in same tab
    window.location.href = routes[q];
  } else {
    alert('Product not found. Try different keywords.');
  }
}

// Theme toggle: guard missing element
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// previously selected
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}
if (themeButton && selectedIcon) {
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
} else {
  console.warn('theme-button not found in DOM');
}

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => (themeButton && themeButton.classList.contains(iconTheme)) ? 'bx-toggle-left' : 'bx-toggle-right';