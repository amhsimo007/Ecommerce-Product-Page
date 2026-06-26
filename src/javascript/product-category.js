// print product women
const productWomen = document.querySelector("#women");
const showProduct = document.querySelector("#show-product");
const cardWoman = document.querySelector("#card-women");

// Get Data from API
async function getData() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        printDataWoman(data);
    } catch (error) {
        console.log(error);
    }
}
getData();

function printDataWoman(data) {
    data.map(function (ele) {
        productWomen.addEventListener("click", function () {
            showProduct.style.display = "none";
            cardWoman.style.display = "flex";
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

