// console.log("A")

// setTimeout(() => {
//     console.log("B")

//     setTimeout(() => {
//         console.log("C")
//     }, 2000);
// }, 2000);

let messages = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]

let dot = [".",
    "..",
    "..."
]

function getRandomDelay() {
    let random = (Math.floor(Math.random() * 6) + 1) * 1000;
    return random;
}


function run(index) {

    if (index >= messages.length) {
        return
    }
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + messages[index] + `<br>`

    setTimeout(() => {
        run(index + 1)
    }, getRandomDelay());
}

run(0)


