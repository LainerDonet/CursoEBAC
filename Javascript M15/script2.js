let i = 0;
while (i < 11) {
    console.log(i);
    i++;
    
}

personas = {
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