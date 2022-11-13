const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

  console.log(mainCharacters.splice(0, 1))

function removeItem(array, text){
    array.splice(findArrayIndex(array, text), 1)
    return  array
}

function findArrayIndex(array, text) {
    if(array.includes(text)){
        return array.indexOf(text)
    }
}

console.log(findArrayIndex(mainCharacters, 'Chewbacca'))
console.log(removeItem(mainCharacters, 'Chewbacca'))