function lanzarDado() {
    return new Promise((resolve, reject) => {
        const dice = Math.floor(Math.random() * 7); // 0 a 6
        setTimeout(() => {
            if (dice === 0) {
                reject("¡El dado cayó en cero! Lanzamiento inválido.");
            } else {
                const tipo = dice % 2 === 0 ? "par" : "impar";
                resolve({ valor: dice, mensaje: `Salió el número ${dice}, que es ${tipo}.` });
            }
        }, 700);
    });
}

async function jugarDado() {
    const resultado = document.getElementById("resultado-dado");
    const dado = document.getElementById("dice-face");
    // Muestra animación de lanzamiento
    dado.textContent = "?";
    resultado.textContent = "";
    try {
        const res = await lanzarDado();
        dado.textContent = res.valor; // Mostrar el número en el dado
        resultado.textContent = res.mensaje;
    } catch (error) {
        dado.textContent = "0"; // Mostrar 0 si cae en cero
        resultado.textContent = error;
    }
}