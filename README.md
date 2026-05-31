# To-Do App PRO

Una aplicación web de gestión de tareas moderna y responsive con sistema de autenticación integrado. Gestiona tus tareas pendientes de forma eficiente con una interfaz intuitiva y atractiva.

## Características

- **Sistema de autenticación** - Login seguro con sesiones persistentes
- **Gestión de tareas** - Crear, editar, marcar completadas y eliminar tareas
- **Interfaz moderna** - Diseño responsive con Bootstrap 5
- **Almacenamiento local** - Sincronización automática con localStorage
- **Mobile friendly** - Funciona perfectamente en dispositivos móviles
- **Notificaciones visuales** - Feedback instantáneo en acciones del usuario

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Lógica sin dependencias externas
- **Bootstrap 5** - Framework CSS responsive
- **Font Awesome 6** - Iconos vectoriales
- **LocalStorage API** - Almacenamiento en navegador

### Inicio de Sesión
- **Usuario:** `admin`
- **Contraseña:** `1234`

### Operaciones Principales
1. **Agregar tarea** - Escribe en el campo de entrada y presiona Enter
2. **Marcar completada** - Haz clic en el checkbox de la tarea
3. **Eliminar tarea** - Haz clic en el botón de eliminación
4. **Filtrar tareas** - Usa los filtros disponibles (Todas, Pendientes, Completadas)
5. **Cerrar sesión** - Haz clic en el botón "Cerrar Sesión"

## Estructura del Proyecto

todo-app-pro/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── js/
│   └── main.js         # Lógica principal
├── README.md           # Este archivo
```

## Características Técnicas

### Autenticación
- Validación de credenciales
- Almacenamiento de sesión en localStorage
- Cierre de sesión automático al cerrar navegador

### Gestión de Tareas
- Persistencia de datos con localStorage
- Interfaz reactiva sin necesidad de refresh
- Filtrado dinámico de tareas

### Seguridad
- Validación en cliente
- Protección de rutas
- Limpieza de sesiones

## Mejoras Futuras

- [ ] Backend con autenticación real
- [ ] Base de datos para persistencia
- [ ] Sincronización entre dispositivos
- [ ] Temas oscuro/claro
- [ ] Exportación de tareas
- [ ] Recordatorios y notificaciones


