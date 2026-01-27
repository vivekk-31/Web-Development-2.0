console.log("Business Name Generator: ")

let adjectives = {
    "adj1": "crazy",
    "adj2": "amazing",
    "adj3": "fire"
}

let shopName = {
    "name1": "engine",
    "name2": "foods",
    "name3": "garments"
}

let anotherWord = {
    "word1": "bros",
    "word2": "limited",
    "word3": "hub"
}

function businessName() {
    let count, key = 0;
    for (key in adjectives) {
        if (adjectives.hasOwnProperty(key))

        count++;
        
    }
    objectLength = count;
    console.log(objectLength)
}
businessName()



// function businessName() {
//     let first, second, third;
//     let rand = Math.random();
//     if (rand<0.33) {
//         first = "crazy";
//     }
//     else if(rand<0.66 && rand>=0.33){
//         first = "amazing"
//     }
//     else{
//         first = "fire"
//     }

//     rand = Math.random();
//     if (rand<0.33) {
//         second = "engine";
//     }
//     else if(rand<0.66 && rand>=0.33){
//         second = "foods"
//     }
//     else{
//         second = "garments"
//     }

//     rand = Math.random();
//     if (rand<0.33) {
//         third = "bros";
//     }
//     else if(rand<0.66 && rand>=0.33){
//         third = "limited"
//     }
//     else{
//         third = "hub"
//     }

//     console.log(first + " " +  second + " " + third);
// }

// businessName()


