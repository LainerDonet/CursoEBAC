/*
    1. Se crea una función que calcule el precio de un producto con descuento, la función recibe dos parámetros: el precio original y el porcentaje de descuento.
    2. Se calcula el precio con descuento restando el porcentaje del precio original.
    3. Se devuelve el precio con descuento.
    4. Se llama a la función con un precio de 350 y un descuento del 10%.
    5. Se imprime el resultado en la consola.
*/ 

function discountCalculator(price, discount) {
    let discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
    
}

const result = discountCalculator(350, 10); 

console.log(`El precio con descuento es: $ ${result}`); // El precio con descuento es: $315

/*
    1. Se crea una función que recibe la pregunta por la magnitud de la temperatura.
    2. Se utiliza un condicional para determinar si la temperatura es en Fahrenheit o Celsius.
    3. Se utiliza la fórmula de conversión para calcular la temperatura en la otra escala.
    4. Se devuelve la temperatura convertida.
*/

function convertFtoC() {
   
    let temp = prompt("¿La temperetatura es en Fahrenheit o Celsius? Responda F o C");
    if (temp == "F") {
        let fahrenheit = prompt("¿Cuantos grados Fahrenheit?");
        let result = (fahrenheit - 32) * 5 / 9;
        alert(`La temperatura es: ${result}°C`);
        return result;
    }
    else if (temp == "C") {
        let celsius = prompt("¿Cuantos grados Celsius?");
        let result= (celsius * 9 / 5) + 32;
        alert(`La temperatura es: ${result} °F`);
        return result;
    }
    else {
        alert("Respuesta no válida");
    }
    
}

// convertFtoC();
/*
    1. Se crea una función que recibe un arreglo de números.
    2. Se utiliza un bucle para sumar todos los números del arreglo.
    3. Se calcula el promedio dividiendo la suma entre la cantidad de números.
    4. Se devuelve el promedio.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function arrayAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
    
}
console.log(arrayAverage(numbers)); // 5.5

function multiTable(num) {
    console.log(`Tabla de multiplicar del ${num}`);
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} x ${i} = ${result}`);
    }
}
multiTable(7); // Tabla de multiplicar del 5

/*
    1. Se crea una función que verifica si un correo electrónico es válido.
    2. Se utiliza una expresión regular para validar el formato del correo.
    3. Se llama a la función con varios ejemplos de correos electrónicos.
    4. Se imprime el resultado en la consola.
*/

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

/*
    1. Se crea una función que recibe dos números y un operador.
    2. Se utiliza un switch para determinar la operación a realizar.
    3. Se devuelve el resultado de la operación.
    4. Se llama a la función con diferentes ejemplos.
*/
function calculator(n1, n2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                return "Error: División por cero";
            }
            break;
        default:
            return "Operador no válido";
    }
    return result;
    
}

console.log(calculator(10, 5, "+")); // 15

/*
    1. Se crea una función que recibe un número del 1 al 7 y devuelve el nombre del día de la semana correspondiente.
*/

function weekday(numberday) {
    switch (numberday) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día no válido";
    }   
    
}

console.log(weekday(1)); // Lunes
/*
    1. Se crea una función que recibe un número y el promedio de calificaciones.
    2. Se utiliza un condicional para determinar si el estudiante es elegible para una beca.
*/

function scholarshipElegibility(age, average) {
    if (age >= 18 && average >= 8.5) {
        return "Beca aprobada";
    } else if (age < 18 && average >= 9) {
        return "Beca aprobada";
    } else {
        return "Beca no aprobada";
    }
    
}
/*
    1. Se crea una función que recibe el topico de un libro.
    2. Se utiliza un switch para determinar el tipo de libro.
    3. Se devuelve el tipo de libro.
*/

function bookTopic(topic) {
    switch (topic) {
        case "Ciencia":
            return "El libro es de Ciencia";
        case "Historia":
            return "El libro es de Historia";
        case "Ficción":
            return "El libro es de Ficción";
        case "Tecnología":
            return "El libro es de Tecnología";
        default:
            return "Tema no válido";
    }
    
}

/*
    1. Se crea una función que recibe un monto de compra.
    2. Se utiliza un condicional para determinar el porcentaje de descuento.
*/

function aplicarDescuento(monto) {
    let descuento = 0;
    if (monto > 1000) {
        descuento = 0.15; // 15% para compras mayores a $1000
    } else if (monto > 500) {
        descuento = 0.10; // 10% para compras mayores a $500
    } else if (monto > 100) {
        descuento = 0.05; // 5% para compras mayores a $100
    }
    const montoFinal = monto - (monto * descuento);
    return `Total a pagar: $${montoFinal.toFixed(2)} (descuento aplicado: ${descuento * 100}%)`;
}

// Ejemplos de uso:
console.log(aplicarDescuento(80));    // Sin descuento
console.log(aplicarDescuento(150));   // 5%
console.log(aplicarDescuento(600));   // 10%
console.log(aplicarDescuento(1200));  // 15%   