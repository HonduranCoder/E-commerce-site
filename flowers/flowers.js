import { renderFlowers } from '../render.utils.js';
import { flowerTypes } from '../data.js';

const ul = document.getElementById('flowers'); 

for (let flower of flowerTypes){
    const li = renderFlowers(flower); 
    ul.append(li);
}

console.log(ul);