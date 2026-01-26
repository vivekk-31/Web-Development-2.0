console.log("Business Name Generator: ")

let adjectives = {
    "adj1":"crazy",
    "adj2":"amazing",
    "adj3":"fire"
}

let shopName = {
    "name1":"engine",
    "name2":"foods",
    "name3":"garments"
}

let anotherWord = {
    "word1":"bros",
    "word2":"limited",
    "word3":"hub"
}

function randomNum() {
    let num = Math.random();
    return num;
}

for (const key in adjectives) {
    if (!Object.hasOwn(adjectives, key)) continue;
    const element = adjectives[key];
    console.log(element)
}

for (const key in shopName) {
    if (!Object.hasOwn(shopName, key)) continue;
    const element = shopName[key];
    console.log(element)
}

for (const key in anotherWord) {
    if (!Object.hasOwn(anotherWord, key)) continue;
    const element = anotherWord[key];
    console.log(element)
}


let number = randomNum();
console.log(number)
if (number) {
    
}