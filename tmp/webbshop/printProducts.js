export default function printProducts(products) {

    content.innerHTML = "";

    let productList = document.createElement("div");

    products.map(product => {
        productList.insertAdjacentHTML("afterbegin", "<div><button id="+product.prodId+">" + product.prodName + "</button></div>")
    })

    productList.addEventListener("click", (e) => {
        console.log("Klickade på produkt", e.target.id);
        addToCart(e.target.id);
    })

    content.appendChild(productList);
}