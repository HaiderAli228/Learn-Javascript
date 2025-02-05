
// Displaying data and time in JS

let data = Date.now();

console.log(`Current time : ${data}`);
console.log(`Current time : ${Date()}`);

let dateIs = new Date();
console.log(`Get Exact date : ${dateIs.toDateString()}`);
console.log(`Get Exact date : ${dateIs.toString()}`);
console.log(`Get Exact Month : ${dateIs.getMonth()}`);
console.log(`Get Exact Days : ${dateIs.getDay()}`);
console.log(`Get Exact Year : ${dateIs.getFullYear()}`);
console.log(`Get time  : ${dateIs.toLocaleDateString()}`);

console.log(dateIs.toISOString());
console.log(dateIs.toUTCString());
console.log(dateIs.getUTCFullYear());

let anotherDate = new Date("1-12-2025");

console.log(anotherDate);





