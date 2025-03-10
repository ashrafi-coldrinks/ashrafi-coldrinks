const products = [
    { name: "Coca Cola", price: 40, image: "coca_cola.jpg.jpg" },
    { name: "Pepsi", price: 38, image: "pepsi.jpg.png" },
    { name: "Sprite", price: 35, image: "sprite.jpg.png" },
    { name: "Fanta", price: 37, image: "fanta.jpg.png" },
    { name: "Limca", price: 36, image: "limca.jpg.jpg" },
    { name: "Mountain Dew", price: 39, image: "mountain_dew.jpg.png" },
    { name: "7up", price: 34, image: "7up.jpg.jpg" },
    { name: "Thumbs Up", price: 42, image: "thumbs_up.jpg.png" }
];

const productContainer = document.getElementById("productsList");

function displayProducts(productList) {
    productContainer.innerHTML = "";
    productList.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
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
