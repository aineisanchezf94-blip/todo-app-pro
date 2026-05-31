let tasks = [];
let filtroActual = "todas";
``
function validarTarea(texto) {
    try {
        if (!texto || texto.trim() === "") {
            return "Campo obligatorio";
        }

        if (texto.length < 3) {
            return "Mínimo 3 caracteres";
        }

        if (texto.length > 50) {
            return "Máximo 50 caracteres";
        }

        return null;
    } catch (error) {
        return "Error inesperado";
    }
}
function crearTarea(texto) {
    return {
        id: Date.now(),
        texto: texto,
        detalle: "Sin detalles",
        completada: false
    };
}
function guardarDatos() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function cargarDatos() {
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks = JSON.parse(data);
    }
}
function renderizarTareas() {

    const lista = document.getElementById("taskList");
    lista.innerHTML = "";

    let tareasFiltradas = tasks;

    if (filtroActual === "pendientes") {
        tareasFiltradas = tasks.filter(t => !t.completada);
    }

    if (filtroActual === "completadas") {
        tareasFiltradas = tasks.filter(t => t.completada);
    }

    tareasFiltradas.forEach(tarea => {

        const li = document.createElement("li");
        li.className = "tarea-item";

        li.innerHTML = `
        <span class="tarea-texto">${tarea.texto}</span>

        <div class="tarea-botones">
            <button class="btn-icon check">
                <i class="fas fa-check"></i>
            </button>
            
            <button class="btn-icon delete">
                <i class="fas fa-times"></i>
            </button>
        </div>
        `;

        if (tarea.completada) {
            li.classList.add("done");
        }

        const btnCheck = li.querySelector(".check");
        btnCheck.onclick = () => completarTarea(tarea.id);

        const btnDelete = li.querySelector(".delete");
        btnDelete.onclick = () => eliminarTarea(tarea.id);

        lista.appendChild(li);
    });
}

function completarTarea(id) {
    tasks = tasks.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
    );

    guardarDatos();
    renderizarTareas();
}
function eliminarTarea(id) {
    tasks = tasks.filter(t => t.id !== id);

    guardarDatos();
    renderizarTareas();
}
function filtrar(tipo) {
    filtroActual = tipo;
    renderizarTareas();
}
document.getElementById("taskForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("taskInput");
    const error = document.getElementById("error");

    const texto = input.value;

    const errorMsg = validarTarea(texto);

    if (errorMsg) {
        error.textContent = errorMsg;
        return;
    }

    error.textContent = "";

    const nueva = crearTarea(texto);

    tasks.push(nueva);

    guardarDatos();

    input.value = "";

    renderizarTareas();
});
cargarDatos();
renderizarTareas();