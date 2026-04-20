const hamburger = document.querySelector (".menu-toggle")
const navLinks = document.querySelector (".links-nav")

hamburger.addEventListener ("click", function() {
    navLinks.classList.toggle ("active")
    hamburger.classList.toggle("active")
})