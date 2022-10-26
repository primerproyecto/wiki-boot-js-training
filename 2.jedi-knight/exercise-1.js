const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  const todasCategorias = [];

  for(let movie of movies){
    for( let categoria of movie.categories){
        if(!todasCategorias.includes(categoria)){
            todasCategorias.push(categoria)
        }
    }
  }
  console.log(todasCategorias)