// ==============================
// CAPTURA DEL DOM
// ==============================

const form = document.getElementById("formRegistro");
const estadoTexto = document.getElementById("estadoTexto");
const listaErrores = document.getElementById("listaErrores");

// ==============================
// FUNCIONES DE LECTURA
// ==============================

function leerCampoTexto(id) {
  return document.getElementById(id).value.trim();
}

function leerCheckbox(id) {
  return document.getElementById(id).checked;
}

function leerSelect(id) {
  return document.getElementById(id).value;
}

// ==============================
// FUNCIONES DE INTERFAZ
// ==============================

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

// ==============================
// VALIDACIONES INDIVIDUALES
// ==============================

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

  if (apellidos.length < 2 || apellidos.length > 60) {
    mostrarError("errorApellidos", "Apellidos inválidos.");
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

// ==============================
// VALIDACIÓN GENERAL
// ==============================

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

// ==============================
// RESUMEN DE ERRORES
// ==============================

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

// ==============================
// LIMPIAR FORMULARIO
// ==============================

function limpiarFormulario() {
  const errores = document.querySelectorAll(".error");
  errores.forEach(e => e.textContent = "");

  listaErrores.innerHTML = "<li>—</li>";
  actualizarEstadoGeneral("Pendiente de validación", false);
}

// ==============================
// EVENTOS
// ==============================

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
