
const texto = "Peter Parker"

const splitName = (txt)=> {
   const posicion =  txt.lastIndexOf(' ')

   var arrayDePalabras = txt.split(' ');
   console.log(arrayDePalabras);
   for( const palabra of arrayDePalabras){
    return palabra
    }

  

}

console.log(splitName(texto))