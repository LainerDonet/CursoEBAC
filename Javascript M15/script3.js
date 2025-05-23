function multiply(a, b) {
    return a * b;
    
}

console.log(multiply(2, 3));

function convertCelsius(fahrenheit) {
    // Convertir Fahrenheit a Celsius
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;    
    
}

console.log(convertCelsius(77));

function sumArrays(arr) {
    // Sumar todos los elementos de un array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    
}
console.log(sumArrays([1,2,3]))

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

console.log(calculator(1, 1, "+")); // 2

function dogIdentifier(mascota) {
    if (mascota.species.toLowerCase() === "perro") {
        return `${mascota.name} puede pasar a consulta.`;
    } else {
        return "Solo se atienden perros en este hospital.";
    }
}

// Ejemplo de uso:
console.log(dogIdentifier({name: "Shiva", species: "Perro"})); // Shiva puede pasar a consulta.
console.log(dogIdentifier({name: "Michi", species: "Gato"}));  // Solo se atienden perros en este hospital.

function capitalize(str) {
    // Convertir la primera letra de cada palabra a mayúscula
    return str.replace(/\b\w/g, char => char.toUpperCase());
    
}

console.log(capitalize("hola!")); // Hola Mundo

function limpiarYCompletarDias(array) {
    const diasSemana = [
        "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
    ];
    // Filtrar solo los días válidos y eliminar duplicados
    let diasEnArray = array.filter(item => diasSemana.includes(item));
    diasEnArray = [...new Set(diasEnArray)];
    // Añadir los días que faltan
    for (const dia of diasSemana) {
        if (!diasEnArray.includes(dia)) {
            diasEnArray.push(dia);
        }
    }
    return diasEnArray;
}

// Ejemplo de uso:
const entrada = ["Lunes", "Perro", "Martes", "Sol", "Viernes", "Domingo", "Lunes"];
const resultado = limpiarYCompletarDias(entrada);
console.log(resultado);
// Salida: ["Lunes", "Martes", "Viernes", "Domingo", "Miércoles", "Jueves", "Sábado"]

function addPropertie(obj, key, value) {
    obj[key] = value;
    return obj;
}

// Ejemplo de uso:
const resultado1 = addPropertie({song: "The Scientist"}, "artist", "Coldplay");
console.log(resultado1); // {song: "The Scientist", artist: "Coldplay"}

function showObject(obj, instruccion) {
    const texto = instruccion.toLowerCase();
    if (texto.includes("valor")) {
        // Mostrar los valores del objeto
        const valores = Object.values(obj);
        console.log(valores.join(", "));
        return valores.join(", ");
    } else if (texto.includes("key")) {
        // Mostrar las keys del objeto
        const llaves = Object.keys(obj);
        console.log(llaves.join(", "));
        return llaves.join(", ");
    } else {
        const mensaje = "Instrucción no válida. Especifica si quieres ver keys o valores.";
        console.log(mensaje);
        return mensaje;
    }
}

// Ejemplo de uso:
const miObjeto = {
    movie: "Star Wars",
    director: "George Lucas",
    year: 1977,
    genre: "Sci-Fi"
};

const resultado2 = showObject(miObjeto, "Muestrame todos los valores, porfa!");
// Imprime: Star Wars, George Lucas, 1977, Sci-Fi

const resultado3 = showObject(miObjeto, "¿Cuáles son las keys?");
console.log(resultado3); // movie, director, year, genre

const resultado4 = showObject(miObjeto, "Dame la info");
console.log(resultado4); // Instrucción no válida. Especifica si quieres ver keys o valores.

function analizarFrases(frases) {
    // La función recibe un array de frases y devuelve solo las frases que:
    // - Tienen más de 10 caracteres (usando .length)
    // - Empiezan con mayúscula (usando .charAt y .toUpperCase)
    // Además, convierte todas las frases seleccionadas a minúsculas (usando .toLowerCase)
    const resultado = [];
    for (const frase of frases) {
        if (
            frase.length > 10 &&
            frase.charAt(0) === frase.charAt(0).toUpperCase()
        ) {
            resultado.push(frase.toLowerCase());
        }
    }
    return resultado;
}

// Ejemplo de uso:
const frases = [
    "Hola mundo",
    "bienvenido",
    "Esto es una Frase Larga",
    "corta",
    "Otra Frase Importante",
    "pequeña"
];

const frasesAnalizadas = analizarFrases(frases);
console.log(frasesAnalizadas);
// Salida: ["hola mundo", "esto es una frase larga", "otra frase importante"]