import { addToFlowers } from '../localstorage.utils.js';
const form = document.getElementById('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault(); 

    const data = new FormData(form); 

    const flower = {
        id: data.get('id'),
        name: data.get('name'),
        price: data.get('price'),
        amount: data.get ('amount'),
        image: data.get('image'),
    }; 
    addToFlowers(flower);
    window.location = '../flowers/index.html';
});