
export function renderFlowers(flowerTypes){
    const li = document.createElement('li');
    const h3 = document.createElement('h3'); 
    const img = document.createElement('img');
    const flexSection = document.createElement('section');
    const price = document.createElement('p'); 
    const amount = document.createElement('p');
    const addButton = document.createElement('button');


    li.classList.add('flower'); 
    h3.classList.add('flower-name'); 
    img.classList.add('flower-image'); 
    price.classList.add('price'); 
    amount.classList.add('amount'); 
    addButton.classList.add('add');

    h3.textContent = flowerTypes.name;
    img.src = flowerTypes.image;
    price.textContent = `${flowerTypes.price}`;
    amount.textContent = `${flowerTypes.amount}`;

    flexSection.append(h3, img.src, price, amount, addButton);

    li.append(
        h3, 
        img, 
        price, 
        amount, 
        flexSection
    ); 
    return li; 
}