const numbers = [1,5,2,5,7,21,24,4,46]

const myFunc = (array) => {
    let max = 0
    for(let i of array){
        if (i>max) max = i
    }
    return max
}

console.log(myFunc(numbers))