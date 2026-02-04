//input
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");

//Botones de operaciones
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnLimpiar = document.getElementById("btnLimpiar");

//Zona donde mostramos el texto
const salidaResultado = document.getElementById("resultado");
const salidaMensaje = document.getElementById("mensaje");


/**************************************
 * Paso 2
**************************************/


function leerNumeros() {

    //Convertimos los valores de texto en numeros
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);

    //Conprobamos si alguno NO es un numero
    if (isNaN(n1) || isNaN(n2)){
        return null;
    }

    //Si todo esta correcto, devolvemos ambos numeros
    return{
        n1: n1,
        n2: n2
    };

}
/**************************************
 * Paso 3
 * Funciones
**************************************/

//Funcion sumar
function sumar(a, b){
    return a + b;
}


//Funcion resta
function resta(a, b){
    return a - b;
}

//Funcion multiplicar
function multiplicar(a, b){
    return a * b;
}

//Funcion dividir
function dividir(a, b){
    if (b === 0){
        return null;
    }
    return a / b;
}


/**************************************
 * Paso 4
 * Texto en pantalla
**************************************/

function mostrarSalida(valor, mensaje){

    //Si no pasa nada el mensaje
    if (mensaje === undefined){
        mensaje = "";
    }

    //Mostramos el resultado
    salidaResultado.textContent = valor;

    //Mostramos el mensaje
    salidaMensaje.textContent = mensaje
}

/**************************************
 * Paso 5
**************************************/


function ejecutarOperacion(operacion){


    //Leemos los numeros
    const datos = leerNumeros();

    if (datos === null){
        mostrarSalida("-", "Debes introducir numeros validos.");
        return;
    }

    //Sacamos valores del objeto
    const n1 = datos.n1;
    const n2 = datos.n2;

    //Ejecutamos la funcion
    const resultado = operacion(n1, n2);


    //Si hay errores
    if (resultado === null){

        mostrarSalida("-", "No se puede realizar esta operacion.")
        return;
    }

    //Si todo va bien
    mostrarSalida(resultado, "Operacion realizada correctamente")

}



/**************************************
 * Paso 6
 * Event
**************************************/

btnSumar.addEventListener("click", function (){
    ejecutarOperacion(sumar);

})

btnRestar.addEventListener("click", function (){
    ejecutarOperacion(resta);

})

btnMultiplicar.addEventListener("click", function (){
    ejecutarOperacion(multiplicar);

})

btnDividir.addEventListener("click", function (){
    ejecutarOperacion(dividir);

})

/**************************************
 * Paso 7
 * Limpiar
**************************************/

btnLimpiar.addEventListener("click", function (){

    //Vaciar input
    inputNum1.value = "";
    inputNum2.value = "";

    //Limpiar salida
    mostrarSalida("-", "")

    //Colocar el cursor en el primer input
    inputNum1.focus;

})


/**************************************
 * Paso 8
 * Limpiar
**************************************/

mostrarSalida("-", "Introduce dos numeros y selecciona una operacion")




















