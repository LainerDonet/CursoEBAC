/*
    Practica M19 ESMScript 6 ES6
    1- Arrow Functions
    2- Default Parameters
    3- Multiple String 
    4- template literals
    5- Destructuring
    6- Spread Operator
    7- Rest Operator
*/

// Arrow Functions
const suma = (a, b) => a + b;
console.log(object.suma(5, 3)); // 8

// Arrow function para calcular el área de un triángulo
const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(5, 10)); // 25

// Crea una función de flecha que acepte dos parámetros, el primero el nombre de un usuario que será un string y el segundo
// llamado hasAccont que será un booleano que tendrá como default parameter el valor de false. La función revisará si el 
// usuario tiene cuenta, si hasAccount viene como false, imprimirá en consola un string con el siguiente texto "el usuario 
// userName, no tiene cuenta"; si se le pasa un valor true entonces imprimirá, "El usuario userName puede acceder a la app"

const verificarCuenta = (userName, hasAccount = false) => {
    if (!hasAccount) {
        console.log(`El usuario ${userName}, no tiene cuenta`);
    } else {
        console.log(`El usuario ${userName} puede acceder a la app`);
    }
};
// Ejemplo de uso
verificarCuenta("Juan"); // El usuario Juan, no tiene cuenta
verificarCuenta("Ana", true); // El usuario Ana puede acceder a la app

// Crea un objeto y un array, haz destructuring de sus propiedades o elementos e imprime en consola 2 valores de cada uno

const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
};
const { nombre, edad } = persona;
const numeros = [1, 2, 3, 4, 5];
const [primerNumero, segundoNumero] = numeros;
console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Nombre: Carlos, Edad: 30
console.log(`Primer número: ${primerNumero}, Segundo número: ${segundoNumero}`); // Primer número: 1, Segundo número: 2

// Concatena con spread el array dado en un array nuevo que tenga elementos existentes. Agrega las propiedades del objeto
// dado a otro objeto que contenga propiedades

const arr = [false, 14, "Copiame con spread ", "⚽"];
const arrExistente = [1, 2, 3];
const nuevoArr = [...arrExistente, ...arr];
console.log(nuevoArr); // [1, 2, 3, false, 14, "Copiame con spread ", "⚽"]

const obj = {
  message: "Copiame con spread!",
  emoji: "🌮",
  canBeCopied: true,
};
const objExistente = { id: 101, autor: "Lainer" };
const nuevoObj = { ...objExistente, ...obj };
console.log(nuevoObj);
// { id: 101, autor: 'Lainer', message: 'Copiame con spread!', emoji: '🌮', canBeCopied: true }

