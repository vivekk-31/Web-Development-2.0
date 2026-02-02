// console.log("DOM Elements.")

// console.log(document.body.firstElementChild.children);

function Factorial(number) {
    let fact = 1;
    for (let i = 1; i <=number; i++) {
        fact = fact*i;
        console.log(fact)
        
    }
    return fact
}

console.log(Factorial(5))