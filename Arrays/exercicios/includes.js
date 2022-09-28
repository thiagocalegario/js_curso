const numbers = [1,4,6,7,3,1,2,4,7,8,5,3,12,3]

const myFunc = (x, array) => {
    const find = array.filter((numero) => numero === x)
    return find.length > 0;

}

console.log(myFunc(100,numbers))
