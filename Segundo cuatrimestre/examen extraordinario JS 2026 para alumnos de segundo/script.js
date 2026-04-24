const tarjetas = document.querySelectorAll(".card");
const listaCarrito = document.querySelector("#cartList"); 
const totalPrecio = document.querySelector("#totalPrice"); 
const formularioDescuento = document.querySelector("#discountForm"); 
const inputDescuento = document.querySelector("#discountCode");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Nuevo y añadido(entendi :3)
let descuentoAplicado = 0;


function anadirAlCarrito(id, nombre, precio){
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente){
        productoExistente.cantidad++;
    }
    else{
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

tarjetas.forEach(tarjeta => {
    const botonAñadir = tarjeta.querySelector('[data-action="add"]');

    botonAñadir.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
        anadirAlCarrito(id, nombre, precio);
    });
});

function mostrarCarrito() {
    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
        <li class = "cart_item">
            <span>${producto.nombre}</span> 
            <span>${producto.precio} €</span> 
            <span>${producto.cantidad}</span>
            <button class = "btn-eliminar" data-id = "${producto.id}">Eliminar</button> 
        </li>
        `;
    });

    const botonesEliminarCarito = document.querySelectorAll(".btn-eliminar")

    botonesEliminarCarito.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            eliminarDelCarito(id);
        });
    });

    calcularTotal();
}

function calcularTotal(){
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    if(descuentoAplicado > 0){
        total =  total * (1 - descuentoAplicado / 100);
    }
    if (totalPrecio){
        totalPrecio.textContent = total.toFixed(2) + " €";
    }
}

function eliminarDelCarito(id) {
    const posicion = carrito.findIndex(producto => producto.id === id);

    if (posicion != -1){
        if (carrito[posicion].cantidad > 1){
            carrito[posicion].cantidad--;
        }
        else{
            carrito.splice(posicion, 1);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


if (formularioDescuento){
    formularioDescuento.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();

        if(codigo === "PIZZA10"){
            descuentoAplicado = 10;
            alert("Codigo aplicado correctamnte: 10% de descuento")
        }
        else{
            descuentoAplicado = 0;
            alert("Descuento no valido");
        }
        calcularTotal();
    })

}

    mostrarCarrito();

