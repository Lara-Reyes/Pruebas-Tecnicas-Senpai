/**
    Crea una función que dado: const input5 = [{ propiedad: 3 }, { propiedad: 1 }, { propiedad: 2 }]; 
    devuelva un nuevo arreglo con los objetos ordenados numéricamente
    por una propiedad específica en orden ascendente.
    Salida esperada:
        const output5 = [{ propiedad: 1 }, { propiedad: 2 }, { propiedad: 3 }];
 */

const input5 = [{ propiedad: 3 }, { propiedad: 1 }, { propiedad: 2 }];

function orderByValue(arr, value) {
  return arr.sort((a, b) => a[value] - b[value]);
}

const output5 = orderByValue(input5, "propiedad");
console.log(output5);
