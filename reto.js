///Reto de 4ta seccion arrays

let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

function mostrarListaDeLenguajes() {
    for (let i = 0; i <= lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarListaDeLenguajes();

//////////////////////////////////
function ordenInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
console.log(lenguajesDeProgramacion);
ordenInverso();

//////////////////////
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 8, 5, 4, 3, 10, 1, 0]
console.log(calcularMedia(numeros));


///////////////////////
function mayorMenor(lista) {

    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }

        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log('Mayor: ', mayor);
    console.log('Menor: ', menor);
}

mayorMenor(numeros);

//////////////////////////
function sumaElementosLista(array) {
    let suma = 0;

    for (i = 0; i < array.length; i++) {
        suma += array[i];
        console.log(suma);
    }

    console.log(array);
    console.log('La suma de los numeros del array es: ', suma);
}
sumaElementosLista(numeros);

//////////////////////////
function encontrarNumero(numero, array) {

    for (i = 0; i < array.length; i++) {
        if (numero == array[i]) {
            console.log(`El numero ${numero}, se encuentra en la posición ${i}, del array ${array}`);
            return;
        }
    }
    console.log(`El número ${numero}, no se encuentra en el array ${array}`);
}
encontrarNumero(5, numeros);

//////////////////////////
function sumaDosArrays(array1, array2) {
    let suma = [];
    if (array1.length != array2.length) {
        console.log('No se pueden sumar ambos arrays porque no tienen la misma cantidad de numeros dentro de el');
    } else {
        for (i = 0; i < array1.length; i++) {
            suma[i] = array1[i] + array2[i];
        }

        console.log(`El array1 original: ${array1}`);
        console.log('El array2 original: ', array2);
        console.log(`El resultado de sumarlos 1 a 1 es: ${suma}`);
    }
}
numeros2 = [1, 1, 1, 1, 1, 1, 1, 1];
sumaDosArrays(numeros, numeros2);