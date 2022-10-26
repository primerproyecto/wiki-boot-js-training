/* Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
 */


const places = [
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  { 
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Random title",
    imgUrl:
      "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUyMHJpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];



const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
places.map(place => {
    const ache4 = document.createElement('h4');
    const imagen = document.createElement('img');
    const divInner = document.createElement('div');
    imagen.src = place.imgUrl;
    ache4.innerHTML = place.title;
    divInner.append(ache4)
    divInner.append(imagen)
    divWrapper.append(divInner)
})
document.body.append(divWrapper)


/// Parte 2

const boton = document.querySelector('button');

boton.addEventListener('click', borrarUltimoItem);

function borrarUltimoItem(e){
   console.log(divWrapper.length);
   divWrapper.lastChild.remove();
}


/// Parte 3
divWrapper.addEventListener('click', borrarEsta);

function borrarEsta(e){
    console.log(e.target)
} 