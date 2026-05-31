// VARIABLES DE AUTENTICACIÓN
const CREDENCIALES_VALIDAS = {
    usuario: "admin",
    contrasena: "1234"
};

let usuarioActual = null;
let tasks = [];
let filtroActual = "todas";

// FUNCIONES DE AUTENTICACIÓN
function verificarSesion() {
    const sesion = localStorage.getItem("usuarioSesion");
    if (sesion) {
        usuarioActual = sesion;
        mostrarApp();
    } else {
        mostrarLogin();
    }
}

function mostrarLogin() {
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("appContainer").style.display = "none";
}

function mostrarApp() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("appContainer").style.display = "block";
    document.getElementById("usuarioSpan").textContent = `Bienvenido, ${usuarioActual}`;
}

function iniciarSesion(usuario, contrasena) {
    if (usuario === CREDENCIALES_VALIDAS.usuario && contrasena === CREDENCIALES_VALIDAS.contrasena) {
        usuarioActual = usuario;
        localStorage.setItem("usuarioSesion", usuario);
        mostrarApp();
        return true;
    }
    return false;
}

function cerrarSesion() {
    usuarioActual = null;
    localStorage.removeItem("usuarioSesion");
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").textContent = "";
    mostrarLogin();
}

// Valida el texto ingresado por el usuario
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
function crearTarea(texto, descripcion, fecha) {
    return {
        id: Date.now(),
        texto: texto,
        descripcion: descripcion || "Sin descripción",
        fecha: fecha || "Sin fecha",
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
//Renderiza las tareas en pantalla
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
        <div class="tarea-contenido">
            <span class="tarea-texto">${tarea.texto}</span>
            <div class="tarea-detalles">
                <p class="tarea-descripcion">${tarea.descripcion}</p>
                <p class="tarea-fecha"><i class="fas fa-calendar"></i> ${tarea.fecha}</p>
            </div>
        </div>

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
// Marca una tarea como completada o pendiente
function completarTarea(id) {
    tasks = tasks.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
    );

    guardarDatos();
    renderizarTareas();
}
// Elimina una tarea según su id
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
    const descripcion = document.getElementById("taskDescription");
    const fecha = document.getElementById("taskDate");
    const error = document.getElementById("error");

    const texto = input.value.trim();
    //limpieza (seguridad basica)
    const limpio = texto.replace(/</g, "").replace(/>/g, "");
    const errorMsg = validarTarea(limpio);

    if (errorMsg) {
        error.textContent = errorMsg;
        return;
    }

    error.textContent = "";

    const nueva = crearTarea(limpio, descripcion.value, fecha.value); //usar texto limpio

    tasks.push(nueva);

    guardarDatos();

    input.value = "";
    descripcion.value = "";
    fecha.value = "";

    renderizarTareas();
});

// EVENT LISTENERS DE AUTENTICACIÓN
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById("password").value;
    const errorElement = document.getElementById("loginError");
    
    if (iniciarSesion(usuario, contrasena)) {
        cargarDatos();
        renderizarTareas();
    } else {
        errorElement.textContent = "Usuario o contraseña incorrectos";
    }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
    cerrarSesion();
});

// INICIALIZAR LA APLICACIÓN
verificarSesion();
cargarDatos();
renderizarTareas();
