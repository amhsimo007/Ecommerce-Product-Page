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
            <img class="img-product" id="img-product" src="${ele.images[0]}" alt="picture-product">
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
}

// Print Collections Product
const collection = document.querySelector("#collection");
const showCollections = document.querySelector("#show-collections");

async function getDataCol() {
    try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        printDataManM(data)
    } catch (error) {
        console.log(error);
    }
}
getDataCol();

function printDataManM(data) {
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
            <img class="img-product" id="img-product" src="${ele.images[0]}" alt="picture-product">
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
