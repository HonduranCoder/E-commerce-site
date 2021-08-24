import { findById } from "../utils.js";
import { calcItemTotal } from "../utils.js";
import { flowerTypes } from "../data.js";

const test = QUnit.test; 

test('calcItemTotal should take in amount and price and return the total', (expect)=>{
    const expected = 14; 
    const actual = calcItemTotal(14,1); 
    expect.equal(actual, expected);
});

test('renderTable should take in a flower and return the correct HTML elements', (expect)=>{
    const expected = `li class = "flower" id = "flower"><h3 class = "flower-name">Rose:</h3> </li><img class = "flower-image" src = "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80"/><p class = "price">Price: $ </p><p class = "amount">Amount: </p><button id = "button">Add</button>`;

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

