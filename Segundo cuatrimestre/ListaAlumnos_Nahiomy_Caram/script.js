//Capturar elementos del HTML
const inputTarea = document.getElementById("tarea");
const bntAgregar = document.getElementById("btnAgregar");
const btnVaciar = document.getElementById("btnVaciar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const AlumnosPresente = document.getElementById("AlumnosPresente");
const AlumnosAusentes = document.getElementById("AlumnosAusentes");


//Creación función tarea
function obtenerTextoTarea() {
    return inputTarea.value.trim();
};


//Creación función limpiar el input
function limpiarInput() {
    inputTarea.value = "";
};


function agregarTareaAlDOM(texto) {
    const li = document.createElement("li");
    li.classList.add("tarea");

    //Hacer que las tareas tengan estilos del CSS
    const span = document.createElement("span");
    span.textContent = texto;

    //Añadir Botones y darles clases
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea");
    

    const btnAsisten = document.createElement("button");
    btnAsisten.textContent = "Asiste";
    btnAsisten.classList.add("btn-Asiste");

    const btnAusentes = document.createElement("button");
    btnAusentes.textContent = "No asiste";
    btnAusentes.classList.add("btn-Ausente");

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-Eliminar");



    
    btnAsisten.addEventListener("click",
        function() {
            btnAsisten.classList.toggle("btn-Asiste-activo");
            btnAusentes.classList.remove("btn-Ausente-activo")
            li.classList.add("Asiste");
            actualizarContadores();
        }
    );
    btnAusentes.addEventListener("click", 
        function () {
            btnAsisten.classList.remove("btn-Asiste-activo");
            btnAusentes.classList.toggle("btn-Ausente-activo")
            li.classList.remove("Asiste");
            actualizarContadores();
    });
    btnEliminar.addEventListener("click",
        function () {
            li.remove();
            actualizarContadores();
        }
    );

    divAcciones.appendChild(btnAsisten);
    divAcciones.appendChild(btnAusentes)
    divAcciones.appendChild(btnEliminar);


    li.appendChild(span);
    li.appendChild(divAcciones);

    listaTareas.appendChild(li);

}

//Obtener tarea completa event listener
bntAgregar.addEventListener("click",
    function() {
        const texto = obtenerTextoTarea();

        if (texto === ""){
            return;
        }

        agregarTareaAlDOM(texto);
        actualizarContadores();
        limpiarInput();
    }
);

/*Creación función contar tareas
function actualizarTotal() {
    const numeroTareas = listaTareas.children.length;
    totalTareas.textContent = numeroTareas;
};*/


//Actualizar todos los contadores de tareas
function actualizarContadores() {
    const tareas = listaTareas.children.length;
    const Asiste = document.querySelectorAll(".tarea.Asiste").length;
    const Ausentes = tareas - Asiste;

    totalTareas.textContent = tareas;
    AlumnosPresente.textContent = Asiste;
    AlumnosAusentes.textContent = Ausentes;
};

//Creamos la función de vaciar lista para llamarla después
function vaciarLista() {
    listaTareas.innerHTML = "";
    actualizarContadores();
};

//Declaramos el event listener para llamar a la función que hemos creado justo encima
btnVaciar.addEventListener("click",
    function () {
        vaciarLista();
    }
);






























