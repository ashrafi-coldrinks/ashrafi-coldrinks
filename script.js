const products = [
    { name: "Coca Cola", price: 40, image: "coca_cola.jpg", category: "cold-drinks" },
    { name: "Pepsi", price: 38, image: "pepsi.png", category: "cold-drinks" },
    { name: "Sprite", price: 35, image: "sprite.png", category: "cold-drinks" },
    { name: "Fanta", price: 37, image: "fanta.png", category: "cold-drinks" },
    { name: "Limca", price: 36, image: "limca.jpg", category: "cold-drinks" },
    { name: "Mountain Dew", price: 39, image: "mountain_dew.png", category: "cold-drinks" },
    { name: "7up", price: 34, image: "7up.jpg", category: "cold-drinks" },
    { name: "Thumbs Up", price: 42, image: "thumbs_up.png", category: "cold-drinks" }
];

const productContainer = document.getElementById("productsList");
const categoryList = document.getElementById("categoryList");

// Display Products
function displayProducts(productList) {
    productContainer.innerHTML = "";
    productList.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="./images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

displayProducts(products);

// Search Functionality
document.getElementById("searchBox").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});

// Category Filtering
categoryList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
        e.target.classList.add("active");

        let category = e.target.getAttribute("data-category");
        if (category === "all") {
            displayProducts(products);
        } else {
            let filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    }
});
