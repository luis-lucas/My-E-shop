const hamburger = document.querySelector (".menu-toggle")
const navLinks = document.querySelector (".links-nav")

hamburger.addEventListener ("click", function() {
    navLinks.classList.toggle ("active")
    hamburger.classList.toggle("active")
})
 const text= "Welcome to The Noodle Shop — long noodles, short waits. Slurp loud, laugh hard, then nap. No judgment. Just broth."
 const heroTitle = document.querySelector (".hero-title")
 let titleCounter = 0
 let typing = setInterval(() => {
    heroTitle.textContent += text[titleCounter]
    titleCounter++

    if(titleCounter === text.length){
        clearInterval(typing);
    }
 }, 100);

     heroTitle.addEventListener("click", function() {
        clearInterval(typing)
        heroTitle.textContent = ""
        titleCounter = 0
        typing = setInterval(() => {
            heroTitle.textContent += text[titleCounter]
            titleCounter++
            if(titleCounter === text.length){
        clearInterval(typing);
    }
        }, 100);
    })
    const banner = document.querySelector (".banner")
    const closeBanner = document.querySelector (".close-banner")

    closeBanner.addEventListener ("click", function() {
    banner.style.display = "none"
})