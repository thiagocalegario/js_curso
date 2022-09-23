const myFunc = (num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (num % 3 === 0) {
            console.log("Fizz")
        }
        else if (num % 5 === 0) {
            console.log("Buzz")
        }
        else if(typeof(num) !== "number"){
            console.log("Not a number")
        }
        else console.log(num)
}

myFunc("1")