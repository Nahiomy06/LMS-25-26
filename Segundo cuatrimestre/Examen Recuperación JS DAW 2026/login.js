const btnAnadir = document.querySelector("#btn");

btnAnadir.addEventListener('click', anadirCarrito());


function anadirCarrito(){
    let cuentaIniciada = sessionStorage.getItem("inicioSesion");

    if(cuentaIniciada === "true"){
        return;
    } else{
        iniciarSesion();
    }
};

function iniciarSesion(){
    const usuarioV = "me";
    const contraV = "1234";

    let usuario = prompt("Introduce el usuario:");
    let contra = prompt("Introduce la contraseña:");

    if(usuario.trim() === usuarioV && contra === contraV){
        sessionStorage.setItem("iniciarSesion", "true");
    }
}