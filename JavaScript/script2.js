console.log("Hello World.")

// JavaScript will automatically determine and figure out that this variable is of number type based on the type of data it holds.
// var is globally scoped but let is block scoped. 

let a = 5;
let b = 5;
let c = "Vivek"
let C = "Vivek" 
b = 10;

{
    let b = 20;
    console.log(b)
}

console.log(b)
// JavaScript variable names are case sensitive. 
// It will automatically concatinate the third value because it is a String. 
console.log(a + b + c );
console.log(typeof(a), typeof(b), typeof(c));

const d = 10;
// const once declared cannot be changed in the whole programme. 
// const d = 20;
console.log(d)
{
    // cannot be reassigned but can be redeclared within a new block. 
    const d = 20;
    console.log(d)
}

let e = 30;
// cannot be redeclared and reinitialized in the same block
// let e = 30;
console.log(e)
{
// Can be reassigned and redeclared within a new block. 
e = 40;
console.log(e)
}

var f = 50;
// can be redeclared and reasigned but it will overwrite the first declaration.
var f = 60;
console.log(f)

// Two types of data types:
// Primitive data type
// Non-primitive data type or Objects

// Primitive Data Type:
// null
// Number
// String
// Symbol
// undefined
// Boolean
// BigInt

// Non-primitive:
// Object

let x = "vivek";
let y = 31;
let z = 31.5;
let m;
let n = null;
let o = true;

console.log(x, y, z, m, n, o);
console.log(typeof x, typeof y, typeof z, typeof m, typeof n, typeof o);

// Object are key value pairs. 

let p = {
    "Name": "Vivek",
    "Job Role": "Web Developer"
}

console.log(p)
p.salary = "100 crores"
console.log(p) 