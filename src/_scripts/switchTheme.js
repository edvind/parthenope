const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

if (document.documentElement.getAttribute("data-theme") == "dark") {
    toggleSwitch.checked = true;
}
