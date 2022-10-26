/* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". */


const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
const $divData = document.querySelector('[data-function="printHere"]');

const $ul = document.createElement('ul');

const templateList = (list) => {
    list.forEach(element => {
        const liHtml = `<li>${element}</li>`
        $ul.innerHTML += liHtml;
    });
}
$divData.append($ul)
templateList(albums)