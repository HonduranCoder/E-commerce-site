import { orderTotal, renderTable } from './render.table.js';
import { flowerTypes } from '../data.js';
import { cart } from './cart.data.js';

const tableBody = document.querySelector('tbody'); 

for (let item of cart){
    const tr = renderTable(item); 
    tableBody.append(tr); 
}

const total = orderTotal(flowerTypes, cart); 

const totalT = document.getElementById('total');

totalT.textContent = total;
