// ejercicio 1
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log( num1+ " es mayor que "+num2)
    
} else {
    console.log(num1+" no es mayor que "+num2);
}
// ejercicio 2
if (num1 === num2) {
    console.log( num1+" y "+num2 + " son iguales ")
    
} else {
    console.log( num1+" y "+num2 +"son diferentes");
}
// ejercicio 3

if (num1 > num2) {
    console.log(num1+" es mayor que "+num2);
} else if (num2 > num1) {
    console.log(num1+" es mayor que "+num2);
} else {
    console.log(num1+" y "+num2+ " son iguales ");
}
//ejercicio 4
let num3 = 8;
if (num1 <= num2 && num1 <= num3) {
    console.log(num1+" es el número más pequeño.");
} else if (num2 <= num1 && num2 <= num3) {
    console.log(num2+" es el número más pequeño.");
} else {
    console.log(num3+" es el número más pequeño.");
}
//ejercicio 5
let persona1 = { nombre: 'Juan', edad: 30, altura: 175 };
let persona2 = { nombre: 'María', edad: 25, altura: 180 };

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre+" es más alto que " +persona2.nombre);
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre+" es más alto que " +persona1.nombre );
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+" tienen la misma altura. ");
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre+" es mayor que "+persona2.nombre);
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre+" es mayor que "+persona1.nombre);
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+" tienen la misma edad. ");
}
//ejercicio 6
let nombre = prompt ( 'ingrese su nombre:' );
let edad = parseInt ( prompt('ingresa tu edad:'));
let altura = parseInt ( prompt ( 'ingresa tu altura en centimetros:'));
let vision = parseInt ( prompt ( 'ingresa tu vision (de 0 a 10):'));

if (edad >= 18 && altura>= 150 && vision>= 8 ) {
    console.log(nombre+ " esta capacitado para conducir ");
}else {
    console.log(nombre+ " no esta capacitado para conducir ");
}
//ejercicio 7
let nombreConcierto = prompt('Ingrese su nombre:');
let pase = prompt('Ingrese su tipo de pase (vip o normal):').toLowerCase(); 
let tieneEntrada = prompt('¿Tiene entrada? (si o no)').toLowerCase(); 

if (nombreConcierto === 'eduardo' || pase === 'vip') {
    console.log('Bienvenido, tienes ingreso libre.');
} else if (tieneEntrada === 'si') {
    console.log('Bienvenido, utiliza tu entrada.');
} else {
    let deseaComprar = confirm('¿Desea comprar una entrada? (si o no)');
    if (deseaComprar) {
        let dineroDisponible = parseInt(prompt('Ingrese su dinero disponible:'));
        if (dineroDisponible >= 1000) {
            console.log('Venta de entrada exitosa. Bienvenido.');
        } else {
            console.log('Lo sentimos, no tienes suficiente dinero para comprar la entrada.');
        }
    } else {
        console.log('Gracias, hasta luego.');
    }
}
//ejercicio 8

const numeroIncognita = 8;

let numeroingresado = parseInt(prompt('Intento 1: Ingrese un número del 1 al 10'));
if (numeroingresado === numeroIncognita) {
    alert('¡Felicidades! Has adivinado el número.');
} else if (numeroingresado > numeroIncognita) {
    alert('El número ingresado es mayor que el número a adivinar.');
} else {
    alert('El número ingresado es menor que el número a adivinar.');
}

 numeroingresado = parseInt(prompt('Intento 2: Ingrese un número del 1 al 10'));
if (numeroingresado === numeroIncognita) {
    alert('¡Felicidades! Has adivinado el número.');
} else if (numeroingresado > numeroIncognita) {
    alert('El número ingresado es mayor que el número a adivinar.');
} else {
    alert('El número ingresado es menor que el número a adivinar.');
}

numeroingresado = parseInt(prompt('Intento 3: Ingrese un número del 1 al 10'));
if (numeroingresado === numeroIncognita) {
    alert('¡Felicidades! Has adivinado el número.');
} else if (numeroingresado > numeroIncognita) {
    alert('El número ingresado es mayor que el número a adivinar.');
} else {
    alert('El número ingresado es menor que el número a adivinar.');
}

alert('Agotaste tus intentos. El número era: ' + numeroIncognita);

// ejercicio 9

let edadEje9 = prompt('Ingresa tu edad:');

edad = parseInt(edad);

if (edadEje9 >= 0 && edad <= 12) {
    alert('Eres un infante.');
} else if (edadEje9 >= 13 && edad <= 18) {
    alert('Eres un adolescente.');
} else if (edadEje9 >= 19 && edad <= 45) {
    alert('Eres un mayor joven.');
} else if (edadEje9 > 45 && edad < 100) {
    alert('Eres un anciano.');
} else if (edadEje9 >= 100) {
    let confirmacion = confirm('¿Realmente tienes esta edad?');
    if (confirmacion) {
        alert('Eres un anciano.');
    } else {
        alert('Vuelve a intentarlo.');
    }
} else {
    alert('Edad no válida. Por favor, ingresa una edad válida.');
}

//ejercicio 10

let jugador1 = prompt('Jugador 1, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):');
jugador1 = jugador1.toUpperCase(); // Convertir a mayúsculas para evitar diferencias de capitalización


if (jugador1 !== 'PIEDRA' && jugador1 !== 'PAPEL' && jugador1 !== 'TIJERAS') {
    alert('¡Jugador 1 está haciendo trampa! Ingresa solo PIEDRA, PAPEL o TIJERAS.');
} else {
    
    let jugador2 = prompt('Jugador 2, ingresa tu opción (PIEDRA, PAPEL o TIJERAS):');
    jugador2 = jugador2.toUpperCase(); // Convertir a mayúsculas para evitar diferencias de capitalización

    
    if (jugador2 !== 'PIEDRA' && jugador2 !== 'PAPEL' && jugador2 !== 'TIJERAS') {
        alert('¡Jugador 2 está haciendo trampa! Ingresa solo PIEDRA, PAPEL o TIJERAS.');
    } else {
        
        if (jugador1 === jugador2) {
            alert('Empate. Ambos jugadores eligieron ' + jugador1 + '.');
        } else if (
            (jugador1 === 'PIEDRA' && jugador2 === 'TIJERAS') ||
            (jugador1 === 'PAPEL' && jugador2 === 'PIEDRA') ||
            (jugador1 === 'TIJERAS' && jugador2 === 'PAPEL')
        ) {
            alert('¡Jugador 1 gana! ' + jugador1 + ' vence a ' + jugador2 + '.');
        } else {
            alert('¡Jugador 2 gana! ' + jugador2 + ' vence a ' + jugador1 + '.');
        }
    }
}

//ejercicio 11

let color = prompt('Ingresa un color:');

color = color.toLowerCase();

switch (color) {
    case 'blanco':
    case 'negro':
        alert('Falta de color.');
        break;
    case 'verde':
        alert('El color de la naturaleza.');
        break;
    case 'azul':
        alert('El color del agua.');
        break;
    case 'amarillo':
        alert('El color del sol.');
        break;
    case 'rojo':
        alert('El color del fuego.');
        break;
    case 'marrón':
        alert('El color de la tierra.');
        break;
    default:
        alert('Excelente elección, no lo teníamos pensado.');
}

//ejercicio 12

let num1Eje12 = parseFloat(prompt('Ingresa el primer número:'));
let num2Eje12 = parseFloat(prompt('Ingresa el segundo número:'));
let operacion = prompt('Ingresa la operación a realizar (+, -, *, /):');


if (isNaN(num1) || isNaN(num2)) {
    alert(" Debes ingresar números válidos. ");
} else {
    
    let resultado;
    switch (operacion) {
        case '+':
            resultado = num1Eje12 + num1Eje12;
            alert(" El resultado de la suma es: "+resultado);
            break;
        case '-':
            resultado = num1Eje12 - num2Eje12;
            alert(" El resultado de la resta es: "+resultado);
            break;
        case '*':
            resultado = num1Eje12 * num2Eje12;
            alert(" El resultado de la multiplicación es: "+resultado);
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1Eje12 / num2Eje12;
                alert(" El resultado de la división es: "+resultado);
            } else {
                alert(" No se puede dividir por cero.");
            }
            break;
        default:
            alert(" Operación no válida. ");
    }
}

//ejercicio 13


let nombreEje13 = prompt('Ingresa tu nombre:');
let apellido = prompt('Ingresa tu apellido:');
let edadEje13 = parseInt(prompt('Ingresa tu edad:'));
let dni = parseInt(prompt('Ingresa tu número de DNI:'));
let nacionalidad = prompt('Ingresa tu nacionalidad:');

// Mostrar un mensaje con todos los datos ingresados para revisión
let mensajeRevision = `Revisa los datos ingresados:\nNombre: ${nombreEje13}\nApellido: ${apellido}\nEdad: ${edadEje13}\nDNI: ${dni}\nNacionalidad: ${nacionalidad}\n\n¿Son correctos los datos? (Sí/No)`;
let confirmacion = prompt(mensajeRevision);

// Verificar si los datos son correctos
if (confirmacion.toLowerCase() === 'sí' || confirmacion.toLowerCase() === 'si') {
    // Crear un objeto con los datos del DNI
    let dniUsuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        dni: dni,
        nacionalidad: nacionalidad
    };

    // Mostrar los datos del DNI por consola
    console.table(dniUsuario);
    console.log('Registro exitoso.');
} else {
    console.log('Vuelve a intentarlo en 1 mes.');
}












