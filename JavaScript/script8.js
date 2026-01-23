let arr = [1,2,3,4,5]

// console.log(arr)
// console.log(typeof arr)
// arr[2] = 10
// console.log(arr)

// console.log(arr.toString())
// Pops the last element of the array.
// console.log(arr.pop())
// console.log(arr.push(100))
// console.log(arr)
// console.log(arr.push("Vivek"))
// console.log(arr)

// let arr2 = [10,20,30,40]
// let arr3 = [50,60,70,80]

// console.log(arr.concat(arr2, arr3))

// for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     console.log(element)
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key, element)
    
}

for (const element of arr) {
    console.log(element)
}

// MFR : Map Filter and Reduce: 
 let arr4 = [3,4,5,6,11]
//  let newarr = []
//  for (let i = 0; i < arr4.length; i++) {
//     const element = arr4[i];
//     newarr.push(element**2)
//  }

let newarr = arr4.map((e)=>{
    return e**2;
})
console.log(newarr)

const greaterThan7 = (e)=>{
    if (e>7) {
        return true
    }
    return false
}

console.log(arr4.filter(greaterThan7))

let arr5 = [1,2,3,4,5]

const red = (a, b)=>{
    return a*b
}

console.log(arr5.reduce(red))