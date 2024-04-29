

// E J E R C I C I O S   U N I D A D E S   1, 2, Y 3 



// 1. función que identifique qué numero es mayor:
let a = 3
let b = 5
function cualEsMayor(a, b) {
    return (a > b) ? a + "es mayor que" + b : a + " es menor que " + b   //Operador Ternario.
};

// Solicitar al usuario que ingrese 2 números:
//const a = prompt("Por favor, ingresa el primer número:");
//const b = prompt("Por favor, ingresa el segundo número:");

// Numeros dados:

let mayor = cualEsMayor(a, b);  // Se define el valor 'mayor', llamando a la función.

console.log(mayor);  // Se imprime el resultado


// 2. Función que devuelve el nombre de la Resolución:   (¿Qué sale mejor? ¿switch o if-else?)

function resolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return 'La resolución es: 8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return 'La resolución es: 4K';
    } else if (ancho >= 2560 && alto >= 4320) {
        return 'La resolución es: WQHD'
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'La resolución es: FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'La resolución es: HD';
    } else {
        return false;  // *** PREGUNTAR ***
    }
}

let res = resolucion(1366, 7680);
console.log(res)

// 3. Construir una función que permita obtener un elemento de un arreglo por su indice:    **** PREGUNTAR ****

let regalones = ['Dora', 'Brownie', 'Rex', 'Carmela', 'Lucinda'];

function indice(regalones) {

}

console.log()

// 4. Algoritmo que sólo imprima números pares del 0 al 10: 

let i = 0;
while (i < 11) {
    if (i % 2 == 0) {
        console.log('Numero par: ', i);
    }
    i++;
}
console.log('Se imprimieron los números pares del 0 al 10');

// 5. Algoritmo que imprima el número mayor y menor de un Array:   *****  PREGUNTAR *****

let lista = [3, 6, 2, -5, -4, 1, 0, 3, 7, -345, 456, 89, 23];

function mayorMenor(array) {
    let menor = array[0];
    let mayor = array[0];
    for (numero of array) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [mayor, menor]
}

let numeros = mayorMenor(lista)
console.log(numeros)

// 6. Crear un algoritmo que devuelva una cantidad de números positivos de un array:

let lista1 = [3, 6, 2, -5, -4, 1, 0, 3, 7, -345, 456, 89, 23];

function positivos() {

}

// 7. Crear un algoritmo que calcule impuestos, devolviendo el precio y el impuesto del producto:




// 8. 
