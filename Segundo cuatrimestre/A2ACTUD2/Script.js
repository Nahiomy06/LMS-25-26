const TextoPantalla = document.getElementById('mensaje');
const Boton1 = document.getElementById('boton1');
const Boton2 = document.getElementById('boton2');
const Boton3 = document.getElementById('boton3');
const Boton4 = document.getElementById('boton4');
const Boton5 = document.getElementById('boton5');
const Boton6 = document.getElementById('boton6');
const Boton7 = document.getElementById('boton7');
const Boton8 = document.getElementById('boton8');
const Boton9 = document.getElementById('boton9');
const Boton10 = document.getElementById('boton10');
const Boton11 = document.getElementById('boton11');
const Boton12 = document.getElementById('boton12');
const Boton13 = document.getElementById('boton13');


Boton1.addEventListener('click', () => {
    console.log('El botton 1 funciona correctamente');
    let Edad = parseInt(prompt("Hola! Por favor, introduce tu edad: "))
    if (Edad > 18){
        TextoPantalla.textContent = "Eres mayor de edad";
    }else{
        TextoPantalla.textContent = " ";
    }
    
});

Boton2.addEventListener('click', () => { 
        console.log('El botton 2 funciona correctamente');
    let Edad = parseInt(prompt("Hola! Por favor, introduce tu edad: "))
        if (Edad < 18){
        TextoPantalla.textContent = "Eres menor de edad";
        }else{
        TextoPantalla.textContent = "Eres major de edad";
        }
});


Boton3.addEventListener('click', () => { 
    console.log('El botton 3 funciona correctamente');
    var Texto = "";
    for (let i = 1; i <= 20; i++) {
        
    Texto = Texto.textContent = i + " ";
}
        TextoPantalla.textContent = Texto;


});







Boton7.addEventListener('click', () => { 
    console.log('El botton 7 funciona correctamente');
    let Notas = parseFloat(prompt("Hola! Por favor, introduce tu nota: "))
    var Resultado;

    if (Notas >= 0 && Notas < 3){
        Resultado = "La nota es muy deficiente";
    } else if (Notas >= 3 && Notas < 5){
        Resultado = "La nota es insuficiente";
    } else if (Notas >= 5 && Notas <6){
        Resultado = "La nota esta bien";
    }else if (Notas >6 && Notas <9){
        Resultado = "La nota es notable";
    }else if (Notas >=9 && Notas < 10){
        Resultado = "La nota es sobresaliente";
    }else{
        Resultado = "La nota es Invalidad";

    }

    TextoPantalla.textContent = Resultado

});



