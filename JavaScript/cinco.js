/**
 * Crea una función que dado: const input3 = [1, 5, 2, 9, 3];
 * devuelva la suma de los números más grandes en el arreglo.
 *
 * Salida esperada
 * const output3 = 14;
 */

const input3 = [1, 5, 2, 9, 3];

function getTwoBiggestNums(array) {
    const orderedArray = array.sort((a, b) => b - a);
    const biggestNumbers = orderedArray.slice(0, 2);
    return biggestNumbers
};

function sumTwoBiggestNums(array) {
    const twoBiggestNums = getTwoBiggestNums(array);
    const sum = twoBiggestNums.reduce((num1, num2) => num1 + num2, 0);
    return sum
};

const output3 = sumTwoBiggestNums(input3);
console.log(output3);