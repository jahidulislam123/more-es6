const fish = {
    name: 'king hilsa',
    id: 58,
    price: 9000,
    phone: '545565',
    address: 'chadpur',
    dress: 'silver',
    girlfriend: 'katla'
}
// const price =fish.price;
// console.log(price);
// const phone = fish.phone;
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);

// const dress =fish.dress;
// // console.log(dress);
// const id =fish.id;
// console.log(id);

const {
    phone,
    price,
    dress,
    id
} = fish;
console.log(phone);



const company = {
    name: 'gp',
    ceo: {
        id: 2,
        name: 'ajmol',
        food: 'fuska'
    },
    web: {
        word: 'website developemnet',
        emplayeeId: 33,
        framaeword: "react",tech:{first:'jahid'}
    }
}
// const work =company.web.word;
// const frameWork =company.web.framaeword;
const {
    word,
    framaeword
} = company.web;
const {
    food
} = company.ceo;
console.log(word, framaeword, food);
console.log(company.ceo.id);