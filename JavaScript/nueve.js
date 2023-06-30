/**
 * Crea una función que dado: const texto = "Hola hola mundo mundo hola HOLA";
    const n = 2; 
    acepte una cadena de texto y un número n como parámetros y retorne 
    un array con las n palabras más comunes en la cadena. 
    La función debe ignorar el caso de las palabras.  
Salida esperada:
        1. ['hola', 'mundo']
 */

const texto = "Hola hola mundo mundo hola HOLA";
const n = 2;

function moreCommon(str, num) {
  const lowerCaseArr = str.toLowerCase().split(" ");
  const frequency = {};

  for (let i = 0; i < lowerCaseArr.length; i++) {
    const word = lowerCaseArr[i];
    frequency[word] = (frequency[word] || 0) + 1;
  }

  const sortedWords = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a]
  );
  console.log(frequency);

  const result = sortedWords.slice(0, num);

  return result;
}

console.log(moreCommon(texto, n));
