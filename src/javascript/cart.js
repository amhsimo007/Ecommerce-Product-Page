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
        // Products for women will be displayed when you click on their image
        let imgProduct = document.querySelector("#product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
        let currentImage = document.querySelector("#image-slider");

        async function getDataSlideshowOne() {
            try {
                const response = await fetch("http://localhost:3000/products");
                let data = await response.json();
                data = data.filter(product => product.id === "product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
                printDataImageA(data);
            } catch (error) {
                console.log(error);
            }
        }
        getDataSlideshowOne();

        function printDataImageA(data) {
            data.map(function (ele) {
                imgProduct.addEventListener("click", () => {
                    currentImage.classList.add("flex");
                    showData.style.display = "none";
                    currentImage.innerHTML = `                
            <div class="gallery">
                <div class="slideshow" id="slideshow">
                    <img class="img-product-big ${ele.name}" src="${ele.images[0]}" alt="picture-product">
                </div>
                <div class="thumbnails">
                    <img class="thumb" src="${ele.images[0]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[1]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[2]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[3]}" alt="picture-product-small">
                </div>
            </div>
            <div class="description" id="show-data-women">
                <span>${ele.brand}</span>
                <h2 class="subtitle">${ele.name}</h2>
                <p class="paragraph">${ele.description}</p>
                <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span></span>
                <s class="discount">$${ele.compare_at_price}</s>
                <div class="counter-cart">
                <div class="counter">
                    <span><img class="icon-minus" id="icon-minus" src="images/icon-minus.svg" alt="icon-minus"></span>
                    <span>0</span>
                    <span><img class="icon-plus" id="icon-plus" src="images/icon-plus.svg" alt="icon-plus"></span>
                    </div>
                    <div class="btn-action back-primary d-flex">
                        <button class="btn btn-xl secondary add-to-cart" data-id="${ele.id}" onclick="addToCart('${ele.id}')">Add-to cart</button>
                        <img
                            class="cart-black"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `

                    // click on Thumbnails change image big change
                    const imagesProducts = [`${ele.images[0]}`, `${ele.images[1]}`, `${ele.images[2]}`, `${ele.images[3]}`];
                    const mainImageProduct = document.querySelector(".img-product-big");
                    const thumbnailsProduct = document.querySelectorAll(".thumb");
                    const popUpGalleryProduct = document.querySelector("#card-product-pop-up");

                    thumbnailsProduct.forEach((image) => {
                        image.addEventListener("click", function () {
                            mainImageProduct.src = this.src;
                            thumbnailsProduct.forEach((img) => {
                                img.classList.remove("active");
                            });
                            this.classList.add("active");
                        });
                    });
                    // click in big image pop-up slider image It appears on the horizon
                    mainImageProduct.addEventListener("click", function () {
                        popUpGalleryProduct.style.display = "block";
                        popUpGalleryProduct.classList.add("style-pop-up");
                        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
                        popUpGalleryProduct.innerHTML = `
                <div class="gallery-po-up">
                    <div class="slideshow" id="slideshow">
                        <button id="close"><img class="close" src="images/icon-close.svg" alt="icon-close"></button> 
                        <button id="previous"><img class="previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                        <img class="img-big ${ele.name}" id="img-big-p" src="${ele.images[0]}" alt="picture-product">
                        <button id="next"><img class="next" src="images/icon-next.svg" alt="icon-next"></button>
                    </div>
                    <div class="thumbnails-big" id="thumbnails">
                        <img class="thumb-big thumb-big-p" src="${ele.images[0]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-p" src="${ele.images[1]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-p" src="${ele.images[2]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-p" src="${ele.images[3]}" alt="picture-product-small">
                    </div>
                </div>
                `
                        const previous = document.getElementById("previous");
                        const next = document.getElementById("next");
                        const close = document.querySelector("#close");
                        const mainImageBig = document.querySelector("#img-big-p");
                        thumbnailsBigOne = document.querySelectorAll(".thumb-big-p");

                        thumbnailsBigOne.forEach((image) => {
                            image.addEventListener("click", function () {
                                mainImageBig.src = this.src;
                                thumbnailsBigOne.forEach((img) => {
                                    img.classList.remove("active");
                                });
                                this.classList.add("active");
                            });
                        });

                        let currentIndexProduct = 0;

                        function showImage() {
                            mainImageBig.src = imagesProducts[currentIndexProduct];
                        }
                        showImage();

                        next.addEventListener("click", () => {
                            currentIndexProduct++;
                            mainImageBig.src = imagesProducts[currentIndexProduct];
                            if (currentIndexProduct >= imagesProducts.length) {
                                currentIndexProduct = 0;
                            }
                            showImage();
                        })

                        previous.addEventListener("click", () => {
                            currentIndexProduct--;
                            mainImageBig.src = imagesProducts[currentIndexProduct];
                            if (currentIndexProduct < 0) {
                                currentIndexProduct =
                                    imagesProducts.length - 1;
                            }
                            showImage();
                        })

                        close.addEventListener("click", function () {
                            popUpGalleryProduct.style.display = "none";
                        })
                    })

                })
            }
            )
        }
        // Products for men will be displayed when you click on their image
        let imgProductOne = document.querySelector("#product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8");

        async function getDataSlideshowTwo() {
            try {
                const response = await fetch("http://localhost:3000/products");
                let data = await response.json();
                data = data.filter(product => product.id === "product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8");
                printDataImageB(data);
            } catch (error) {
                console.log(error);
            }
        }
        getDataSlideshowTwo()

        function printDataImageB(data) {
            data.map(function (ele) {
                imgProductOne.addEventListener("click", () => {
                    currentImage.classList.add("flex");
                    showData.style.display = "none";
                    currentImage.innerHTML = `                
            <div class="gallery">
                <div class="slideshow" id="slideshow">
                    <button id="previous"><img class="previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                    <img class="img-product-big ${ele.name}" src="${ele.images[0]}" alt="picture-product">
                    <button id="next"><img class="next" src="images/icon-next.svg" alt="icon-next"></button>
                </div>
                <div class="thumbnails">
                    <img class="thumb" src="${ele.images[0]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[1]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[2]}" alt="picture-product-small">
                    <img class="thumb" src="${ele.images[3]}" alt="picture-product-small">
                </div>
            </div>
            <div class="description" id="show-data-women">
                <span>${ele.brand}</span>
                <h2 class="subtitle">${ele.name}</h2>
                <p class="paragraph">${ele.description}</p>
                <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span></span>
                <s class="discount">$${ele.compare_at_price}</s>
                <div class="counter-cart">
                    <div class="counter">
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </div>
                    <div class="btn-action back-primary d-flex">
                        <button class="btn btn-xl secondary add-to-cart" data-id="${ele.id}" onclick="addToCart('${ele.id}')">Add-to cart</button>
                        <img
                            class="cart-black"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
                    // slider image
                    const images = [`${ele.images[0]}`, `${ele.images[1]}`, `${ele.images[2]}`, `${ele.images[3]}`];
                    let currentIndex = 0;
                    const previous = document.getElementById("previous");
                    const next = document.getElementById("next");
                    const mainImage = document.querySelector(".img-product-big");

                    function showImage() {
                        mainImage.src = images[currentIndex];
                    }
                    showImage();

                    next.addEventListener("click", () => {
                        currentIndex++;
                        mainImage.src = images[currentIndex];

                        if (currentIndex >= images.length) {
                            currentIndex = 0;
                        }

                        showImage();
                    })

                    previous.addEventListener("click", () => {
                        currentIndex--;
                        mainImage.src = images[currentIndex];

                        if (currentIndex < 0) {
                            currentIndex =
                                images.length - 1;
                        }

                        showImage();
                    })
                })
            })
        }

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

// Navbar
const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");
const hamburgerIcon = document.querySelector("#icon-hamburger");
const iconClose = document.querySelector("#icon-close");
const container = document.querySelector("#container");
const mediaQuery = window.matchMedia("(max-width: 1023px)");

hamburgerIcon.addEventListener("click", function () {
    menu.style.flexDirection = "column";
    menu.style.gap = "15px";
    menu.style.position = "absolute";
    menu.style.zIndex = "1";
    menu.style.top = "0";
    menu.style.left = "0";
    menu.style.backgroundColor = "var(--color-White)";
    menu.style.width = "50%";
    menu.style.height = "100%";
    menu.style.padding = "5px 25px";
    menu.style.borderRight = "2px solid var(--color-pri-orange)";
    menu.style.borderBottom = "2px solid var(--color-pri-orange)";
    menu.style.borderRadius = "5px";
})

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    menu.classList.toggle("flex");
    iconClose.classList.toggle("active");
    container.classList.add("color-back");
})

iconClose.addEventListener("click", () => {
    iconClose.classList.toggle("active");
    menu.classList.toggle("flex");
    hamburgerIcon.classList.toggle("active");
    container.classList.remove("color-back");
})
