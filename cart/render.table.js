import { findById } from '../utils.js';
import { flowerTypes } from '../data.js';
import { calcItemTotal } from '../utils.js';
import { cart } from './cart.data.js';

export function renderTable(cartInfo){
    const tr = document.createElement('tr'); 
    const nameT = document.createElement('td'); 
    const priceT = document.createElement('td');
    const quantityT = document.createElement('td'); 
    const totalT = document.createElement('td'); 

    const floral = findById(flowerTypes, cartInfo.id); 

    nameT.textContent = floral.name; 
    priceT.textContent = floral.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityT.textContent = cartInfo.quantity; 

    const total = calcItemTotal(cartInfo.quantity, floral.price); 

    totalT.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.append(nameT, priceT, quantityT, totalT); 

    return tr;
}

export function orderTotal(allFlorals, wholeCart){
    let accumulator = 0; 

    for (let item of wholeCart){
        const floral = findById(allFlorals, item.id); 
        const total = floral.price * item.quantity;
        accumulator = accumulator + total;
    }
    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

//I envisioned this as a robot having to go to 2 different rooms - one that had the product data, the other that had the cart data. The robot has to go to each room to get the data points needed for one item-level subtotal. Each time the robot has one item-level subtotal, they write it down in the hallway outside the rooms on their ‘accumulator’ notepad. -Diyana