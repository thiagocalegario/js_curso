const print = console.log
//Switch needs a breack statment, otherwise, it will check every case
const myFunc = (props) => {
    switch (props){
        default:
            print("Who are you?")
            break
        case ("Thiago"):
            print("You are the boss!")
            break
        case ("Marcos"):
            print("I don't know u Marcos :p ")
            break
    }
}
myFunc("Thiago")
myFunc("Marcos")
myFunc()
