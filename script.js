// Search functionality
const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    boxes.forEach((box) => {
        const title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(searchText)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});


// Cart counter functionality
let cartCount = 0;
const cartCountText = document.getElementById("cart-count");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        cartCount++;
        cartCountText.innerText = cartCount;
    });
});