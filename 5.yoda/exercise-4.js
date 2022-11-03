//HACEMOS EL FETCH CON LOS PLANETAS

// PERSONAJES
const caracteresWrapper = document.querySelector(
        '[data-function="characters"]'
      );


// CONTENEDOR DEL BUSCADOR
const searchWrapper = document.querySelector('[data-function="search"]')
searchWrapper.style.padding = '2rem'

const input = document.createElement('input')
input.placeholder = 'Filtrar'
searchWrapper.append(input)

input.addEventListener('input', function(e){
    const cadenaAFlitrar = e.target.value
    const hijos = document.getElementsByClassName('personaje')
    //OCULTADO LAS IMAGENES CON ESTILOS
    for(const hijo of hijos){

        hijo.outerText.includes(cadenaAFlitrar) ?  hijo.style.visibility = 'visible' : hijo.style.visibility = 'hidden'
        
    }
  //  hijos.filter(hijo => !hijo.outerText.includes(cadenaAFlitrar) ? hijo.remove(): console.log('pues habra que hacer alog'))
    
})


fetch("http://localhost:3000/planets")
  .then((response) => response.json())
  .then((planetas) => {
    console.log(planetas);
    for (const planeta of planetas) {
      const { id, name, image } = planeta;

      const h2 = document.createElement("h2");
      h2.innerText = name;

      const img = document.createElement("img");
      img.src = image;
      console.log(image);

      const div = document.createElement("div");
      div.style.cursor = "pointer";
      div.append(h2);
      div.append(img);

      const planetasWrapper = document.querySelector(
        '[data-function="planets"]'
      );
      planetasWrapper.append(div);

      

      div.addEventListener("click", function (e) {
        e.preventDefault();

        caracteresWrapper.innerHTML = "";
        fetch("http://localhost:3000/characters?idPlanet=" + id)
                .then((response) => response.json())
                .then((personajes) => {
                    console.log(personajes)
                    for(const personaje of personajes) {
                        const {avatar, description, idPlanet, name} = personaje;

                        const h2 = document.createElement('h2');
                        h2.innerText = name;
                        h2.style.color =  'white'
                        h2.style.textAlign =  'center'
                        const div = document.createElement('div');
                        div.style.cssText = 'display:flex; align-items: center; justify-content: center;';
                        div.style.backgroundImage = `url(${avatar})`
                        div.style.backgroundRepeat = 'no-repeat'
                        div.style.backgroundSize = 'cover'
                        div.style.height = '200px'
                        div.classList.add('personaje')
                        div.style.minWidth = '200px';
                        
                        div.append(h2);
                        /* const img = document.createElement('img');
                        img.src = avatar;
                        div.append(img) */


                        caracteresWrapper.append(div)
                    }
                });
      });
    }
  });
