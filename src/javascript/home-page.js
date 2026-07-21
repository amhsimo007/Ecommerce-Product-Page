const cartIcon = document.querySelector("#cart");
const displayCart = document.querySelector("#display-cart");
const showData = document.querySelector("#show-data");

cartIcon.addEventListener("click", function () {
    displayCart.classList.toggle("flex");
})

let cart = [];
let allProducts = [];

async function getData() {
    try {
        const response = await fetch("../api/products.json");
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
        <div class="content">
            <img class="img-product" id="${ele.id}" src="${ele.images[0]}" alt="picture-${ele.name}">
            <div class="parent">         
            <h3>${ele.name}</h3>
            <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span> <s class="discount">$${ele.compare_at_price}</s></span>
            </div>
            <div class="btn-action back-primary">
                <button class="btn btn-xl primary add-to-cart" onclick="addToCart('${ele.id}')"><span>Bay Now</span></button>
                <img
                    class="cart-white"
                    src="images/icon-cart.svg"
                    alt="icon-cart" />
            </div>

        </div>
        `
        // Products for women will be displayed when you click on their image

        let imgProductWomen = document.querySelector("#product-f407b6c6-d0cd-4cc3-8082-9a25ddc91c09");
        let currentImageWomen = document.querySelector("#image-slider-women");

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
                imgProductWomen.addEventListener("click", () => {
                    currentImageWomen.classList.add("flex");
                    showData.style.display = "none";
                    currentImageWomen.innerHTML = `                
            <div class="gallery">
                <div class="slideshow">
                    <img class="img-product" id="img-product-women" src="${ele.images[0]}" alt="picture-product">
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
                    <span  onclick="decreaseQuantity('${ele.id}')"><img class="icon-minus-women" id="icon-minus" src="images/icon-minus.svg" alt="icon-minus"></span>
                    <span class="count-text" id="count-text-women">0</span>
                    <span onclick="increaseQuantity('${ele.id}')"><img class="icon-plus" id="icon-plus-women" src="images/icon-plus.svg" alt="icon-plus"></span>
                    </div>
                    <div class="btn-action back-primary d-flex">
                        <button class="btn btn-xl secondary add-to-cart" onclick="addToCart('${ele.id}')">Add-to cart</button>
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
                    const mainImageProduct = document.getElementById("img-product-women");
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
                    // click in big image product women pop-up slider image It appears on the horizon
                    mainImageProduct.addEventListener("click", function () {
                        popUpGalleryProduct.style.display = "block";
                        popUpGalleryProduct.classList.add("style-pop-up");
                        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
                        popUpGalleryProduct.innerHTML = `
                <div class="gallery-pop-up">
                    <div class="slideshow" id="slideshow-women">
                        <button id="close-women" class="btn-close"><img class="icon-close" src="images/icon-close.svg" alt="icon-close"></button> 
                        <button id="previous-women" class="btn-previous"><img class="icon-previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                        <img class="img-big" id="img-big-women" src="${ele.images[0]}" alt="picture-product">
                        <button id="next-women" class="btn-next"><img class="icon-next" src="images/icon-next.svg" alt="icon-next"></button>
                    </div>
                    <div class="thumbnails-big" id="thumbnails-women">
                        <img class="thumb-big thumb-big-women" src="${ele.images[0]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-women" src="${ele.images[1]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-women" src="${ele.images[2]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-women" src="${ele.images[3]}" alt="picture-product-small">
                    </div>
                </div>
                `
                        const previous = document.getElementById("previous-women");
                        const next = document.getElementById("next-women");
                        const iconCloseWomen = document.getElementById("close-women");
                        const mainImageBig = document.getElementById("img-big-women");
                        thumbnailsImgWomen = document.querySelectorAll(".thumb-big-women");

                        thumbnailsImgWomen.forEach((image) => {
                            image.addEventListener("click", function () {
                                mainImageBig.src = this.src;
                                thumbnailsImgWomen.forEach((img) => {
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

                        iconCloseWomen.addEventListener("click", function () {
                            popUpGalleryProduct.style.display = "none";
                        })
                    })

                })
            }
            )
        }
        // Products for men will be displayed when you click on their image

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

        let imgProductMen = document.querySelector("#product-i407b6c6-4kdl-2eec-7890-23f4b5c6d7e8");
        let currentImageMen = document.querySelector("#image-slider-men");

        function printDataImageB(data) {
            data.map(function (ele) {
                imgProductMen.addEventListener("click", () => {
                    currentImageMen.classList.add("flex");
                    showData.style.display = "none";
                    currentImageMen.innerHTML = `                
            <div class="gallery">
                <div class="slideshow">
                    <img class="img-product" id="img-product-men" src="${ele.images[0]}" alt="picture-product">
                </div>
                <div class="thumbnails">
                    <img class="thumb thumb-men" src="${ele.images[0]}" alt="picture-product-small">
                    <img class="thumb thumb-men" src="${ele.images[1]}" alt="picture-product-small">
                    <img class="thumb thumb-men" src="${ele.images[2]}" alt="picture-product-small">
                    <img class="thumb thumb-men" src="${ele.images[3]}" alt="picture-product-small">
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
                    <span  onclick="decreaseQuantity('${ele.id}')"><img class="icon-minus" id="icon-minus-men" src="images/icon-minus.svg" alt="icon-minus"></span>
                    <span class="count-text" id="count-text-men">0</span>
                    <span onclick="increaseQuantity('${ele.id}')"><img class="icon-plus" id="icon-plus-men" src="images/icon-plus.svg" alt="icon-plus"></span>
                    </div>
                    <div class="btn-action back-primary d-flex">
                        <button class="btn btn-xl secondary add-to-cart" onclick="addToCart('${ele.id}')">Add-to cart</button>
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
                    const mainImageProductMen = document.getElementById("img-product-men");
                    const thumbnailsMem = document.querySelectorAll(".thumb-men");
                    const popUpGalleryProductMen = document.querySelector("#card-product-pop-up");

                    thumbnailsMem.forEach((image) => {
                        image.addEventListener("click", function () {
                            mainImageProductMen.src = this.src;
                            thumbnailsMem.forEach((img) => {
                                img.classList.remove("active");
                            });
                            this.classList.add("active");
                        });
                    });

                    // click in big image product men pop-up slider image It appears on the horizon
                    mainImageProductMen.addEventListener("click", function () {
                        popUpGalleryProductMen.style.display = "block";
                        popUpGalleryProductMen.classList.add("style-pop-up");
                        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
                        popUpGalleryProductMen.innerHTML = `
                <div class="gallery-pop-up">
                    <div class="slideshow" id="slideshow-men">
                        <button id="close-men" class="btn-close"><img class="icon-close" src="images/icon-close.svg" alt="icon-close"></button> 
                        <button id="previous-men" class="btn-previous"><img class="icon-previous" src="images/icon-previous.svg" alt="icon-previous"></button>    
                        <img class="img-big" id="img-big-men" src="${ele.images[0]}" alt="picture-product">
                        <button id="next-men" class="btn-next"><img class="icon-next" src="images/icon-next.svg" alt="icon-next"></button>
                    </div>
                    <div class="thumbnails-big" id="thumbnails-men">
                        <img class="thumb-big thumb-big-men" src="${ele.images[0]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-men" src="${ele.images[1]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-men" src="${ele.images[2]}" alt="picture-product-small">
                        <img class="thumb-big thumb-big-men" src="${ele.images[3]}" alt="picture-product-small">
                    </div>
                </div>
                `

                        const previousMen = document.getElementById("previous-men");
                        const nextMen = document.getElementById("next-men");
                        const iconCloseMen = document.getElementById("close-men");
                        const mainImageBigMen = document.getElementById("img-big-men");
                        const thumbnailsImgMen = document.querySelectorAll(".thumb-big-men");

                        thumbnailsImgMen.forEach((image) => {
                            image.addEventListener("click", function () {
                                mainImageBigMen.src = this.src;
                                thumbnailsImgMen.forEach((img) => {
                                    img.classList.remove("active");
                                });
                                this.classList.add("active");
                            });
                        });

                        let currentIndex = 0;
                        function showImage() {
                            mainImageBigMen.src = images[currentIndex];
                        }
                        showImage();

                        nextMen.addEventListener("click", () => {
                            currentIndex++;
                            mainImageBigMen.src = images[currentIndex];

                            if (currentIndex >= images.length) {
                                currentIndex = 0;
                            }

                            showImage();
                        })

                        previousMen.addEventListener("click", () => {
                            currentIndex--;
                            mainImageBigMen.src = images[currentIndex];

                            if (currentIndex < 0) {
                                currentIndex =
                                    images.length - 1;
                            }

                            showImage();
                        })

                        iconCloseMen.addEventListener("click", function () {
                            popUpGalleryProductMen.style.display = "none";
                        })
                    })
                })
            })
        }

    })
}
