// script.js
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Coca Cola", price: 40, image: "images/coca_cola.jpg" },
        { id: 2, name: "Pepsi", price: 35, image: "images/pepsi.jpg" },
        { id: 3, name: "Sprite", price: 30, image: "images/sprite.jpg" },
        { id: 4, name: "Fanta", price: 30, image: "images/fanta.jpg" },
        { id: 5, name: "Thumbs Up", price: 35, image: "images/thumbs_up.jpg" },
        { id: 6, name: "Mountain Dew", price: 30, image: "images/mountain_dew.jpg" },
        { id: 7, name: "7Up", price: 28, image: "images/7up.jpg" },
        { id: 8, name: "Limca", price: 32, image: "images/limca.jpg" }
    ];

    const productContainer = document.getElementById("products");
    const searchInput = document.getElementById("search");
    const cartItems = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    const checkoutButton = document.getElementById("checkout");

    let cart = [];

    function displayProducts(filteredProducts) {
        productContainer.innerHTML = "";
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
            cartItems.appendChild(li);
        });
        totalAmount.innerText = total;
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    }

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filtered);
    });

    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Proceeding to checkout...");
        }
    });

    displayProducts(products);
});
