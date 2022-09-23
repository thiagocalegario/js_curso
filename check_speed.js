const myFunc = (speed) => {
    if(speed <= 74){
        return "Ok"
    }
    else{
        let num = (speed - 70) / 5
        num = Math.floor(num)
        return num > 12 ? "Suspended" : "Points: " +num
    }
}

console.log(myFunc(80))