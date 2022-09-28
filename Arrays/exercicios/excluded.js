const myFunc = (x, y) => {
    const finalArray = []
    for(let i of x){
        if(!y.includes(i)) finalArray.push(i)
    }
    return finalArray
}

const x = [1,2,3,4,1,1]
const y = [1,2]
console.log(myFunc(x,y))