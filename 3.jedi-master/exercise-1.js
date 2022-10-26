/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

```js */
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];


const divApp = document.querySelector('#app');

const $ul = document.createElement('ul');

const templateList = (list) => {
    list.forEach(element => {
        const liHtml = `<li>${element}</li>`
        $ul.innerHTML += liHtml;
    });
}
divApp.append($ul)
console.log(templateList(albums))

/* $divApp.appendChild(templateList(albums)); */
