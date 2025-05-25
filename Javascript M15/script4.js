/*
    Practica M18 Scope de Variables de JavaScript
*/

// Crear una variable global e imprimirla en la consola
var globalVar = "Variable Global"; 
console.log("Global:", globalVar);

// Crear una variable dentro de un bloque de código y asígnale un valor. Luego, imprime esta variable en la consola con el texto "Variable de Bloque".
{
    let blockVar = "Variable de Bloque";
    console.log("Bloque:", blockVar);
}
// Intentar imprimir la variable de bloque fuera del bloque (esto debería dar un error)

console.log("Bloque fuera:", blockVar); // Esto dará un error porque blockVar no está definida fuera del bloque

// Declara una variable global llamada globalVar y asígnale un valor. Luego, modifica el valor de esta variable dentro de una función y muestra el valor actualizado en la consola.
function modifyGlobalVar() {
    globalVar = "Variable Global Modificada";
    console.log("Modificada:", globalVar);
}
modifyGlobalVar(); // Llamar a la función para modificar la variable global
// Crea una variable dentro de un bloque de código anidado y muestra su valor en la consola.
{
    {
        let nestedBlockVar = "Variable de Bloque Anidado";
        console.log("Anidado:", nestedBlockVar);
    }
}
// Intentar imprimir la variable anidada fuera del bloque (esto debería dar un error)

console.log("Anidado fuera:", nestedBlockVar); // Esto dará un error porque nestedBlockVar no está definida fuera del bloque

// Declara una variable dentro de una función y luego intenta acceder a ella desde fuera de la función. Observa el resultado en la consola.
function localFunction() {
    let localVar = "Variable Local";
    console.log("Local dentro de la función:", localVar);
}
localFunction(); // Llamar a la función para imprimir la variable local

console.log("Local fuera de la función:", localVar); // Esto dará un error porque localVar no está definida fuera de la función
// Declara una variable global y otra local con el mismo nombre dentro de una función. Intenta acceder a la variable global dentro de la función y observa el resultado.
var sameNameVar = "Variable Global con Mismo Nombre";
function sameNameFunction() {
    var sameNameVar = "Variable Local con Mismo Nombre";
    console.log("Dentro de la función:", sameNameVar); // Imprime la variable local
}
sameNameFunction(); // Llamar a la función para imprimir la variable local
console.log("Fuera de la función:", sameNameVar); // Imprime la variable global
