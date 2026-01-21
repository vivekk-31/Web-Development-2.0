let num1 = Number(prompt("Enter your first number: "));
let num2 = Number(prompt("Enter your second number: "));
let operator = prompt("Enter your mathematical operator: ");
let result;

let random = Math.random();
console.log(random)

if (random<0.1) {
    if (operator == "+") {
        result = num1 - num2;
        console.log(result);
    } else if (operator == "*") {
        result = num1 + num2;
        console.log(result);
    }
    else if (operator == "-") {
        result = num1 / num2;
        console.log(result);
    }
    else if (operator == "/") {
        result = num1 ** num2;
        console.log(result);
    }
    else {
        console.log("Invalid operator")
    }
}
else{
    if (operator == "+") {
        result = num1 + num2;
        console.log(result);
    } else if (operator == "*") {
        result = num1 * num2;
        console.log(result);
    }
    else if (operator == "-") {
        result = num1 - num2;
        console.log(result);
    }
    else if (operator == "/") {
        result = num1 / num2;
        console.log(result);
    }
    else {
        console.log("Invalid operator")
}
}