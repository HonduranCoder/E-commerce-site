import { renderFlowers } from '../render.utils.js';
import { flowerTypes } from '../data.js'; 
import { getFlowers } from '../localstorage.utils.js';

const ul = document.getElementById('flowers'); 

const finalFloral = getFlowers();

for (let flower of finalFloral){
    const li = renderFlowers(flower); 
    ul.append(li);
}