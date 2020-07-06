// Compass Web Prep: Looping Over Arrays


let amounts = [61.00, 52.25, 112.99, 5.00]; 
/*
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
*/

// Looping over an array using the purpose built for..of loop syntax.
/*
let total =0;

for (let amount of amounts){
  total+=amount;
} 
console.log('Order total is: '+total);

*/

let arrayOne=[1, 2, 3];
let y=0;
for (let x of arrayOne){
  y+=x;
  console.log(y);
}