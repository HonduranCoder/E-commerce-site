import { findById } from '../utils.js';
import { calcItemTotal } from '../utils.js';
import { flowerTypes } from '../data.js';
import { renderFlowers } from '../render.utils.js';
import { getCart } from '../localstorage.utils.js';

const test = QUnit.test; 

test('calcItemTotal should take in amount and price and return the total', (expect)=>{
    const expected = 14; 
    const actual = calcItemTotal(14,1); 
    expect.equal(actual, expected);
});

test('renderTable should take in a flower and return the correct HTML elements', (expect)=>{
    const expected = `<li class="flower"id="flower"><h3 class="flower-name">Rose</h3></li><img class="flower-image" src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80..assets/Rose.jpeg/\"><p class = "price">Price:$14</p><p class = "amount">Amount:1</p><section><button id=class="add"><"/button">Add</buttsection></li>`;

    const actual = renderFlowers({
        id: 1,
        name: 'Rose',
        price: 14, 
        amount: 1,
        image: '../assets/Rose.jpeg'
    });
    expect.equal(actual.outerHTML, expected)
});


test('findById should take in an id and an array and return the matching id object', (expect)=> {
    const expected = {
        id: 1,
        name: 'Rose',
        price: 14, 
        amount: 1,
        image: '../assets/Rose.jpeg'
    }; 

    const actual = findById(flowerTypes, 1);

    expect.deepEqual(actual, expected);
});

/* ...should be in a separate file
  const cart [
        {
            id: 4, 
            quantity: 10,
        }, 
        {
            id: 6,
            quantity: 9,
        }
    ]

test ('getCart should return whatever array is in the CART key of localStorage'), (expect) =>{
    const floralCart = JSON.stringify(cart); 
    localStorage.setItem('CART', floralCart);

    const actual = getCart(); 

    expect.deepEqual(actual, cart);
};

*/