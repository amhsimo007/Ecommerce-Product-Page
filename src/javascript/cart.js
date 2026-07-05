const cart = document.querySelector("#cart");
const displayCart = document.querySelector("#display-cart");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
console.log(cart);



fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => {
        const addToCartBtn = document.querySelectorAll(".add-to-cart");
        console.log(addToCartBtn);

        addToCartBtn.forEach(button => {
            button.addEventListener("click", (event) => {
                const productId = event.target.getAttribute("data-id");
                const selectedProduct = data.find(product => product.id == productId);

                addToCart(selectedProduct);
            })
        })
    })

function addToCart(product) {
    console.log(selectedProduct);
}

addToCart();


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