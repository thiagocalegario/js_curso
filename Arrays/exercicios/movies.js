const Movies = [
    {tittle: "a", ratting: 5, year: 2018},
    {tittle: "b", ratting: 2, year: 1042},
    {tittle: "c", ratting: 7, year: 2018},
    {tittle: "d", ratting: 9, year: 2017},
]

const myFunc = (array) => {
    const filtro = array.filter((filmes) => filmes.year === 2018)
    return filtro
}

console.log(myFunc(Movies).sort())