
// Pedir al usuario que ingrese los números
const entradaDatos = prompt("Ingresa los números separados por espacios:");

// Dividir la entrada en un array de cadenas
const arrayEntrada = entradaDatos.split(' ');

// Validar que los elementos sean números
const numeros = [];

for (const str of arrayEntrada) {
  const num = Number(str);
  if (!isNaN(num)) {
    numeros.push(num);
  }
}

if (numeros.length === 0 || entradaDatos == "") {

  console.log("No se ingresaron números válidos.");

} else {
    // Crear un objeto para contar la frecuencia de los números
    const contador = {};

    // Contar la frecuencia de cada número
    for (const num of numeros) {
    if (contador[num]) {
        contador[num]++;
    } else {
        contador[num] = 1;
    }
    }

    let numeroUnico = null;

    // Encontrar el número no repetido
    for (const num in contador) {
    if (contador[num] === 1) {
        numeroUnico = num;
        break;
    }
    }

    // Mostrar el resultado
    if (numeroUnico == null) {
    
    console.log("No hay números no repetidos en la lista ingresada.");
    } else {
        console.log(`El único número no repetido es: ${numeroUnico}`);
        console.log(contador);
        console.log(numeroUnico);
    }
}
