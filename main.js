function toggleMenu() {
    // find the menu element && find the menu button element
    // assign these elements to variables 

    // "let" - start creating a new variable
    // "menu" - name of your variable (whatever u want)
    let menu = document.querySelector("aside");
    let menuButton = document.querySelector(".menu-button");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        menuButton.innerHTML = "close";
    } else {
        menuButton.innerHTML = "menu";
    }
}
