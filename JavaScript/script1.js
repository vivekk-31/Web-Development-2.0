// document.body.addEventListener("submit") = alert("Hello World!")
console.log("Code is running..")

var a = prompt("Enter your number: ")

console.log("Your number is: " + a)

var isTrue = confirm("Please confirm if you want to submit this number and blast your computer")

if (isTrue) {
    console.log("Your computer is about to blast.")
}
else{
    console.log("Good. Your computer will not blast.")
}

var b = document.querySelector(".submit")
b.addEventListener("click", console.log("Hello from event listener"))