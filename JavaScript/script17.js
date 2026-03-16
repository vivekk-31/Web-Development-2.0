// console.log("Vivek is a hacker.")
// console.log("Roman is a hecker.")

// setTimeout(() => {
//     console.log("Setimeout1")
// }, 0);

// console.log("The end.")

// function demo() {
//     console.log("Hello")
// }

// let a = demo;

// a();

// function demo(){
//     console.log("Hello")
// }

// function functionLoad(func){
//     func()
// }

// functionLoad(demo)

function loadScript(src, callback){
    let script = document.createElement("script")
    script.src = src;
    script.onload = () => callback(script)
    document.head.append(script)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (script)=>{
    alert("script is loaded.")
    
})