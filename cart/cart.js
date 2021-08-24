import { renderTable } from './render.table.js';
import { cart } from 'cart.js'; 
import { flowerTypes } from '../data.js';

const tableBody = document.querySelector('tbody'); 

for (let item of cart){
    const tr = renderTable(item); 
    tableBody.append(tr); 
}

const total = wholeCart(flowerTypes, cart); 

const totalT = document.querySelector('#total');

totalT.textContent = total;
