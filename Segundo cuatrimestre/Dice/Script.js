let btnLanzar = document.getElementById('btnLanzar');
let resultado = document.getElementById('resultado');
let imagenResultado = document.getElementById('imagenResultado');


btnLanzar.addEventListener("click", function() {
    
    let dado = Math.floor(Math.random() * 6) + 1;
    resultado.textContent = "Ha salido el numero: " + dado;
    
    //if (dado === 1){
    //    imagenResultado.scr = "Img/dado1.png";
    //}
    //else if(dado === 2){
    //    imagenResultado.scr = "Img/dado2.png";
    //}
    //else if(dado === 3){
    //    imagenResultado.scr = "Img/dado3.png";
    //}
    //else if(dado === 4){
    //    imagenResultado.scr = "Img/dado4.png";
    //}
    //else if(dado === 5){
    //    imagenResultado.scr = "Img/dado5.png";
    //}
    //else{
    //    imagenResultado.src = "Img/dado6.png";
    //}

    imagenResultado.src = "Img/dado" + dado +".png"
   

})



























