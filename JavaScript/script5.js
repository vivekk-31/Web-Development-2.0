// console.log("Hey Vivek, you are good.")
// console.log("Hey Vivek, you are nice as well.")
// console.log("Hey Vivek, your dressing sense is also good.")
// console.log("Hey Vivek, your knowledgeable as well.")

function nice(name) {
    console.log("Hey " + name + " you are good.")
    console.log("Hey " + name + " you are nice as well.")
    console.log("Hey " + name + " you dressiing sense is also good.")
    console.log("Hey " + name + " your knowledge is good as well.")
}

// nice("Vivek")
// nice("Reigns")

function sum(a, b) {
    let c = a + b; 
    // console.log(c)
    return c;
}

let result = sum(5,5)

console.log("The sum of these two numbers is: " +result)

const arrow = (x)=>{
    console.log("I am an arrow function ", x)
}

arrow(31)
arrow(21)
arrow(61)