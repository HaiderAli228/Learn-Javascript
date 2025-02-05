
// ============== String and it's properities ====================

const stringValue = " Haider Ali Is Developer ";


// string predefined function with purpose

console.log(` This is find length of String : ${stringValue.length} \n`);

console.log(` This is replace specfic value with specific one : ${stringValue.replace("Ali", "Ansa")} \n`);

console.log(` This split the string base on space : ${stringValue.split(" ")}\n`);

console.log(` This is find specfic value on index : ${stringValue.charAt(3)} \n`);

console.log(` This convert string in Uppercase : ${stringValue.toUpperCase()} \n`);

console.log(` This convert string in Lowercase : ${stringValue.toLowerCase()} \n`);

console.log(` This convert string in trim form : ${stringValue.trim()} \n`);

console.log(` This find index of specific character : ${stringValue.indexOf("i")} \n`);

console.log(` This put value in start until string lenght is 39 : ${stringValue.padStart(39, "h")} \n`);

console.log(` This put value in end until string lenght is 39 : ${stringValue.padEnd(39, "a")} \n`);

console.log(` This get specific part fo given string, but not -ve value : ${stringValue.slice(0, 10)} \n`);

console.log(` This get specific part fo given string : ${stringValue.substring(0, 10)} \n`);

console.log(` This get specific part fo given string : ${stringValue.toLocaleLowerCase()} \n`);


