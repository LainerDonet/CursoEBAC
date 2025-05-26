// Abre el menú
document.getElementById('openSidebar').onclick = () => {
  document.getElementById('sidebarMenu').classList.add('active');
};
// Cierra el menú
document.getElementById('closeSidebar').onclick = () => {
  document.getElementById('sidebarMenu').classList.remove('active');
};


document.addEventListener("DOMContentLoaded", function() {
    const botonesAgregar = document.querySelectorAll(".product__btn");
    const cartSection = document.querySelector(".cart");
    const cartBadge = document.getElementById("cartBadge");
    let cantidadCarrito = 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", function() {
            const product = boton.closest(".product");
            const titulo = product.querySelector(".product__title").textContent;
            const precio = product.querySelector(".product__price").textContent;
            const imagen = product.querySelector(".product__image").src;

            // Crear un nuevo elemento para el carrito
            const itemCarrito = document.createElement("div");
            itemCarrito.classList.add("cart__item");
            itemCarrito.innerHTML = `
                <img class="cart__item-image" src="${imagen}" alt="${titulo}">
                <p class="cart__item-price">${precio}</p>
                <p class="cart__item-description">${titulo}</p>
                <i class="cart__item-delete"><img src="img/quitar.png" alt="Icono de Quitar" class="cart__item-delete-icon"></i>
            `;
            cartSection.appendChild(itemCarrito);

            // Actualizar el badge
            cantidadCarrito++;
            cartBadge.textContent = cantidadCarrito;
        });
    });
});

// Eliminar un elemento del carrito
document.addEventListener("click", function(event) {
    if (event.target.closest(".cart__item-delete")) {
        const itemCarrito = event.target.closest(".cart__item");
        itemCarrito.remove();

        // Actualizar el badge
        const cartBadge = document.getElementById("cartBadge");
        let cantidadCarrito = parseInt(cartBadge.textContent);
        cantidadCarrito--;
        cartBadge.textContent = cantidadCarrito;
    }
});

document.addEventListener("DOMContentLoaded", function() {

    // Mostrar el carrito al hacer click en el icono del header
    const cartIcon = document.getElementById('header__icon-cart');
    const cartSection = document.getElementById('cartSection');
    const closeCartBtn = document.getElementById('closeCart');

    cartIcon.addEventListener('click', function() {
        cartSection.classList.add('active');
    });

    closeCartBtn.addEventListener('click', function() {
        cartSection.classList.remove('active');
    });

    // ...código existente para agregar productos al carrito...
});
