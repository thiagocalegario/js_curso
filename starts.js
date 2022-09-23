const myFunc = (props) => {
    for(let i = props; i > 0;i--){
        console.log("*".repeat(i))
    }
}

myFunc(1000)