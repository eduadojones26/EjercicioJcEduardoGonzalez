//ejercicio 1

let numero = parseInt(prompt("Ingresa un numero y te digo la tabla de multiplar hasta el 10:"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero}  x  ${i} = ${resultado}`);
}
//ejercicio 2

let sumaAcumulada = 0;

let numeroIngresadoEje2 = parseInt(prompt("Ingresa un número:"));

while (numeroIngresadoEje2 !== 0) {
    sumaAcumulada += numeroIngresadoEje2;
    numeroIngresadoEje2 = parseInt(prompt("Ingresa otro número:"));
}

console.log(`La suma total de los números ingresados es: ${sumaAcumulada}`);

//ejercicio 3

const numeroSecreto = 76; 

let intentos = 0;
let numeroUsuario;

do {
    
    numeroUsuario = parseInt(prompt("Ingresa un número entre 1  al 100 y  para adivinar el número secreto:"));
    intentos++;

    if (numeroUsuario < numeroSecreto) {
        alert("El número ingresado es menor que el número secreto.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("El número ingresado es mayor que el número secreto.");
    } else {
        alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
    }
} while (numeroUsuario !== numeroSecreto);

// ejercicio 4

let numEje4 = parseInt(prompt("Ingresa un número para verificar si es primo:"));

let primo = true;

if (numEje4 <= 1) {
    primo = false;
} else {
    for (let i = 2; i < numEje4; i++) {
        if (numEje4 % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
   alert(`${numEje4} es un número primo.`);
} else {
   alert(`${numEje4} no es un número primo.`);
}
//ejercicio 5

let numEje5 = parseInt(prompt("Ingresa un número y te dire cuales son sus divisores:"));

console.log(`Los divisores de ${numEje5} son:`);
for (let i = 1; i <= numEje5; i++) {
    if (numEje5 % i === 0) {
        console.log(i);
    }
}
// ejercicio 6

let arrayEje6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Elementos del array:");
for (let i = 0; i < arrayEje6.length; i++) {
    console.log(arrayEje6[i]);
}
//ejercicio 7

let arrayEje7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("El doble de cada elemento del array es:");
for (let i = 0; i < arrayEje7.length; i++) {
    let doble = arrayEje7[i] * 2;
    console.log(`El doble de ${arrayEje7[i]} es ${doble}`);
}
// ejercicio 8

let familia = [
    { nomEje8: "Eduardo", edad: 39, relacion: "Padre", ciudad: "Bogota" },
    { nomEje8: "Alondra", edad: 27, relacion: "Madre", ciudad: "Bogota" },
    { nomEje8: "Oliver", edad: 7, relacion: "Hijo", ciudad: "Bogota" },
    { nomEje8: "Maximiliano", edad: 6, relacion: "Hijo", ciudad: "Bogota" },
    { nomEje8: "Maria", edad: 64, relacion: "Abuela", ciudad: "Maracay" }
];

console.log("Mensajes de presentación:");

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log(`${persona.nomEje8} es ${persona.relacion}, tiene ${persona.edad} años y vive en ${persona.ciudad}.`);
}
// ejercicio 9

let numerosEje9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números impares:");

for (let i = 0; i < numerosEje9.length; i++) {
    if (numerosEje9[i] % 2 !== 0) {
        console.log(numerosEje9[i]);
    }
}
// ejercicio 10

let sumaPares = 0;
let sumaImpares = 0;

let numeroIngresadoEje10 = parseInt(prompt("Ingresa un número, si quieres terminar ingresa 0 :"));

while (numeroIngresadoEje10 !== 0) {
    if (numeroIngresadoEje10 % 2 === 0) {
        sumaPares += numeroIngresadoEje10;
    } else {
        sumaImpares += numeroIngresadoEje10;
    }
    numeroIngresadoEje10 = parseInt(prompt("Ingresa otro número, si quieres terminar ingresa 0 :"));
}

console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);

// ejercicio 11

let numerosEje11 = [24, 10, 54, 16, 38, 70, 28, 96, 12, 43];

let numeroMasGrande = numerosEje11[0]; 

for (let i = 1; i < numerosEje11.length; i++) {
    if (numerosEje11[i] > numeroMasGrande) {
        numeroMasGrande = numerosEje11[i]; 
    }
}

alert(`El número más grande en el array es el: ${numeroMasGrande}`);

// ejercicio 12

let numeros = [12, 5, 27, 8, 19, 35, 14, 30, 6, 22];

let numeroMasPequeño = numeros[0]; 


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeroMasPequeño) {
        numeroMasPequeño = numeros[i]; 
    }
}

alert(`El número más pequeño en el array es el : ${numeroMasPequeño}`);

// ejercicio 13

let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");

let ganador = "";

while (ganador === "") {
    
    let opcionJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();
    let opcionJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();

    if (opcionJugador1 === opcionJugador2) {
        alert("Empate. Vuelvan a elegir.");
    } else if (
        (opcionJugador1 === "piedra" && opcionJugador2 === "tijeras") ||
        (opcionJugador1 === "papel" && opcionJugador2 === "piedra") ||
        (opcionJugador1 === "tijeras" && opcionJugador2 === "papel")
    ) {
        ganador = jugador1;
    } else {
        ganador = jugador2;
    }
}

alert(`¡${ganador} es el ganador!`);

// ejercicio 14

for (let i = 1; i <= 5; i++) {
    let linea = ''; 

    for (let j = 1; j <= i; j++) {
        linea += '*';
    }

    console.log(linea);
}

// ejercicio 15

for (let i = 5; i >= 1; i--) {
    let linea = ''; 

    for (let j = 1; j <= i; j++) {
        linea += '*';
    }

    console.log(linea);
}

// ejercicio 16

let numerosEje16 = [2, 10, 4, 6, 7, 8, 3, 5, 1, 9];

for (let i = 0; i < numerosEje16.length; i++) {
    for (let j = 0; j < numerosEje16.length - 1 - i; j++) {

        if (numerosEje16[j] > numerosEje16[j + 1]) {
            let temp = numerosEje16[j];
            numerosEje16[j] = numerosEje16[j + 1];
            numerosEje16[j + 1] = temp;
        }
    }
}

console.log("Array ordenado:");
console.log(numerosEje16);








