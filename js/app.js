function myFunction() {
    var x = document.getElementById("navbarNav");
    if (x.className === "navbar-collapse") {
        x.className += " responsive";
    } else {
        x.className = "navbar-collapse";
    }
}