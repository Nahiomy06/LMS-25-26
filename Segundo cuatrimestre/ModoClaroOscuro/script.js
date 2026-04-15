const botonTema = document.getElementById("toggleTema");
const body = document.body;


botonTema.addEventListener("click", () => {
    body.classList.toggle("oscuro");

    if (body.classList.contains("oscuro")){
        botonTema.textContent = "cambiar a modo claro"
    }else{
        botonTema.textContent = "cambiar a modo oscuro"
    }
});