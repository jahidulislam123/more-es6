const numbers =[5,13,7,41,29,30,5,2,19];

const bigNumbers =numbers.filter(number=>number>20);
console.log(bigNumbers);

const smallNumbers =numbers.filter(number=>number<10);
console.log(smallNumbers);


const products = [
    { name: 'mobile phone', price: 1050,color: 'black'},
    { name: 'smart  watch', price: 3450,color: 'black'},
    { name: 'sticky notes', price: 30,color: 'pink'},
    { name: 'water botol', price: 50,color: 'yellow'},
    { name: 'water glass', price: 3,color: 'white'},
]

const exectPrice =products.filter(product=>product.price>100);
console.log(exectPrice);

const blacks =products.filter(product =>product.color=='black');
console.log(blacks);


const whiteItem =products.find(product=>product.color=='white');
console.log(whiteItem);