const myArray = [1,5,2,4,6,8,11,2]
const myFunc = (array, numero) => {
    let total = 0
    for(let i of array){
        if (i===numero) total++
    }
    return total > 0 ? total : "Não foi encontraro nenhuma ocorrência deste número."
}

console.log(myFunc(myArray, 20))