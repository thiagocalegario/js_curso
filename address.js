
const myFunc = (city, country, street, zip) => {
    return {
        city: city,
        country: country,
        street: street,
        zip: zip
    }
}

const teste = myFunc("Ceara", "Brasil", 123, 7948192)
console.log(teste)