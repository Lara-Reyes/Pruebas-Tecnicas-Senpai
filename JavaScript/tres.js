/**
 * Dado const input1 = [{ propiedad: 'b' }, { propiedad: 'a' }, { propiedad: 'c' }];
 * Crea una función que devuelva un nuevo arreglo con los objetos ordenados alfabéticamente
 * por una propiedad específica en orden descendente.
 *
 * Salida esperada
 *  [{ propiedad: 'c' }, { propiedad: 'b' }, { propiedad: 'a' }]
 */

const input1 = [{ propiedad: 'b' }, { propiedad: 'a' }, { propiedad: 'c' }];

function inversedOrder(input1) {
  let result = input1.sort((a, b) => {
    return b.propiedad.localeCompare(a.propiedad);
  });
  return result;
}

console.log(inversedOrder(input1));