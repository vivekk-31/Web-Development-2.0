console.log("Vivek")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "red";

document.getElementById("greenbox").style.backgroundColor = "green";

// let all = document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "red";
// })

let all = document.querySelectorAll(".box")

for (let i = 0; i < all.length; i++) {
    let element = all[i];
    element.style.backgroundColor = "red";
}