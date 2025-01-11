function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    const themeToggleButton = document.getElementById("darklightbutton");

    if (element.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "Dark";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggleButton.textContent = "Light";
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    var element = document.body;
    const themeToggleButton = document.getElementById("darklightbutton");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        element.classList.add("dark-mode");
        themeToggleButton.textContent = "Dark";
    } else {
        element.classList.remove("dark-mode");
        themeToggleButton.textContent = "Light";
    }
}

window.onload = loadTheme;