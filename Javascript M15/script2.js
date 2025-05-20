/* 
    1. Crear un bucle que imprima los números del 0 al 10.
*/

let i = 0;
while (i < 11) {
    console.log(i);
    i++;
    
}

/*
    1. Crear un blucle que imprime las propiedad de un objeto con las siguientes propiedades:
    nombre, nombre2, nombre3, nombre4, nombre5, nombre6
*/

const personas = {
    nombre: "Juan",
    nombre2: "Pedro",
    nombre3: "Luis",
    nombre4: "Ana",
    nombre5: "María",
    nombre6: "Laura",
}

for (const nombre in personas) {
    console.log(personas[nombre]);
}

/*
    1. Buscar un usuario por su nombre en un array de objetos con las siguientes propiedades:
    user, email
*/

let userEmail = [
    { 
        user : "Juan", 
        email : "juan@miempresa.com"
    }, 
    { 
        user : "Pedro", 
        email : "pedro@miempresa.com"
    },
    { 
        user : "Luis", 
        email : "luis@miempresa.com"
    },
    { 
        user : "Ana", 
        email : "ana@miempresa.com"
    },
    {
        user : "María",
        email : "maria@miempresa.com"
    },
    {
        user : "Laura",
        email : "laura@miempresa.com"
    }
];
function buscarUsuarioPorNombre(usuarios, nombreBuscado) {
    for (const usuario of usuarios) {
        if (usuario.user === nombreBuscado) {
            return usuario;
        }
    }
    return null; // Si no se encuentra el usuario
}

// Ejemplo de uso:

const resultado = buscarUsuarioPorNombre(userEmail, "Ana");
console.log(resultado); 

/*
    1. Crear un array de objetos con las siguientes propiedades:
    nombre, precio, disponible
    2. La funcion buesca los productos que esten disponibles
*/

const products = [
    { 
        name: "Laptop", 
        price: 1000,
        available: true
    }, 
    { 
        name: "Smartphone", 
        price: 500,
        available: false
    }, 
    { 
        name: "Tablet", 
        price: 300,
        available: true
    }
    , 
    { 
        name: "Monitor", 
        price: 200,
        available: true
    }, 
    { 
        name: "Keyboard", 
        price: 50,
        available: false
    },
    { 
        name: "Mouse", 
        price: 25,
        available: true
    },
    { 
        name: "Printer", 
        price: 150,
        available: true
    },
    { 
        name: "Headphones", 
        price: 80,
        available: false
    }, 
    { 
        name: "Webcam", 
        price: 60,
        available: true
    }, 
    { 
        name: "Speakers", 
        price: 120,
        available: false
    }
];

function findAvailable(products) {
    const availableProducts = [];
    for (const product of products) {
        if (product.available) {
            availableProducts.push(product);
        }
    }
    return availableProducts;
    
}

// Ejemplo de uso:
const availableProducts = findAvailable(products);
console.log(availableProducts); 

/*
    1. Crear una funcion que reciba un array de precios y devuelva el total de la compra
*/

function calcularTotal(precios) {
    let total = 0;
    for (const precio of precios) {
        total += precio;
    }
    return total;
}

// Ejemplo de uso:
const preciosComprados = [1000, 300, 25, 150];
const montoTotal = calcularTotal(preciosComprados);
console.log(`El monto total de la compra es: $${montoTotal}`);

/*
    1. Crear una funcion que reciba un array de objetos con las siguientes propiedades:
    tarea, completada
    2. La funcion devuelve un array con las tareas pendientes
*/

function listarTareasPendientes(tareas) {
    const pendientes = [];
    for (const tarea of tareas) {
        if (!tarea.completada) {
            pendientes.push(tarea.tarea);
        }
    }
    return pendientes;
}

// Ejemplo de uso:
const tareas = [
    { tarea: "Estudiar JavaScript", completada: true },
    { tarea: "Hacer ejercicio", completada: false },
    { tarea: "Leer un libro", completada: false },
    { tarea: "Preparar la cena", completada: true }
];

const pendientes = listarTareasPendientes(tareas);
console.log("Tareas pendientes:", pendientes);

/*
    1. Crear una funcion que filtra los productos por precio
    2. La funcion recibe un array de objetos con las siguientes propiedades:
    nombre, precio
    3. La funcion devuelve un array con los productos que tengan un precio menor a un precio dado
*/

function filtrarProductosPorPrecio(productos, precioMaximo) {
    const productosFiltrados = [];
    for (const producto of productos) {
        if (producto.price < precioMaximo) {
            productosFiltrados.push(producto);
        }
    }
    return productosFiltrados;
}

// Ejemplo de uso:
const productosBaratos = filtrarProductosPorPrecio(products, 200);
console.log("Productos con precio menor a $200:", productosBaratos);