/**
   Crea una función que dado: const texto = "Hola hola HOLA mundo mundo Hola";
   retorne un objeto que contenga la frecuencia de cada palabra en la cadena. 
   La función debe ignorar el caso de las palabras.
   Salida esperada:
        {
            hola: 3,
            mundo: 2
        }
 */

const texto = "Hola hola HOLA mundo mundo Hola";

function howManyTimes(str) {
    const words = str.toLowerCase().split(" ");
    const frecuency = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        frecuency[word] = (frecuency[word] || 0) + 1
    };
    return frecuency
}

console.log(howManyTimes(texto));