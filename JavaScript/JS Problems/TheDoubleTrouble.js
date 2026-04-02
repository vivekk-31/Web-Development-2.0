// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function double() {
    let arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8]
    let newArr = []
    let newArr2 = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (arr[i]==arr[i+1]) {
            continue
        }
        else{
            newArr.push(element)
        }
        
    }
    for(i=0; i<newArr.length; i++){
        const element2 = newArr[i];
        newArr2.push(element2*2)
    }
    console.log(newArr2)
    
}

double()