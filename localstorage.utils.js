import { findById } from './utils.js';

const CART = 'CART'; 

export function getCart() {
    // go and see what's in local storage under the key of CART
    const floralCart = localStorage.getItem(CART);
    // if it turns out nothing is there
    if (!floralCart){
        // just return a empty array to prevent catastrophic errors. Just give the consumer of this function something they can loop over
        // "initialize state"
        return [];
    }
    // finally, if there is a cart in local storage we expect it to be a string. Therefore, we should parse it.
    const finalFloralCart = JSON.parse(floralCart); 
    // return the final, parsed array
    return finalFloralCart;
}
   
export function setCart(cartArray){
    const floralCart = JSON.stringify(cartArray);
    localStorage.setItem(CART, floralCart);
}

export function addToCart(idOfFlowers){
    // 0) grab the cart from local storage
    const cart = getCart();
    // 1) once we have the cart, use findById to see if the item we're adding is already in the cart
    const flowersInCart = findById(cart, idOfFlowers);
        // 2a) if this product is already in the cart, 
    if (flowersInCart){
        // simply increment the quantity
        flowersInCart.quantity++;
    } else {
        // 2b) ELSE (if it is NOT in the cart)
        // make a new object 
        const newFloral = { id: idOfFlowers, quantity: 1 };
        // and put it in the cart
        cart.push(newFloral);
    }
    // 3) save the updated cart in local storage
    setCart(cart);
}

export function clearCart() {
    // 1) launch an alert telling the user what's in the cart
    // find out what's in the cart
    const cart = getCart();
    // stringify and format the cart so it will show up nice in an alert
    const floralCart = JSON.stringify(cart, true, 2); 
    // launch the alert with the stringy cart
    alert(floralCart);

    // 2) clear the cart in local storage
    localStorage.removeItem(CART);

    // 3) redirect the user back to the home page
    window.location = '../index.html';
}
