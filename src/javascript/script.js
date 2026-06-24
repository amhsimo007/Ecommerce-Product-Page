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
            <img class="img-product" src="${ele.images[1]}" alt="picture-product">
            <div class="parent">         
            <h3>${ele.name}</h3>
            <span class="price">$${ele.price}.00 <span class="percentage">${ele.reduction}%</span> <s class="discount">$${ele.compare_at_price}</s></span>
            </div>
            <div class="btn-action">
                <button id="bay-now" class="btn">Bay Now</button>
                <img
                    class="cart"
                    src="images/icon-cart.svg"
                    alt="icon-cart" />
            </div>
            
        </div>
        `
    })
}