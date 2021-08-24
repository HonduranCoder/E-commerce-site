import { renderFlowers } from '../render.utils.js';
import { flowerTypes } from '../data.js';

const section = document.getElementById('flowers-section'); 

for (let flower of flowerTypes){
    const flowersSection = renderFlowers(flower); 
    section.append(flowersSection);
}

