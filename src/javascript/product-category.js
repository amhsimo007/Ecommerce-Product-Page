// print product women
const productWomen = document.querySelector("#women");
const showAllProduct = document.querySelector("#show-all-product");
const cardWoman = document.querySelector("#card-women");

// Get Data from API
async function getDataWoman() {
    try {
        const response = await fetch("http://localhost:3000/products");
        let data = await response.json();
        data = data.filter(product => product.id === "product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09")
        printDataWoman(data);
    } catch (error) {
        console.log(error);
    }
}
getDataWoman();

function printDataWoman(data) {
    data.map(function (ele) {
        productWomen.addEventListener("click", () => {
            cardWoman.classList.add("flex");
            cardMan.classList.remove("flex");
            showAllProduct.style.display = "none";
            cardWoman.innerHTML = `                
            <div class="gallery">
                <img class="img-product-big" src="${ele.images[0]}" alt="picture-product">
                <div class="gallery-small">
                    <img class="img-product-small" src="${ele.images[0]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[1]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[2]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[3]}" alt="picture-product">
                </div>
            </div>
            <div class="description" id="show-data">
                <span>${ele.brand}</span>
                <h2 class="subtitle">${ele.name}</h2>
                <p class="paragraph">${ele.description}</p>
                <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span></span>
                <s class="discount">$${ele.compare_at_price}</s>
                <div class="counter-cart">
                    <div class="counter">
                        <span>-</span>
                        <span>3</span>
                        <span>+</span>
                    </div>
                    <div class="btn-action">
                        <button id="add-to cart" class="add-to cart">add-to cart</button>
                        <img
                            class="cart"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
        })
    })
}

// print product men
const productMen = document.querySelector("#men");
const cardMan = document.querySelector("#card-men");

// Get Data from API
async function getDataMen() {
    try {
        const response = await fetch("http://localhost:3000/products");
        let data = await response.json();
        data = data.filter(product => product.id === "product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8")
        printDataMan(data);
    } catch (error) {
        console.log(error);
    }
}
getDataMen();

function printDataMan(data) {
    data.map(function (ele) {
        productMen.addEventListener("click", () => {
            cardMan.classList.add("flex");
            cardWoman.classList.remove("flex");
            showAllProduct.style.display = "none";
            cardMan.innerHTML = `                
            <div class="gallery">
                <img class="img-product-big" src="${ele.images[0]}" alt="picture-product">
                <div class="gallery-small">
                    <img class="img-product-small" src="${ele.images[0]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[1]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[2]}" alt="picture-product">
                    <img class="img-product-small" src="${ele.images[3]}" alt="picture-product">
                </div>
            </div>
            <div class="description" id="show-data">
                <span>${ele.brand}</span>
                <h2 class="subtitle">${ele.name}</h2>
                <p class="paragraph">${ele.description}</p>
                <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span></span>
                <s class="discount">$${ele.compare_at_price}</s>
                <div class="counter-cart">
                    <div class="counter">
                        <span>-</span>
                        <span>3</span>
                        <span>+</span>
                    </div>
                    <div class="btn-action">
                        <button id="add-to cart" class="add-to cart">add-to cart</button>
                        <img
                            class="cart"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
        })
    })
}
