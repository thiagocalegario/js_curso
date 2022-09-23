const myFunc = (obj) => {
    for(let i in obj){
        if(typeof(obj[i]) === "string"){
            console.log(obj[i])
        }
    }
}

const obj = {
    name: "Thiago",
    age: 12,
    weight: 92,
    sobrenome: "Calegário",
    color: "white"
}

myFunc(obj)