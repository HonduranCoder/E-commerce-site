import { orderTotal, renderTable } from './render.table.js';
import { flowerTypes } from '../data.js';
//import { cart } from './cart.data.js';
import { clearCart, getCart } from '../localstorage.utils.js';

const completeCart = getCart();

const tableBody = document.querySelector('tbody'); 
const button = document.querySelector('#button');


for (let item of completeCart){
    const tr = renderTable(item); 
    tableBody.append(tr); 
}

const total = orderTotal(flowerTypes, completeCart); 

const totalT = document.getElementById('total');

totalT.textContent = total;

button.addEventListener('click', ()=>{
    clearCart();
});