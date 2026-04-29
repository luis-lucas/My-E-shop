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
    const addToCart = document.querySelectorAll(".add-to-cart");
    addToCart.forEach((button) => {
    button.addEventListener ("click", function() {
    const notification = document.createElement("div")
    notification.classList.add("notification")
    notification.textContent = "Added to cart! 🍜"
    document.body.appendChild(notification)
    setTimeout(() => {
        notification.remove()
    }, 2000)
     })   
    });

    const listDown = document.querySelector (".product");
    const heroButton = document.querySelector (".hero-button");

    heroButton.addEventListener ("click", function() {
        listDown.scrollIntoView({behavior: "smooth"})
        listDown.classList.add("visible")
    })

    const reviews = [
        {name: "Oliver", review: "Hands down the richest broth in the city. The noodles have that perfect 'snap'—pure comfort in a bowl!", stars: "⭐⭐⭐⭐⭐", image: "E-shop-img/001.png"},

        {name: "Robert", review: "Authentic, fresh, and full of flavor. The Pad Thai is perfectly balanced—not too sweet, with just the right amount of lime and crunch.", stars: "⭐⭐⭐⭐⭐", image: "E-shop-img/002.png"},

        {name: "Thomas", review: "My new favorite noodle spot! Super fast service and the quality of the ingredients really stands out. I'm officially a regular now.", stars: "⭐⭐⭐⭐⭐", image: "E-shop-img/003.png"}
    ]

    let currentReview = 0

    const titleReview = document.querySelector(".review")
    const textTestimonial = document.querySelector(".review-text")
    const ratingStars = document.querySelector(".star")
    const reviewImage = document.querySelector(".review-img")
    const prevButton = document.querySelector(".prev-button")
    const nextButton = document.querySelector(".next-button")

    const showReview = () => {
        titleReview.textContent = reviews[currentReview].name
        textTestimonial.textContent = reviews[currentReview].review
        ratingStars.textContent = reviews[currentReview].stars
        reviewImage.src = reviews[currentReview].image
    }
    showReview()
    
    nextButton.addEventListener("click", function() {
        currentReview++
        if(currentReview === reviews.length) {
            currentReview = 0
        }
        showReview()
    })
    prevButton.addEventListener("click", function(){
        currentReview--
    if(currentReview < 0) {
       currentReview = reviews.length - 1
    }
        showReview()
    })

    const backToTop = document.querySelector(".back-to-top")
    window.addEventListener("scroll", function() {
       if(window.scrollY > 900){
           backToTop.style.display = "block"
       } else {
        backToTop.style.display = "none"
       }
    })
    backToTop.addEventListener("click", function(){
     window.scrollTo({top: 0, behavior: 'smooth'});
    })

    const user = document.querySelector(".user")
    const submit = document.querySelector(".submit")
    submit.addEventListener("click", function(){
        const existing = document.querySelector(".news-letter p")
      if(existing) existing.remove()
      if(user.value.includes("@")){
       const message = document.createElement("p")
       message.textContent = "You're on the list! 🍜 Look out for tasty updates and exclusive deals in your inbox soon."
       message.style.color = "green"
       document.querySelector(".news-letter").appendChild(message)
      }else{
        const message = document.createElement("p")
        message.textContent = "Spilled some broth! 🥢 That email doesn't look right. Please double-check and try again."
        message.style.color = "red"
        document.querySelector(".news-letter").appendChild(message)
      }
    })