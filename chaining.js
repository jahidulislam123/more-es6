// declare variable based on the name of an object property
const myObject ={x:4,y:45,t:56,u:98};
const {
    x
}=myObject;

console.log(myObject?.l?.q);
console.log(x);


// destructuring Array
const [u,t]=[98,56];
console.log(u,t);

const [best,faltu] =[45,32];
console.log(best,faltu);
const {name}={name:'jahid',age:43};
console.log(name);