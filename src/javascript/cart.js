// Logic For Cart 

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
    const countTextWomen = document.getElementById("count-text-women");
    const countTextMen = document.getElementById("count-text-men");
    const product = cart.find(item => item.id === id);
    if (!product) return;
    product.quantity++;

    if (countTextWomen) {
        countTextWomen.innerHTML =
            `
        <span class="count-text">${product.quantity}</span>
        `
    }

    if (countTextMen) {
        countTextMen.innerHTML =
            `
        <span class="count-text">${product.quantity}</span>
        `
    }

    updateCart();
}
increaseQuantity();

function decreaseQuantity(id) {
    const countTextWomen = document.getElementById("count-text-women");
    const countTextMen = document.getElementById("count-text-men");
    const product = cart.find(item => item.id === id);
    if (!product) return;
    if (product.quantity > 1) {
        product.quantity--;

        if (countTextWomen) {
            countTextWomen.innerHTML =
                `
        <span class="count-text">${product.quantity}</span>
        `
        }

        if (countTextMen) {
            countTextMen.innerHTML =
                `
        <span class="count-text">${product.quantity}</span>
        `
        }

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
    displayCart.innerHTML = "";
    let total = 0;
    const subtotal = item.price * item.quantity;
    total += subtotal;

    return `
        <div class="cart-content">
            <img class="cart-img" src="${item.images[0]}" alt="picture-${item.name}">
            <div class="info-product">
                <span>${item.name}</span>
                <span>$${item.price}×${item.quantity} $${getSubtotal(item)}.00</span>
            </div>
            <img class="icon-delete" id="icon-delete" onclick="removeProduct('${item.id}')" src="images/icon-delete.svg" alt="icon-delete" />
        </div>
        `
}

loadCart();