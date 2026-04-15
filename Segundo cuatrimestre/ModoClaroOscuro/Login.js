window.addEventListener('load', iniciarPagina());

function iniciarPagina(){

    let cuentaIniciada = sessionStorage.getItem("inicioSesion")

    if(cuentaIniciada === "true"){
        return
    }else{
        iniciarSesion()
    }
}

function iniciarSesion(){

    const UsuarioValido = "admin";
    const ContraseñaValida = "1234";

    let Usuario = prompt("Introduzca el usuario: ");
    let Contraseña = prompt("Introduzca la contraseña: ");


    if (Usuario.trim() === UsuarioValido && Contraseña === ContraseñaValida){
        sessionStorage.setItem("inicioSesion", "true");
    } else{
        window.location.href = "error.html";
    }
    
}