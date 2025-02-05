
// ==================== Math library and it's properties ======================

let numberVal = 228.2312312;

console.log(`Print first three number after . : ${numberVal.toFixed(3)}`)
console.log(`Convert to string and display length : ${numberVal.toString().length}`);
console.log(`Display rounded value ${Math.round(numberVal)}`);

console.log(`Display bottom value ${Math.floor(numberVal)}`);
console.log(`Display top value ${Math.ceil(numberVal)}`);

console.log(`Display minimum value ${Math.min(23, 5, 2, 67, 45,)}`);
console.log(`Display maximum value ${Math.max(23, 5, 2, 67, 45,)}`);

console.log(`Display absolute value ${Math.abs(numberVal)}`);
console.log(`Display Square of given value ${Math.sqrt(16)}`);

// random function create number between 0 and 1 
console.log(Math.random());
console.log(Math.random().toFixed(4));

// generate the random number between 10 and 60 instead of 0 and 1
let minNumber = 10;
let maxNumber = 60;
let randomNumber = (Math.random() * (maxNumber - minNumber + 1)) + minNumber; // formula to calculate min max range
console.log(`The Random number is : ${randomNumber.toFixed(3)}`);







