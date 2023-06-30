/**
 * Crea una función que dado: const input4 = { a: 'valor1', b: 'valor2', c: 'valor3' }; 
 * devuelva un nuevo objeto con todas las claves y valores invertidos.
   
Salida esperada
const output4 = { valor1: 'a', valor2: 'b', valor3: 'c' };
 */

const input4 = { a: "valor1", b: "valor2", c: "valor3" };

function changeKeyForValue(input4) {
  const entries = Object.entries(input4);

  const newEntries = entries.map(([key, value]) => {
    return [value, key];
  });

  const newObject = Object.fromEntries(newEntries);
  console.log(newObject);
}

changeKeyForValue(input4);
