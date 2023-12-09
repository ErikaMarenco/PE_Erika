//crear un arreglo o array 
let paises = ["panama", "Peru", "Japon", "El Salvador", "Suecia"]

//mostrar datos
console.log(paises)

//mostrar Japon
console.log(paises[2])

//mostrar Suecia
//alert(paises[4])

//crear nuevo arreglo
let numeros = [1, 2, 6, 7]

console.log(numeros)

console.log(numeros[3])

//alert(numeros[0])

let longitudArreglo = numeros.length;
console.log("El tamaño del arreglo " + numeros + "  es: "+ longitudArreglo)

console.log(`El arreglo contiene ${paises.length} paises`)

let nElementos = prompt("Ingrese cuantos elementos desea agregar al arreglo")
let elementos = []

for (let i = 0; i < nElementos; i++){
    let elemento = prompt(`Ingrese el elemento ${i + 1}`)
    elementos.push(elemento);
}

console.log(elementos)