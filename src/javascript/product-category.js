// Print Product Women
const productWomen = document.querySelector("#women");
const showAllProduct = document.querySelector("#show-all-product");
const cardWoman = document.querySelector("#card-women");

// Get Data From API
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
            showData.style.display = "none";
            // showCollections.style.display = "none";
            cardWoman.innerHTML = `                
            <div class="gallery">
                <div class="slideshow" id="slideshow">
                    <img class="img-product-big ${ele.name}" id="${ele.id}" src="${ele.images[0]}" alt="picture-product">
                </div>
                <div class="thumbnails" id="thumbnails">
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
                        <button class="btn btn-xl secondary add-to-cart" data-id="${ele.id}">Add-to cart</button>
                        <img
                            class="cart-black"
                            src="images/icon-cart.svg"
                            alt="icon-cart" />
                    </div>
                </div>
            </div>
        `
            // click on Thumbnails change image big change
            const images = [`${ele.images[0]}`, `${ele.images[1]}`, `${ele.images[2]}`, `${ele.images[3]}`];
            let currentIndex = 0;
            const mainImage = document.querySelector(".img-product-big");
            const thumbnails = document.querySelectorAll(".thumb");
            const popUpGallery = document.querySelector("#card-women-pop-up");
            const navbar = document.querySelector("#navbar");

            thumbnails.forEach((image) => {
                image.addEventListener("click", function () {
                    mainImage.src = this.src;
                    thumbnails.forEach((img) => {
                        img.classList.remove("active");
                    });
                    this.classList.add("active");
                });
            });

            // click in big image pop-up slider image It appears on the horizon
            mainImage.addEventListener("click", function () {
                popUpGallery.style.display = "block";
                popUpGallery.classList.add("style-pop-up");
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
                popUpGallery.innerHTML = `
                <div class="gallery-po-up">
                    <div class="slideshow" id="slideshow">
                        <button id="close"><img class="close" src="images/icon-close.svg" alt="icon-close"></button> 
                        <button id="previous"><img class="previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                        <img class="img-big ${ele.name}" id="${ele.id}" src="${ele.images[0]}" alt="picture-product">
                        <button id="next"><img class="next" src="images/icon-next.svg" alt="icon-next"></button>
                    </div>
                    <div class="thumbnails-big" id="thumbnails">
                        <img class="thumb-big" src="${ele.images[0]}" alt="picture-product-small">
                        <img class="thumb-big" src="${ele.images[1]}" alt="picture-product-small">
                        <img class="thumb-big" src="${ele.images[2]}" alt="picture-product-small">
                        <img class="thumb-big" src="${ele.images[3]}" alt="picture-product-small">
                    </div>
                </div>
                `
                const bigImage = document.querySelector(".img-big");
                const previous = document.getElementById("previous");
                const next = document.getElementById("next");
                const thumbnailsBig = document.querySelectorAll(".thumb-big");
                const close = document.querySelector("#close");

                function showImage() {
                    bigImage.src = images[currentIndex];
                }
                showImage();

                next.addEventListener("click", () => {
                    currentIndex++;
                    bigImage.src = images[currentIndex];
                    if (currentIndex >= images.length) {
                        currentIndex = 0;
                    }
                    showImage();
                })

                previous.addEventListener("click", () => {
                    currentIndex--;
                    bigImage.src = images[currentIndex];
                    if (currentIndex < 0) {
                        currentIndex =
                            images.length - 1;
                    }
                    showImage();
                })

                close.addEventListener("click", function () {
                    popUpGallery.style.display = "none";
                })

                thumbnailsBig.forEach((image) => {
                    image.addEventListener("click", function () {
                        bigImage.src = this.src;
                        thumbnails.forEach((img) => {
                            img.classList.remove("active");
                        });
                        this.classList.add("active");
                    });
                });
            })
        })
    })
}

// Print Product Men
const productMen = document.querySelector("#men");
const cardMan = document.querySelector("#card-men");

// Get Data From API
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
            showData.style.display = "none";
            // showCollections.style.display = "none";
            cardMan.innerHTML = `                
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
            <div class="description" id="show-data-men">
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
                        <button class="btn btn-xl secondary add-to-cart" data-id="${ele.id}">Add-to cart</button>
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
            // console.log(images);
            let currentIndex = 0;
            // console.log(currentIndex);
            const previous = document.getElementById("previous");
            // console.log(previous);
            const next = document.getElementById("next");
            // console.log(next);
            const mainImage = document.querySelector(".img-product-big");
            // console.log(mainImage);

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

