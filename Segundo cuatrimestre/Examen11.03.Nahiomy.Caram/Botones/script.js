
// 1 Registro de notas

const Boton1 = document.getElementById('Button1')
const NotaRes = document.getElementById('NotasRes')


Boton1.addEventListener('click', () =>{
    console.log('Funciona :3')

    var notas = [];

    var media = 0;
    var aprobados = 0;
    var suspensas = 0;
    var notaMax = Math.max(Max, notas)
    var notasMin = Math.min(Min, notas)


    for (i = 0; i > 10; i ++){
        var num = parseInt(prompt("Introduce tu nota, del 0 al 10:"));
        if (num > 10 || num <0){
            NotaRes = ("La nota ingrsada es invalida");
        }else{
            notas[i] = num;
            media = num + '';
            notasMax
            
            if (num > 5){
                aprobados++;
            } else {
                suspensas++;
            }
            
            NotaRes = "Media: " + media + ", Aprobadas: " + aprobados + ", Suspensas: " + suspensas + ", Nota maxima: " + notaMax + ", Nota minima: " + notasMin
        }


    }
    




})



const Boton2 = document.getElementById('Button2')
const Boton3 = document.getElementById('Button3')
const Boton4 = document.getElementById('Button4')
const Boton5 = document.getElementById('Button5')
const Boton6 = document.getElementById('Button6')
const Boton7 = document.getElementById('Button7')

