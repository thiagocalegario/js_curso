function myFunc  (...args) {
    return args.reduce((a,b) => a+b)
}
console.log(myFunc(2,5,7,1,5,1,1))