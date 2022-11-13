const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];


function findArrayIndex(array, text) {
    return array.includes(text) ? 'posicion ' + array.indexOf(text) : 'no'

}

console.log(findArrayIndex(mainCharacters, 'Liea'))
console.log(findArrayIndex(mainCharacters, 'Chewbacca'))
console.log(mainCharacters[3])