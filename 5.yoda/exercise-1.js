/* En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'. */



fetch('https://breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then(data => {
    for(const dat of data){
        const {img, name} = dat;
        const $divContainer = document.createElement('div');
        const $imgContainer = document.createElement('img');
        const $figureCaption = document.createElement('figcaption');

        $imgContainer.src = img;
        $figureCaption.innerHTML = name;
        $divContainer.append($imgContainer);
        $divContainer.append($figureCaption);
        console.log(img, name);
        document.querySelector('#gridWrapper').append($divContainer)
    }
  });


  const divConImagen = (img, name) => {
    const $divContainer = document.createElement('div');
    const $imgContainer = document.createElement('img');
    return  
  }