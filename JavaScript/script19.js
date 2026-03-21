// function loadScript(src, callback){
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = ()=>callback(script)

//     document.head.append(script)

// }



// loadScript("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js", (script)=>{
//     alert("script is loaded")
// })

//Same thing using promises:

let prom1 = new Promise((resolve, reject)=>{
    let script = document.createElement("script");
    script.src = src;
    script.onload(resolve(script))
    script.onerror(reject(console.log("Error loading the script")))
        document.head.append(script)

})

prom1.then((a)=>{
    console.log(a)
})


