var navLink = document.getElementById("navLink");

function showMenu() {
    if (navLink) {
        navLink.style.right = "0";
        // navLink.style.left = "0";
    }
}

function hideMenu() {
    if (navLink) {
        navLink.style.right = "-200px";
    }
}