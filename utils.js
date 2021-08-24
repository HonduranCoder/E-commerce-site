export function findById(myArray, id) {
    for (let item of myArray){
        if (item.id === id){
            return item;
        }
    }
}

export function calcItemTotal(quantity, price){
    return quantity * price;
}