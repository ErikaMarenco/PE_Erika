//Metodos de manipulacion

//1 - push(): Agrega uno o mas elementos al final del array.
let numeros = [1, 2, 3]
numeros.push(4, 5)
console.log(numeros)

//2 - pop(): Elimina y devuelve el ultimo elemento del array 
let frutas = ["manzana", "banana", "uva"]
let ultimaF = frutas.pop();
console.log(ultimaF)
console.log(frutas)

//3 - unshift(): Agrega uno o más elementos al inicio del array
let colores = ["verde", "amarillo"]
colores.unshift("azul", "blanco")
console.log(colores)

//4 - shift(): Elimina y devuelve el primer elemento del array
let paises = ["El Salvador", 'peru', "Rusia"]
let primerP = paises.shift()
console.log(primerP)
console.log(paises)

//5 - concat(): Combina dos o más arrays para crear un nuevo array
let array1 = [1, 2]
let array2 = [3, 4]
let combinarArray = array1.concat(array2)
let combinarArray2 = array2.concat(array1)
console.log(combinarArray)
console.log(combinarArray2)

//6 - slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados
let arrayOriginal = [1, 2, 3, 4, 5]
let copiaArray = arrayOriginal.slice(1,4)
console.log(copiaArray)

//7 -  splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos
let Frutas = ["banana", "naranja", "kiwi", "pera", "manzana"]
let removerFrutas = Frutas.splice(2, 1, "uva")
console.log(frutas)
console.log(removerFrutas)