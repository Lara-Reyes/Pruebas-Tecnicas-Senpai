/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

let array = ['ab', 'abb', 'abbabbabbaa'];

function removeDuplicate(array) {
    let final = array.map((string) => {
        let newString = "";
        let prevChar = "";
        for (let i = 0; i < string.length; i++) {
         if (string[i] !== prevChar) {
            newString += string[i];
            prevChar = string[i];
         }
        }
        return newString;
    })
    return final.sort((a, b) => b.length - a.length);
}

let final = removeDuplicate(array);
console.log(final);