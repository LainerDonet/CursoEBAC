document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos
    const form = document.getElementById("subscriptionForm");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const errorSpan = document.querySelector(".show-error");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Limpiar mensajes previos
        errorSpan.textContent = "";
        inputName.classList.remove("input-error");
        inputEmail.classList.remove("input-error");

        let hasError = false;

        // Validar nombre
        if (inputName.value.trim() === "") {
            errorSpan.textContent = "Por favor, ingresa tu nombre.";
            inputName.classList.add("input-error");
            hasError = true;
            return;
        }

        // Validar email con expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value.trim())) {
            errorSpan.textContent = "Por favor, ingresa un correo electrónico válido.";
            inputEmail.classList.add("input-error");
            hasError = true;
            return;
        }

        // Si todo es válido
        if (!hasError) {
            errorSpan.style.color = "green";
            errorSpan.textContent = "¡Suscripción exitosa! Gracias por suscribirte.";
            form.reset();
            setTimeout(() => {
                errorSpan.textContent = "";
                errorSpan.style.color = "";
            }, 3000);
        } else {
            errorSpan.style.color = "red";
            errorSpan.textContent = "Por favor, corrige los errores e inténtalo de nuevo.";
        }
    });
});