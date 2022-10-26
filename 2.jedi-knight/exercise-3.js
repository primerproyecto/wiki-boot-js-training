const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  const sonidosFavoritos = [];
  for(const user of users){
    for(favoriteSound in user.favoritesSounds){
        console.log(favoriteSound);
        sonidosFavoritos.push(favoriteSound)
        console.log('Los sonidos favoritos de ' + user.name + ' son ' + favoriteSound)
        
    } 
    console.log(sonidosFavoritos)

}

const contarRecurrencias = (arr, val) => {
    let contador = 0;
    arr.forEach((item) => (item === val && contador++));
    console.log('el contandor')
    return contador;
}


console.log(contarRecurrencias(sonidosFavoritos, [...sonidosFavoritos]))