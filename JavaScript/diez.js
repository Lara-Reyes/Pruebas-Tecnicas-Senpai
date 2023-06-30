/**
 * 10. Crea una función que dado:
const personas = [...];
La función debe retornar un objeto que contenga
la cantidad de personas de cada género y
el promedio de edad de cada género.
    1. **La salida esperada era:** 
        1. {
        masculino: {
        cantidad: 5,
        promedioEdad: 27
        },
        femenino: {
        cantidad: 5,
        promedioEdad: 28.2
        }
        }
 */

const personas = [
  { nombre: "Juan", edad: 25, género: "masculino" },
  { nombre: "María", edad: 30, género: "femenino" },
  { nombre: "Carlos", edad: 20, género: "masculino" },
  { nombre: "Ana", edad: 22, género: "femenino" },
  { nombre: "Andrés", edad: 40, género: "masculino" },
  { nombre: "Laura", edad: 28, género: "femenino" },
  { nombre: "Pedro", edad: 18, género: "masculino" },
  { nombre: "Isabel", edad: 35, género: "femenino" },
  { nombre: "Ricardo", edad: 32, género: "masculino" },
  { nombre: "Gabriela", edad: 26, género: "femenino" },
];

function nuevoObjeto(personas) {
  let hombres = personas.filter((persona) => persona.género === "masculino");
  let mujeres = personas.filter((persona) => persona.género === "femenino");

  let cantidadH = hombres.length;
  let cantidadM = mujeres.length;

  let edadesH = hombres.map((hombre) => hombre.edad);
  let edadesM = mujeres.map((mujer) => mujer.edad);

  let promedioEdadH = 0;
  let promedioEdadM = 0;

  edadesH.forEach((edad) => {
    promedioEdadH += edad;
  });
  edadesM.forEach((edad) => {
    promedioEdadM += edad;
  });

  promedioEdadH /= cantidadH;
  promedioEdadM /= cantidadM;

  const resultado = {
    masculino: {
      cantidad: cantidadH,
      promedioEdad: promedioEdadH.toFixed(1),
    },
    femenino: {
      cantidad: cantidadM,
      promedioEdad: promedioEdadM.toFixed(1),
    },
  };

  return resultado;
}

const objetoResultado = nuevoObjeto(personas);
console.log(objetoResultado);
