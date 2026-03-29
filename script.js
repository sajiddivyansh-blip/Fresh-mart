// script.js

// Shopping Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to the cart.`);
}

function viewCart() {
    console.log(`Items in cart:`);
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    console.log(`${productName} has been removed from the cart.`);
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Product Management Functionality
let products = [];

function addProduct(name, price) {
    let product = { name, price };
    products.push(product);
    console.log(`${name} has been added to the products list.`);
}

function viewProducts() {
    console.log(`Available Products:`);
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });
}

function removeProduct(productName) {
    products = products.filter(product => product.name !== productName);
    console.log(`${productName} has been removed from the product list.`);
}