const showCart = (userCart, products) => {
    content.innerHTML = "";
    userCart.map(prod => {
        let getProd = products.find(product => product.prodId == prod);
        content.insertAdjacentHTML("afterbegin", "<div><button id="+getProd.prodId+">" + getProd.prodName + "</button></div>")
    })

    let showCart = document.createElement("button");
    showCart.id = "showCart";
    showCart.innerText = "Visa produkter";
    showCart.addEventListener("click", () => {
        console.log("Visa produkter");
        printProducts(products);
    });
    content.appendChild(showCart);
}

export default showCart;