const validacion = document.getElementById('validacion');
const listaErrores = document.getElementById("listaErrores");

function leerCampoTexto(id) {
  return document.getElementById(id).value.trim();
}

function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function limpiarError(id) {
  document.getElementById(id).textContent = "";
}



function validarQueso(){
    const Queso = leerCampoTexto('QuesoCant').value

    if (isNaN(Queso)){
        mostrarError("ErrorQueso", "Cantidad invalida")
        return false;
    }
    console.log('Funciona')

    limpiarError ("ErrorQueso")
    return true;

}
function validarJamon(){
    const Jamon = leerCampoTexto('JamonCant').value

    if (isNaN(Jamon)){
        mostrarError("ErrorJamon", "Cantidad invalida")
        return false;
    }
    console.log('Funciona')

    limpiarError ("ErrorJamon")
    return true;

}

function validarPollo(){
    const Pollo = leerCampoTexto('PolloCant').value

    if (isNaN(Pollo)){
        mostrarError("ErrorPollo", "Cantidad invalida")
        return false;
    }
    console.log('Funciona')

    limpiarError ("ErrorPollo")
    return true;

}

function validarPescado(){
    const Pescado = Number(leerCampoTexto('PescadoCant').value)

    if (Pescado < 0){
        mostrarError("ErrorPescado", "Cantidad invalida")
        return false;
    }else{
    console.log('Funciona')

    limpiarError ("ErrorPescado")
    return true;
    }
}

function validarHuevos(){
    const Huevos = leerCampoTexto('HuevosCant').value

    if (isNaN(Huevos)){
        mostrarError("ErrorHuevo", "Cantidad invalida")
        return false;
    }
    console.log('Funciona')

    limpiarError ("ErrorHuevo")
    return true;

}


function generarResumenErrores() {
  listaErrores.innerHTML = "";

  const errores = document.querySelectorAll(".error");

  errores.forEach(error => {
    if (error.textContent !== "") {
      const li = document.createElement("li");
      li.textContent = error.textContent;
      listaErrores.appendChild(li);
    }
  });

  if (listaErrores.children.length === 0) {
    listaErrores.innerHTML = "<li>Sin errores</li>";
  }
}


function validarFormulario(){
    const validaciones = [
        validarQueso(),
        validarJamon(),
        validarPollo(),
        validarPescado(),
        validarHuevos()
    ]
    
    return validaciones.every(v => v === true)
}





