const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const arrayPeliculasGrande = [];
  const arrayPeliculasMediano = [];
  const arrayPeliculasPequeno = [];
  for (const movie of movies){
    if(movie.durationInMinutes >200){
        arrayPeliculasGrande.push(movie.name);
    } else if (movie.durationInMinutes >101) {
        arrayPeliculasMediano.push(movie.name);
    }else {
        arrayPeliculasPequeno.push(movie.name);
    }
  }
  console.log(arrayPeliculasPequeno);
  console.log(arrayPeliculasMediano);
  console.log(arrayPeliculasGrande);