const cart = document.querySelector("#cart");
const displayCart = document.querySelector("#display-cart");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
console.log(cart);

cart.addEventListener("click", function () {
    displayCart.classList.toggle("active");
    displayCart.innerHTML +=
        `
    <div class="cart-container">
        <h3>Cart</h3>
        <div class="cart-content">
            <img src="images/favicon-32x32.png" alt="">
            <div class="info">
                <span>Fall Limited Edition Sneakers</span>
                <span>$125.00*3 $375.00</span>
            </div>
            <img src="images/icon-delete.svg" alt="icon-delete" />
        </div>
        <div class="btn-action back-primary d-flex">
            <button id="checkout" class="btn btn-xl secondary checkout">Checkout</button>
        </div>
    </div>
    `
})