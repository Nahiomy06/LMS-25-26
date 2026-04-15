
window.addEventListener('load', IniciarPagina);

function IniciarPagina(){
    let inicioSesion = sessionStorage.getItem("inicioSesion");
    if(inicioSesion == "true"){
        return;
    }
    else{
        pedirDatos();
    }  
};

function pedirDatos(){
    let usuario = prompt("Introduce tu nombre de usuario:");
    let contraseña = prompt("Introduce tu contraseña:");

    comprobarDatos(usuario,contraseña);
}

function comprobarDatos(usuario, contraseña){
    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";

    if ( usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
        sessionStorage.setItem("inicioSesion", "true")
    } else{
        window.location.href = "Error.html"
    }

}
