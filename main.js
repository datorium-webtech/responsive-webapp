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

// Check if jQuery is working
console.log("jQuery version: " + $().jquery);

// Select the blue "+" button and add click event.
$(".expand-product-button").on("click", function() {

    // .parent() - element upwards
    // .children("???") - element downwards (optional selector)
    $(this).parent().parent().parent().children(":not(:first-child)").slideToggle(200);

    // Write a if statement, that changes button between
    // "add_circle" and "remove_circle"
    if ($(this).html() === "add_circle") {
        $(this).html("remove_circle");
    } else {
        $(this).html("add_circle");
    }
});

// Collapse all products initially for mobile
// Select all details for products (gray divs) and hide them with .toggle();
$(".product > div:not(:first-child)").toggle();
