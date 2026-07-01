// display All Products
const showData = document.querySelector("#show-data");

// Get Data from API
async function getData() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        printData(data);
    } catch (error) {
        console.log(error);
    }
}
getData();

// Print Data

function printData(data) {
    data.map(function (ele) {
        showData.innerHTML +=
            `
        <div class="content" id="content">
            <img class="img-product ${ele.name}" id="${ele.id}" src="${ele.images[0]}" alt="picture-product">
            <div class="parent">         
            <h3>${ele.name}</h3>
            <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span> <s class="discount">$${ele.compare_at_price}</s></span>
            </div>
            <div class="btn-action back-primary">
                <button id="bay-now" class="btn btn-xl primary"><span>Bay Now</span></button>
                <img
                    class="cart-white"
                    src="images/icon-cart.svg"
                    alt="icon-cart" />
            </div>
            
        </div>
        `

        let imgProduct = document.querySelector("#product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
        let currentImage = document.querySelector("#image-slider");

        console.log(imgProduct);

        async function getDataSlideshowOne() {
            try {
                const response = await fetch("http://localhost:3000/products");
                let data = await response.json();
                data = data.filter(product => product.id === "product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
                // data = data.filter(product => product.id === "product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8");
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
                    <button><img class="previous" id="icon-previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                    <img class="img-product-big ${ele.name}" src="${ele.images[0]}" alt="picture-product">
                    <button><img class="next" id="icon-next" src="images/icon-next.svg" alt="icon-next"></button>
                </div>
                <div class="gallery-small">
                    <img class="img-product-small" src="${ele.images[0]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[1]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[2]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[3]}" alt="picture-product-small">
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
                        <button id="add-to cart" class="btn btn-xl secondary">Add-to cart</button>
                        <img
                            class="cart-black"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
                })
            })
        }

        let imgProductOne = document.querySelector("#product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8");

        async function getDataSlideshowTwo() {
            try {
                const response = await fetch("http://localhost:3000/products");
                let data = await response.json();
                // data = data.filter(product => product.id === "product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
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
                    <button><img class="previous" id="icon-previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                    <img class="img-product-big ${ele.name}" src="${ele.images[0]}" alt="picture-product">
                    <button><img class="next" id="icon-next" src="images/icon-next.svg" alt="icon-next"></button>
                </div>
                <div class="gallery-small">
                    <img class="img-product-small" src="${ele.images[0]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[1]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[2]}" alt="picture-product-small">
                    <img class="img-product-small" src="${ele.images[3]}" alt="picture-product-small">
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
                        <button id="add-to cart" class="btn btn-xl secondary">Add-to cart</button>
                        <img
                            class="cart-black"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
                })
            })
        }
    })
}

// Print Collections Product
const collection = document.querySelector("#collection");
const showCollections = document.querySelector("#show-collections");

async function getDataCollection() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        printDataCollection(data)
    } catch (error) {
        console.log(error);
    }
}
getDataCollection();

function printDataCollection(data) {
    data.map(function (ele) {
        collection.addEventListener("click", () => {
            showData.classList.add("hide");
            cardWoman.classList.add("hide");
            cardMan.classList.add("hide");
            cardWoman.classList.remove("flex");
            cardMan.classList.remove("flex");
            showCollections.innerHTML +=
                `
        <div class="content" id="content">
            <img class="img-product ${ele.name}" id="img-product" src="${ele.images[1]}" alt="picture-product">
            <div class="parent">         
            <h3>${ele.name}</h3>
            <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span> <s class="discount">$${ele.compare_at_price}</s></span>
            </div>
            <div class="btn-action back-primary">
                <button id="bay-now" class="btn btn-xl primary"><span>Bay Now</span></button>
                <img
                    class="cart-white"
                    src="images/icon-cart.svg"
                    alt="icon-cart" />
            </div>
            
        </div>
        `
        })
    })
}

const logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
    getData();
})
