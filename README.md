# To-Do App PRO

Una aplicación web de gestión de tareas moderna y responsive con sistema de autenticación integrado. Gestiona tus tareas pendientes de forma eficiente con una interfaz intuitiva y atractiva.

## ✨ Características

- 🔐 **Sistema de autenticación** - Login seguro con sesiones persistentes
- ✅ **Gestión de tareas** - Crear, editar, marcar completadas y eliminar tareas
- 🎨 **Interfaz moderna** - Diseño responsive con Bootstrap 5
- 💾 **Almacenamiento local** - Sincronización automática con localStorage
- 📱 **Mobile friendly** - Funciona perfectamente en dispositivos móviles
- 🔔 **Notificaciones visuales** - Feedback instantáneo en acciones del usuario
- 🌐 **Soporte multiidioma** - Interfaz en español

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript Vanilla** - Lógica sin dependencias externas
- **Bootstrap 5** - Framework CSS responsive
- **Font Awesome 6** - Iconos vectoriales
- **LocalStorage API** - Almacenamiento en navegador

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/todo-app-pro.git
   cd todo-app-pro
   ```

2. **Abre la aplicación**
   - Opción 1: Abre el archivo `index.html` directamente en tu navegador
   - Opción 2: Usa un servidor local:
     ```bash
     python -m http.server 8000
     # Luego accede a http://localhost:8000
     ```

## 📖 Uso

### Inicio de Sesión
- **Usuario:** `admin`
- **Contraseña:** `1234`

### Operaciones Principales
1. **Agregar tarea** - Escribe en el campo de entrada y presiona Enter
2. **Marcar completada** - Haz clic en el checkbox de la tarea
3. **Eliminar tarea** - Haz clic en el botón de eliminación
4. **Filtrar tareas** - Usa los filtros disponibles (Todas, Pendientes, Completadas)
5. **Cerrar sesión** - Haz clic en el botón "Cerrar Sesión"

## 📁 Estructura del Proyecto

```
todo-app-pro/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── js/
│   └── main.js         # Lógica principal
├── README.md           # Este archivo
└── LICENSE             # Licencia del proyecto
```

## 🔑 Características Técnicas

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

## 🎯 Mejoras Futuras

- [ ] Backend con autenticación real
- [ ] Base de datos para persistencia
- [ ] Sincronización entre dispositivos
- [ ] Temas oscuro/claro
- [ ] Exportación de tareas
- [ ] Recordatorios y notificaciones

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## 👨‍💻 Autor

Desarrollado como una aplicación educativa para practicar JavaScript Vanilla y desarrollo web frontend.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios significativos, abre un issue primero para discutir los cambios propuestos.

---

⭐ Si este proyecto te fue útil, considérate dejar una estrella en GitHub.
