let header = document.getElementById("header");
let cart = document.getElementById("cart");
let content = document.getElementById("content");

let userCart = []

let products = [
    {prodId: 1, prodName: "Sko", prodPrice: 499},
    {prodId: 2, prodName: "Strumpa", prodPrice: 99},
    {prodId: 3, prodName: "Byxa", prodPrice: 899},
    {prodId: 4, prodName: "Keps", prodPrice: 299},
]

function printCart() {
    if (userCart.length === 0) {
        cart.innerText = "Inget i kundvagnen";
    } else {
        //
        let cartSum = 0;
        userCart.map(produkt => {
            
            console.log("prod", produkt);
            //prodPrice = products.find(product => product.prodId === prod);

            let getProd = products.find(product => product.prodId == produkt);

            console.log("product", getProd);
            cartSum += getProd.prodPrice;
        })
        cart.innerText = cartSum + " kr";

        let visaKundvagn = document.createElement("button");
        visaKundvagn.id = "visaKundvagn";
        visaKundvagn.innerText = "Visa kundvagn";
        visaKundvagn.addEventListener("click", () => {
            console.log("Visa kundvagn");

            showCart();
        });

        cart.appendChild(visaKundvagn);

    }
}

function printProducts() {

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

function showCart() {
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
        printProducts();
    });
    content.appendChild(showCart);
}

function addToCart(prod) {
    userCart.push(prod);
    console.log(userCart);
    printCart();
}



content.addEventListener("click", (e) => {
    addToCart(e.target.id);
})

printProducts();
printCart();