function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;

    script.onload = ()=>callback(script)

    document.head.append(script)

}



loadScript("https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js", (script)=>{
    alert("script is loaded")
})