
//=================  Datatypes in JS ===================

let numberValue = 10;
let stringValue = "String Value";
let booleanValue = true;
let nullValue = null;
let undefinedValue;

// printing the variables in tabular form in console
console.table([
    numberValue,
    stringValue,
    booleanValue,
    nullValue,
    undefinedValue
])

// checking the types of variables 
console.table([
    typeof numberValue,
    typeof stringValue,
    typeof booleanValue,
    typeof nullValue,
    typeof undefinedValue
])


// ================ Type conversion in JS ===================

let intVal = 228;
let stringVal = "Haider";
let boolVal = true;
let nullVal = null;

// conversion into string
let intToString = String(intVal);
let boolToString = String(boolVal);
let nullToString = String(nullVal);
console.log("Conversion into String Datatype")
console.table([intToString, boolToString, nullToString])

// conversion into integar/number
let stringToInt = Number(stringVal);
let nullToInt = Number(nullVal);
let boolToInt = Number(boolVal);
console.log("Conversion into Integar/number Datatype")
console.table([stringToInt, nullToInt, boolToInt])


// conversion into Boolean
let stringToBool = Boolean(stringVal);
let nullToBool = Boolean(nullVal);
let intToBool = Boolean(intVal);
console.log("Conversion into Boolean Datatype")
console.table([stringToBool, nullToBool, intToBool])



