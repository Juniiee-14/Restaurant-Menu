const itemOne = "Burger"
const itemTwo = "Fries"
const itemThree = "Coke"

let burgerPrice = 120
let friesPrice = 80
let cokePrice = 50

let burgerQuantity = 0
let friesQuantity = 0
let cokeQuantity = 0

let grandTotal = (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity >= 500)

// Price

document.getElementById("burgerprice").textContent = "₱ " + burgerPrice

document.getElementById("friesprice").textContent = "₱ " + friesPrice

document.getElementById("cokeprice").textContent = "₱ " + cokePrice

// Quantity

document.getElementById("burgerqty").textContent = "Quantity: " + burgerQuantity

document.getElementById("friesqty").textContent = "Quantity: " + friesQuantity

document.getElementById("cokeqty").textContent = "Quantity: " + cokeQuantity

// + button

document.getElementById("burgeradd").onclick = function() {
    burgerQuantity = burgerQuantity + 1

    document.getElementById("burgerqty").textContent = "Quantity: " + burgerQuantity
    document.getElementById("burgertotal").textContent = "Subtotal: ₱" + burgerPrice * burgerQuantity

    //Grand Total
    document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

    updateDiscount();
}

document.getElementById("friesadd").onclick = function() {
    friesQuantity = friesQuantity + 1
    document.getElementById("friesqty").textContent = "Quantity: " + friesQuantity
    document.getElementById("friestotal").textContent = "Subtotal: ₱" + friesPrice * friesQuantity

    //Grand Total
    document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

    updateDiscount();
}

document.getElementById("cokeadd").onclick = function() {
    cokeQuantity = cokeQuantity + 1
    document.getElementById("cokeqty").textContent = "Quantity: " + cokeQuantity
    document.getElementById("coketotal").textContent = "Subtotal: ₱" + cokePrice * cokeQuantity

    //Grand Total
    document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

    updateDiscount();
}

// - button

document.getElementById("burgerminus").onclick = function() {
    
    if (burgerQuantity > 0) {
        burgerQuantity = burgerQuantity - 1
        document.getElementById("burgertotal").textContent = "Subtotal: ₱" + burgerPrice * burgerQuantity

        //Subtotal
        document.getElementById("burgerqty").textContent = "Quantity: " + burgerQuantity

        //Grand Total
        document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

        updateDiscount();
    }
}


document.getElementById("friesminus").onclick = function() {
    if (friesQuantity > 0) {
        friesQuantity = friesQuantity - 1
        document.getElementById("friesqty").textContent = "Quantity: " + friesQuantity

        // Subtotal
        document.getElementById("friestotal").textContent = "Subtotal: ₱" + friesPrice * friesQuantity

        //Grand Total 
        document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

        updateDiscount();
    }
    
}

document.getElementById("cokeminus").onclick = function() {
    if (cokeQuantity > 0) {
        cokeQuantity = cokeQuantity - 1
        document.getElementById("cokeqty").textContent = "Quantity: " + cokeQuantity

        // Subtotal
        document.getElementById("coketotal").textContent = "Subtotal: ₱" + cokePrice * cokeQuantity

        //Grand Total
        document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

        updateDiscount();
    }
}

document.getElementById("clearcart").onclick = function() {
    burgerQuantity = 0
    friesQuantity = 0
    cokeQuantity = 0

    updateDiscount()

    document.getElementById("burgerqty").textContent = "Quantity: " + burgerQuantity
    document.getElementById("friesqty").textContent = "Quantity: " + friesQuantity
    document.getElementById("cokeqty").textContent = "Quantity: " + cokeQuantity

    document.getElementById("burgertotal").textContent = "Subtotal: "
    document.getElementById("friestotal").textContent = "Subtotal: "
    document.getElementById("coketotal").textContent = "Subtotal: "

    document.getElementById("grandtotal").textContent = "GRANDTOTAL: ₱" + (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)
}

// DISCOUNT FUNCTION
function updateDiscount() {
    grandTotal = (burgerPrice * burgerQuantity + friesPrice * friesQuantity + cokePrice * cokeQuantity)

    // discount
    if (grandTotal >= 500) {
    document.getElementById("discount").textContent = "Discount: ₱50" 
    } else {
    document.getElementById("discount").textContent = "Discount: ₱0"
    }
}


