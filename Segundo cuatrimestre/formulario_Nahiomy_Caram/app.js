// dopcumento y var

const form = document.getElementById("formRegistro");
const estadoTexto = document.getElementById("estadoTexto");
const listaErrores = document.getElementById("listaErrores");


// Lectura
//-- Estos toman el valor de un input de un id que yo les de despues y le sacan los espacios en blanco

function leerCampoTexto(id) {
  return document.getElementById(id).value.trim();
}

function leerCheckbox(id) {
  return document.getElementById(id).checked;
}

function leerSelect(id) {
  return document.getElementById(id).value;
}


//Interfaz

function mostrarError(idError, mensaje) {
  document.getElementById(idError).textContent = mensaje;
}

function limpiarError(idError) {
  document.getElementById(idError).textContent = "";
}

function actualizarEstadoGeneral(texto, correcto) {
  estadoTexto.textContent = texto;
  estadoTexto.style.color = correcto ? "green" : "red";
}

// validaciones individuales

function validarNombre() {
  const nombre = leerCampoTexto("nombre");
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,30}$/;

  if (!regex.test(nombre)) {
    mostrarError("errorNombre", "Nombre inválido.");
    return false;
  }

  limpiarError("errorNombre");
  return true;
}

function validarApellidos() {
  const apellidos = leerCampoTexto("apellidos");
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,60}$/;

  if (!regex.test(apellidos)) {
    mostrarError("errorApellidos", "Apellido inválido.");
    return false;
  }


  limpiarError("errorApellidos");
  return true;
}

function validarEmail() {
  const email = leerCampoTexto("email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    mostrarError("errorEmail", "Email inválido.");
    return false;
  }

  limpiarError("errorEmail");
  return true;
}

function validarTelefono() {
  const telefono = leerCampoTexto("telefono");
  const regex = /^[0-9]{9}$/;

  if (!regex.test(telefono)) {
    mostrarError("errorTelefono", "Teléfono inválido.");
    return false;
  }

  limpiarError("errorTelefono");
  return true;
}

function validarFecha() {
  const fecha = new Date(leerCampoTexto("fechaNacimiento"));
  const hoy = new Date();

  const edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();

  if (
    edad < 18 ||
    (edad === 18 && mes < 0) ||
    isNaN(edad)
  ) {
    mostrarError("errorFecha", "Debes ser mayor de 18 años.");
    return false;
  }

  limpiarError("errorFecha");
  return true;
}

function validarProvincia() {
  const provincia = leerSelect("provincia");

  if (provincia === "") {
    mostrarError("errorProvincia", "Selecciona una provincia.");
    return false;
  }

  limpiarError("errorProvincia");
  return true;
}

function validarPassword() {
  const password = leerCampoTexto("password");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(password)) {
    mostrarError("errorPassword", "Contraseña insegura.");
    return false;
  }

  limpiarError("errorPassword");
  return true;
}

function validarPassword2() {
  const password = leerCampoTexto("password");
  const password2 = leerCampoTexto("password2");

  if (password !== password2 || password2 === "") {
    mostrarError("errorPassword2", "Las contraseñas no coinciden.");
    return false;
  }

  limpiarError("errorPassword2");
  return true;
}

function validarObservaciones() {
  const obs = leerCampoTexto("observaciones");

  if (obs.length > 200) {
    mostrarError("errorObs", "Máximo 200 caracteres.");
    return false;
  }

  limpiarError("errorObs");
  return true;
}

function validarTerminos() {
  const aceptado = leerCheckbox("terminos");

  if (!aceptado) {
    mostrarError("errorTerminos", "Debes aceptar los términos.");
    return false;
  }

  limpiarError("errorTerminos");
  return true;
}

// Validacion del formulario

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarApellidos(),
    validarEmail(),
    validarTelefono(),
    validarFecha(),
    validarProvincia(),
    validarPassword(),
    validarPassword2(),
    validarObservaciones(),
    validarTerminos()
  ];

  return validaciones.every(v => v === true);
}

// Errores

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


// Limpiar

function limpiarFormulario() {
  const errores = document.querySelectorAll(".error");
  errores.forEach(e => e.textContent = "");

  listaErrores.innerHTML = "<li>—</li>";
  actualizarEstadoGeneral("Pendiente de validación", false);
}


//Formulario 

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const esValido = validarFormulario();
  generarResumenErrores();

  if (esValido) {
    actualizarEstadoGeneral("Formulario correcto ✅", true);
  } else {
    actualizarEstadoGeneral("Formulario con errores ❌", false);
  }
});

document.getElementById("btnReset").addEventListener("click", function () {
  limpiarFormulario();
});





//Notas de regex = patrones
/* 
^ -> inicio de una cadena.
$ -> fin de la cadena.
(?=.*) lookahead positivo -> un patrón es precedido o seguido por otro patrón.
(?=.*[a-z]) -> debe tener  al menos una letra minuscula.
(?=.*[A-Z]) -> debe tener  al menos una letra mayuscula.
(?=.*\d) -> debe tener  almenos un digito.
\d -> digito entre 0-9.
(?=.*[\W_]) -> debe tener almenos un caracter especial.
\W -> Cualquier caracter que no sea letra o numero.
_ -> incluye al guion bajo como caracter especial.
. -> despues del lookahead cualquier caracter
{8,} -> Minimo 8 characteres


*/
