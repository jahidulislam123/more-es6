const numbers =[4,6,8,10];
// const output =[];

// const doubleOld(number){
//     return number*2;
// }
const doubleit = number=>number*2;

// for(const number of numbers){
//     const result =doubleit(number);
//     output.push(result);
// }
// console.log(output);

const output2 =numbers.map(doubleit);
console.log(output2);