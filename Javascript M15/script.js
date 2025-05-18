/*
    1. Se crea una función que calcule el precio de un producto con descuento, la función recibe dos parámetros: el precio original y el porcentaje de descuento.
    2. Se calcula el precio con descuento restando el porcentaje del precio original.
    3. Se devuelve el precio con descuento.
    4. Se llama a la función con un precio de 350 y un descuento del 10%.
    5. Se imprime el resultado en la consola.
*/ 

// function discountCalculator(price, discount) {
//     let discountedPrice = price - (price * (discount / 100));
//     return discountedPrice;
    
// }

// const result = discountCalculator(350, 10); 

// console.log(`El precio con descuento es: $ ${result}`); // El precio con descuento es: $315

// function convertFtoC() {
   
//     let temp = prompt("¿La temperetatura es en Fahrenheit o Celsius? Responda F o C");
//     if (temp == "F") {
//         let fahrenheit = prompt("¿Cuantos grados Fahrenheit?");
//         let result = (fahrenheit - 32) * 5 / 9;
//         alert(`La temperatura es: ${result}°C`);
//         return result;
//     }
//     else if (temp == "C") {
//         let celsius = prompt("¿Cuantos grados Celsius?");
//         let result= (celsius * 9 / 5) + 32;
//         alert(`La temperatura es: ${result} °F`);
//         return result;
//     }
//     else {
//         alert("Respuesta no válida");
//     }
    
// }

// convertFtoC();
/*
    1. Se crea una función que recibe un número y devuelve su cuadrado.
    2. Se llama a la función con el número 5 y se imprime el resultado en la consola.
*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function arrayAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     let average = sum / numbers.length;
//     return average;
    
// }
// console.log(arrayAverage(numbers)); // 5.5

// function multiTable(num) {
//     console.log(`Tabla de multiplicar del ${num}`);
//     for (let i = 1; i <= 10; i++) {
//         let result = num * i;
//         console.log(`${num} x ${i} = ${result}`);
//     }
// }
// multiTable(7); // Tabla de multiplicar del 5

function emailValidator(email) {
    // Criterios básicos: texto@texto.dominio (dominio de 2 a 10 letras)
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,10}$/;
    return regex.test(email);
}

// Ejemplos de uso:
const emails = [
    "usuario@dominio.com",
    "nombre.apellido@empresa.org",
    "correo@sub.dominio.net",
    "malcorreo@dominio",
    "otro@dominio.c",
    "sinarroba.com",
    "espacio @dominio.com"
];

emails.forEach(email => {
    console.log(`${email}: ${emailValidator(email) ? "Válido" : "No válido"}`);
});