const hubby ='omor sani';
let name ='mamakemon aco ';
name ='radamadhob';
console.log(name);
const phone =`this is a phone that i have a gap `;

// template string 
const myNotes =`ami tomake 
tomar moto kore valobashi ${hubby}
tomi amar hero ami tomar `;
console.log(myNotes);

// default perameter 

// spread or three dots 
function maxNumber (array=[]){
    const max=Math.max(...array);
    return max;
}
const biggest =maxNumber();
console.log(biggest);

// arraw function
const square =x=>x*x;
console.log(square(8));