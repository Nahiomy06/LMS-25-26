
//Constantes y variables
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




//Ej 1

Boton1.addEventListener('click', () => {
    console.log('El botton 1 funciona correctamente');
    TextoPantalla.textContent = 'Buenos Dias!';
});

Boton2.addEventListener('click', () => {
    console.log('El botton 2 funciona correctamente');
    var LadoCuadrado = 5;
    var ResultadoCuadrado = LadoCuadrado*LadoCuadrado;
    TextoPantalla.textContent = 'El area de un cadrado de lado ' + LadoCuadrado + ' es de: ' + ResultadoCuadrado;
});

Boton3.addEventListener('click', () => {
    console.log('El botton 3 funciona correctamente');
    var LadoCuadrado2 = prompt("Hola! Por favor, introduce el lado del cuadrado: ");
    var ResultadoCuadrado2 = LadoCuadrado2*LadoCuadrado2;
    TextoPantalla.textContent = 'El area del cuadrado de lado ' + LadoCuadrado2 + ' es igual a: ' + ResultadoCuadrado2;
});

Boton4.addEventListener('click', () => {
    console.log('El botton 4 funciona correctamente');
    var Numero1 = parseInt(prompt ("Hola! Por favor introduce el primer numero:"));
    var Numero2 = parseInt(prompt ("Hola! Por favor introduce el segundo numero:"));
    var ResultadoSuma = Numero1+Numero2;
    var ResultadoResta = Numero1-Numero2;
    var ResultadoProducto = Numero1*Numero2;
    var ResultadoDivision = Numero1/Numero2;
    TextoPantalla.textContent = 'La suma de los numeros es: ' + ResultadoSuma + ', La resta es: ' + ResultadoResta + ', El producto es: ' + ResultadoProducto + ', Y la Division es: ' + ResultadoDivision;
})

Boton5.addEventListener('click', () => {
    console.log('El botton 5 funciona correctamente');
    const pi = 3.14;
    var Radio = parseInt(prompt("Hola! Por favor introduce el radio: "))
    var ResultadoCircunferencia = 2*pi*Radio;
    var ResultadoArea = pi*Radio^2;
    var ResultadoVolumen = 3/4*pi*Radio*3;
    TextoPantalla.textContent = 'La circurferencia del Circulo es: ' + ResultadoCircunferencia + ', su Area es: ' + ResultadoArea + ' y su volumen si fuera una esfera es: ' + ResultadoVolumen;
})
