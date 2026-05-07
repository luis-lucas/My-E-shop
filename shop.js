const searchBar = document.querySelector(".search-bar")
const productCard = document.querySelectorAll(".product-card")

searchBar.addEventListener("input", () => {
const searchText = searchBar.value.toLowerCase()
productCard.forEach((card) => {
const cardName =card.querySelector(".product-name").textContent.toLowerCase()

if(cardName.includes (searchText)) {
    card.style.display = "block"
}else {
    card.style.display = "none"
}

})
})