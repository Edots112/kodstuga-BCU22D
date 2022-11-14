import showCart from "./showCart.js";

export default function printCart(userCart, products) {
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

            showCart(userCart, products);
        });

        cart.appendChild(visaKundvagn);

    }
}