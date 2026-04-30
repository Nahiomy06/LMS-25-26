
// Modo calo/Oscuro

const btnCambiarTema = document.getElementById("toggleModo");
const body = document.body;



btnCambiarTema.addEventListener("click", () => {
    body.classList.toggle("oscuro");
})




//Carrito


const tarjetas = document.querySelectorAll(".card");
const listaCarrito = document.querySelector("#cartList"); 
const preciototal = document.querySelector("#precioTotal");

const IniciarDescuento = document.querySelector("InicioDescuento");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function añadidoAlCarrito(id, nombre, precio){
    const productosExistente = carrito.find(producto => producto.id === id);
    if (productosExistente){
        productosExistente.cantidad++;
    }else{
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    };
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
}

tarjetas.forEach(tarjeta => {
    const btnAñadir = tarjeta.querySelector('[data-action="add"]');

    btnAñadir.addEventListener("click", () => {
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.name;
        const precio = parseFloat(tarjeta.dataset.price);
        añadidoAlCarrito(id, nombre, precio)
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

    const btnEliminar = document.querySelectorAll("btn-eliminar");

    btnEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id
            eliminarDelCarito(id);
        });
    });
    calcularTotal();
}




function calcularTotal(){
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    })
    if (preciototal){
        preciototal.textContent = total.toFixed(2) + " €";
    }
}


function eliminarDelCarito(id){
    const posicion = carrito.findIndex(producto => producto.is === id);

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

    mostrarCarrito();





    /*

    IniciarDescuento.addEventListener('click', IniciarSesiond);


function IniciarSesiond(){
    let inicioSesion = sessionStorage.getItem("inicioSesion")
    if (inicioSesion == "true"){
        return;
    } else {
        pedirDatos()
    };
}

function pedirDatos(){
    let usuario = prompt("Introduce tu nombre de usuario:");
    let contraseña = prompt("Introduce tu contraseña:");

    comprobarDatos(usuario, contraseña);
}

function comprobarDatos(usuario, contraseña){
    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
        sessionStorage.setItem("inicioSesion", "true")
    } 
}
    */