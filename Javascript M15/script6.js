/*
    Practica M20 Clases de JavaScript, localStorage y sessionStorage
*/

// Crea una clase libre con su constructor y campos, tiene que tener 
// 3 métodos que impriman algún resultado en consola y al menos uno 
// debe de usar los campos de la clase. Inicializar una instancia de 
// la clase, usar sus diferentes métodos e imprimir minimo 1 de sus campos en consola.

class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    read() {
        console.log(`Leyendo "${this.title}" de ${this.author}.`);
    }

    info() {
        console.log(`"${this.title}" fue escrito por ${this.author} en ${this.year}.`);
    }

    isClassic() {
        const currentYear = new Date().getFullYear();
        if (currentYear - this.year > 50) {
            console.log(`"${this.title}" es un clásico.`);
        } else {
            console.log(`"${this.title}" no es un clásico aún.`);
        }
    }
}

const myBook = new Book("Cien años de soledad", "Gabriel García Márquez", 1967);
myBook.read(); // Leyendo "Cien años de soledad" de Gabriel García Márquez.


// Crea una clase llamada 'Vehicle' que represente un vehículo. El constructor debe aceptar un parámetro: 'brand' (marca del vehículo). La clase debe tener un método:



class Vehicle {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        
    }
    start() {
        console.log(`El ${this.marca} ${this.modelo} de color ${this.color} ha arrancado.`);
    }
    stop() {
        console.log(`El ${this.marca} ${this.modelo} de color ${this.color} se ha detenido.`);
    }
    displayInfo() {
        console.log(`Información del coche: ${this.marca} ${this.modelo}, Color: ${this.color}`);
    }
}
const myCar = new Vehicle("Rojo", "Toyota", "Corolla");
myCar.start(); // El Toyota Corolla de color Rojo ha arrancado.


// Crea una clase llamada 'Person' que represente una persona. 
// El constructor debe aceptar dos parámetros: 
// 'name' (nombre de la persona) y 'age' (edad de la persona). 
//  La clase debe tener un método:
//       introduceYourself(): Imprime en la consola un mensaje 
//       de presentación de la persona, incluyendo su nombre y edad.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceYourself() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}
const person1 = new Person("Juan", 30);
person1.introduceYourself(); // Hola, mi nombre es Juan y tengo 30 años.

// Crea una función llamada 'saveToLocalStorage' que reciba dos parámetros: 
// 'key' y 'value'. La función debe guardar el parámetro 'value' en 
// LocalStorage utilizando el parámetro 'key', y luego imprimir un mensaje 
// indicando que se ha guardado la información.

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Información guardada en LocalStorage: ${key} = ${value}`);
}
// Llamada a la función para guardar información en LocalStorage
saveToLocalStorage("username", "JohnDoe"); // Información guardada en LocalStorage: username = JohnDoe

// Crea una función de flecha que reciba un parametro userName. 
// La función va a guardar en localStorage el valor de userName 
// y despues va a imprimir en la consola ese valor pero obteniendolo del localStorage.
const saveUserName = (userName) => {
    localStorage.setItem("userName", userName);
    console.log(`Usuario guardado: ${localStorage.getItem("userName")}`);
};
// Llamada a la función de flecha para guardar el nombre de usuario
saveUserName("JaneDoe"); // Usuario guardado: JaneDoe