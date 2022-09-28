const myFunc = (min, max) => {
    total = []
    do{
        total.push(min)
        min+=1
    }while (min < max+1 )
    return total
}
const myResult = myFunc(-10, -4)
console.log(myResult)