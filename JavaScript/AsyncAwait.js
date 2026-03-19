// async function getData() {

//     //simulating getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {

    //simulating getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await x.json()
      console.log(data)
      return 455
}

async function main(){

console.log("Loading modules")

console.log("Doing something else")

let data = await getData()

console.log(data)

console.log("Loading data")

console.log("Processing Data")

console.log("Working on data")

}

main()