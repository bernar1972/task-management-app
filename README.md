# Gestor de Tareas - Angular + .NET Core

Una aplicación completa de gestión de tareas (CRUD) desarrollada con Angular para el frontend y .NET Core Web API para el backend.

## 🚀 Características

- ✅ **Frontend Angular** con componentes reactivos
- 🔧 **Backend .NET Core Web API** con Entity Framework
- 📱 **Diseño responsive** y amigable al usuario
- 🔄 **Operaciones CRUD completas** (Create, Read, Update, Delete)
- 🎨 **Interfaz moderna** con CSS personalizado
- 🗄️ **Base de datos en memoria** para desarrollo rápido

## 📋 Funcionalidades

- **Crear tareas** con título y descripción
- **Listar todas las tareas** ordenadas por fecha de creación
- **Editar tareas** existentes
- **Marcar tareas como completadas**
- **Eliminar tareas** con confirmación
- **Validación de formularios**
- **Manejo de errores** y estados de carga

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 18+** con TypeScript
- **Angular Forms** para manejo de formularios
- **HttpClient** para comunicación con la API
- **CSS personalizado** para estilos

### Backend
- **.NET Core 8+** Web API
- **Entity Framework Core** con InMemory Database
- **CORS** configurado para desarrollo
- **OpenAPI/Swagger** para documentación

## 🏗️ Estructura del Proyecto

```
angulardeployed/
├── backend/
│   └── TaskAPI/
│       ├── Controllers/
│       │   └── TasksController.cs
│       ├── Data/
│       │   └── TaskContext.cs
│       ├── Models/
│       │   └── TaskItem.cs
│       └── Program.cs
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── models/
│       │   │   └── task.model.ts
│       │   ├── services/
│       │   │   └── task.service.ts
│       │   ├── app.ts
│       │   ├── app.html
│       │   └── app.css
│       └── ...
└── README.md
```

## 🚦 Cómo Ejecutar la Aplicación

### Prerequisitos
- **Node.js** (versión 18 o superior)
- **.NET SDK** (versión 8 o superior)
- **npm** o **yarn**

### Opción 1: Ejecutar con VS Code Tasks (Recomendado)

1. Abre el proyecto en VS Code
2. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
3. Escribe "Tasks: Run Task"
4. Selecciona **"Start Both Servers"**

Esto iniciará automáticamente tanto el backend como el frontend.

### Opción 2: Ejecutar Manualmente

#### 1. Iniciar el Backend (.NET API)
```bash
cd backend/TaskAPI
dotnet run
```
La API estará disponible en: `http://localhost:5000`

#### 2. Iniciar el Frontend (Angular)
```bash
cd frontend
npm start
```
La aplicación estará disponible en: `http://localhost:4200`

### 🌐 URLs de Acceso
- **Frontend (Dev)**: http://localhost:4200
- **Backend API (Dev)**: http://localhost:5226
- **Producción**: Ver [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) para deploy en Railway + Netlify

## 📡 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/{id}` | Obtener una tarea por ID |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/{id}` | Actualizar una tarea |
| DELETE | `/api/tasks/{id}` | Eliminar una tarea |

## 🎯 Cómo Usar la Aplicación

1. **Crear una tarea**: Completa el formulario "Nueva Tarea" y haz clic en "Crear Tarea"
2. **Ver tareas**: Todas las tareas aparecen en la lista principal
3. **Editar tarea**: Haz clic en "Editar" junto a cualquier tarea
4. **Completar tarea**: Haz clic en "Marcar como completada"
5. **Eliminar tarea**: Haz clic en "Eliminar" (aparecerá confirmación)

## 🌍 Deploy Gratuito

### Opciones Recomendadas

#### Frontend (Angular)
1. **Netlify** (Recomendado)
   - Build command: `npm run build`
   - Publish directory: `dist/task-app`
   - URL: Gratis con subdominio personalizado

2. **Vercel**
   - Auto-deploy desde GitHub
   - Configuración automática para Angular

3. **GitHub Pages**
   - Para sitios estáticos
   - Requiere configuración de Angular para rutas

#### Backend (.NET Core)
1. **Railway** (Recomendado para .NET)
   - Deploy gratuito desde GitHub
   - Base de datos PostgreSQL incluida
   - URL: Variable, pero estable

2. **Heroku** (Con limitaciones)
   - Buildpack para .NET Core
   - Base de datos PostgreSQL gratuita limitada

3. **Azure App Service** (Plan gratuito)
   - Hasta 1GB de almacenamiento
   - Limitaciones de tiempo de ejecución

### Configuración para Producción

#### 1. Actualizar URLs en el Frontend
En `task.service.ts`, cambiar:
```typescript
private apiUrl = 'https://tu-api-en-produccion.com/api/tasks';
```

#### 2. Configurar CORS en el Backend
En `Program.cs`, actualizar:
```csharp
policy.WithOrigins("https://tu-frontend-en-produccion.com")
```

#### 3. Cambiar a Base de Datos Real
Para producción, reemplazar InMemoryDatabase con PostgreSQL o SQL Server.

## 🔧 Personalización y Extensiones

### Agregar Nuevos Campos
1. Actualizar el modelo `TaskItem.cs`
2. Actualizar la interfaz `task.model.ts`
3. Modificar el formulario en `app.html`

### Cambiar Estilos
Editar `app.css` para personalizar la apariencia.

### Agregar Autenticación
1. Implementar JWT en el backend
2. Agregar guards en Angular
3. Crear componentes de login/registro

## 🐛 Solución de Problemas

### Error "CORS policy"
- Verificar que el backend esté ejecutándose en el puerto correcto
- Confirmar configuración CORS en `Program.cs`

### Error "Cannot connect to API"
- Verificar que ambos servidores estén ejecutándose
- Confirmar URLs en `task.service.ts`

### Errores de compilación TypeScript
- Ejecutar `npm install` en el directorio frontend
- Verificar versión de Node.js (>= 18)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o problemas, por favor abre un issue en el repositorio.

---

¡Disfruta construyendo con Angular y .NET Core! 🚀