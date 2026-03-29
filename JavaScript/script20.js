let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw new Error("This is not allowed");
}

let sum = parseInt(a) + parseInt(b)

try {
    console.log("The sum is " +sum*x)
} catch (error) {
    console.log("Error successful")
}



// console.log('The sum is ', + sum);



