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
                <button class="btn btn-xl primary add-to-cart" data-id="${ele.id}"><span>Bay Now</span></button>
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
            })
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
                <button class="btn btn-xl primary add-to-cart" data-id="${ele.id}"><span>Bay Now</span></button>
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
