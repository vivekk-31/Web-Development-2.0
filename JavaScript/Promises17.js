console.log("Promises in a nutshell.")

// let promise = new Promise((resolve, reject)=>{
//     let rand = Math.random()
//     if (rand<0.5) {
//         reject("This is not resolved because the number is less than 0.5 and was not supporting you. ")
//     }
//     else{
//         resolve("yayy! This is resolved.")
//     }
// })

// promise.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


let prom1 = new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";
    script.onload = () => resolve(script)

    script.onerror = () => reject("Script failed to load")

    document.head.append(script)

})

let prom2 = new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";
    script.onload = () => resolve(script)

    script.onerror = () => reject("Script failed to load")

    document.head.append(script) 

})

prom1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})