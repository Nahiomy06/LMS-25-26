//Carrito

const productos = document.querySelectorAll(".product");
const listaCarrito = document.querySelector("#cartList");
const precioTotal = document.querySelector("#totalPrice");
const formularioDescuento = document.querySelector("#discountForm");
const inputDescuento = document.querySelector("#discountCode");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function anadirAlCarrito(id, nombre, precio){
    const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente){
        productoExistente.cantidad++;
    } else{
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

productos.forEach(producto => {
    const btnAnadir = producto.querySelector('[data-action="add"]');

    btnAnadir.addEventListener("click", () => {
        const id = producto.dataset.id;
        const nombre = producto.dataset.name;
        const precio = parseFloat(producto.dataset.price);
        anadirAlCarrito(id, nombre, precio)
    });
});

function mostrarCarrito(){
    if (!listaCarrito) return;

    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
        <li class = "cart_item">
            <span>${producto.nombre}</span>
            <span>${producto.precio} €</span>
            <span>${producto.cantidad}</span>
            <button class = "btn-eliminar" data-id = "${producto.id}"> Eliminar </botton>
        </li>
        `;
    });

    const btnEliminarCarrito = document.querySelectorAll(".btn-eliminar");

    btnEliminarCarrito.forEach(boton => {
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
        total = total * (1 - descuentoAplicado / 100);
    }
    if (precioTotal){
        precioTotal.textContent = total.toFixed(2) + " €";
    }
}


function eliminarDelCarito(id){
    const posicion = carrito.findIndex(producto => producto.id === id);

    if (posicion != -1){
        if(carrito[posicion].cantidad > 1){
            carrito[posicion].cantidad--;
        }else{
            carrito.splice(posicion, 1);
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

if(formularioDescuento){
    formularioDescuento.addEventListener("submit", function(evento){
        evento.preventDefault();
        const codigo = inputDescuento.value.trim().toUpperCase();

        if (codigo === "1234"){
            descuentoAplicado = 10;
            alert("Codigp aplicado correctamente: 10% de descuento")
        }else {
            descuentoAplicado = 0
            alert("Descuento no valido")
        }
        calcularTotal();
    })
}


    mostrarCarrito();

