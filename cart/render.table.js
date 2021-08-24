import { findById } from '../utils.js';
import { flowerTypes } from '../data.js';
import { calcItemTotal } from '../test/utils.test.js'

export function renderTable(cartInfo){
    const tr = document.createElement('tr'); 
    const nameT = document.createElement('td'); 
    const priceT = document.createElement('td');
    const quantityT = document.createElement('td'); 
    const totalT = document.createElement('td'); 

    const floral = findById(flowerTypes, cartInfo.id); 

    nameT.textContent = floral.nameTd; 
    priceT.textContent = floral.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    quantityT.textContent = cartInfo.quantity; 

    const total = getTotal(floral.price, floral.quantity); 

    totalT.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.append(nameT, priceT, quantityT, totalT); 

    return tr;
}

function getTotal(price, quantity){
    const total = price * quantity; 
    return total;
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