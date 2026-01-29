// console.log("Factorial Programme. ")

// 5*4*3*2*1 = 120
function Factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i
        console.log(result)
    }
}

Factorial(5);