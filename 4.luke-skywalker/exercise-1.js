const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
    {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
]



const generoAventura = videogames.filter( item => {
   return item.genders.includes('Aventura')
})

console.log(generoAventura);

const arrayScore  = []
for( const videogame of videogames){
    arrayScore.push(videogame.score)
}
const totalScore = arrayScore.reduce((a, b) =>{
   return a + b
},0)
const mediaScore = totalScore / arrayScore.length

console.log(mediaScore)