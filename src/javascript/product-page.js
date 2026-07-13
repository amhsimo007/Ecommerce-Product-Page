const cartIcon = document.querySelector("#cart");
const displayCart = document.querySelector("#display-cart");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const showData = document.querySelector("#show-data");

cartIcon.addEventListener("click", function () {
    displayCart.classList.toggle("flex");
})

let cart = [];
let allProducts = [];

async function getData() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        allProducts = data;
        printData(data);
    } catch (error) {
        console.log(error);
    }
}
getData()

function printData(data) {
    showData.innerHTML = "";
    data.map(function (ele) {
        showData.innerHTML +=
            `
        <div class="content" id="content">
            <img class="img-product ${ele.name}" id="${ele.id}" src="${ele.images[0]}" alt="picture-${ele.name}">
            <div class="parent">         
            <h3>${ele.name}</h3>
            <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span> <s class="discount">$${ele.compare_at_price}</s></span>
            </div>
            <div class="btn-action back-primary">
                <button class="btn btn-xl primary add-to-cart" data-id="${ele.id}" onclick="addToCart('${ele.id}')"><span>Bay Now</span></button>
                <img
                    class="cart-white"
                    src="images/icon-cart.svg"
                    alt="icon-cart" />
            </div>

        </div>
        `
    })
}

function addToCart(id) {
    const product = allProducts.find(item => item.id === id);
    if (!product) return;
    const existingProduct = cart.find(item => item.id === id);
    if (!existingProduct) {
        cart.push({
            ...product,
            quantity: 1
        });
    } else {
        existingProduct.quantity++;
    }
    updateCart()
}

function increaseQuantity(id) {
    const product = cart.find(item => item.id === id);
    if (!product) return;
    product.quantity++;
    updateCart();
}

function decreaseQuantity(id) {
    const product = cart.find(item => item.id === id);
    if (!product) return;
    if (product.quantity > 1) {
        product.quantity--;
    } else {
        removeProduct(id);
        return;
    }
    updateCart();
}

function removeProduct(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const data = localStorage.getItem("cart");
    if (data) {
        cart = JSON.parse(data);
    }
    renderCart();
    updateBadge();
}

function updateCart() {
    saveCart();
    renderCart();
    updateBadge();
}

function renderCart() {
    displayCart.innerHTML = "";

    if (getCartCount() === 0) {

        displayCart.innerHTML =
            `  
        <h3>Cart</h3>
        <p>Your cart is empty</p>
        `
    } else {
        displayCart.innerHTML =
            `
     <h3>Cart</h3>
    `
        cart.forEach(item => {
            displayCart.innerHTML += createCartItem(item);
        });

        displayCart.innerHTML +=
            `
        <span class="total-cart" id="total-cart">Total Cart: $${getCartTotal()}.00</span>    
        <div class="btn-action back-primary d-flex">
            <button id="checkout" class="btn btn-xl secondary checkout">Checkout</button>
        </div>
    `
    }

}

function updateBadge() {

    const badge = document.getElementById("cart-badge");

    let count = 0;

    count = getCartCount();

    if (count === 0) {

        badge.style.display = "none";

    } else {

        badge.style.display = "block";

    }

    badge.textContent = count;
}

function getCartCount() {

    return cart.reduce((count, item) => {

        return count + item.quantity;

    }, 0);
}

function getCartTotal() {

    return cart.reduce((total, item) => {

        return total + getSubtotal(item);

    }, 0);

}

function getSubtotal(item) {

    return item.price * item.quantity;

}

function createCartItem(item) {
    let total = 0;
    const subtotal = item.price * item.quantity;
    total += subtotal;
    return `
        <div class="cart-content">
            <img class="cart-img" src="${item.images[0]}" alt="picture-${item.name}">
            <div class="info-product">
                <span>${item.name}</span>
                <span>$${item.price}×${item.quantity} <p>$${getSubtotal(item)}.00</p></span>
            </div>
            <img class="icon-delete" id="icon-delete" src="images/icon-delete.svg" alt="icon-delete" />
        </div>
        `;
}

loadCart();