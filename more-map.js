const friends = ['tom Hanks', 'tom cruse', 'tom brady', 'tom solaiman'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'mobile phone', price: 1050,color: 'black'},
    { name: 'smart  watch', price: 3450,color: 'black'},
    { name: 'sticky notes', price: 30,color: 'pink'},
    { name: 'water botol', price: 50,color: 'yellow'},
    { name: 'water glass', price: 3,color: 'white'},
]

const productsName =products.map(product=>product.name);
console.log(productsName);

const productsPrices = products.map(price=>price.price);
console.log(productsPrices);

products.map(product => console.log(product));

products.forEach(product=>console.log(product));