/* En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.
 */

const animals = ["Rintintín", "Cosmo", "Gato con botas", "Asno"];

const todaslaspalabras = animals.join().toLocaleLowerCase();
console.log(todaslaspalabras);
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}
console.log(char_count(todaslaspalabras, "a"));
