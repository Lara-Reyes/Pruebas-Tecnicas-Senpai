/**
 * Crea una función que tome dado: const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };
 * devuelva un nuevo objeto con todas las claves del objeto original,
 * pero con los valores convertidos a mayúsculas.
 *
 * Salida esperada
 *  const output2 = { a: 'VALOR1', b: 'VALOR2', c: 'VALOR3' };
 */

const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };

function allCaps() {
  let newInput = {};

  for (let key in input2) {
    if (input2.hasOwnProperty(key)) {
      newInput[key] = input2[key].toUpperCase();
    }
  }
  console.log(newInput);
}
allCaps();