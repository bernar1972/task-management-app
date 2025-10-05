# 🚀 Guía de Deployment - Railway + Netlify

## 📋 **Preparativos Completados**

✅ Archivos de configuración creados
✅ CORS configurado para producción  
✅ Puerto dinámico para Railway
✅ URLs dinámicas en Angular
✅ Archivos .gitignore y netlify.toml

---

## 🚂 **PARTE 1: Deployment Backend en Railway**

### **Paso 1: Preparar repositorio**
```bash
# Inicializar git (si no está hecho)
git init
git add .
git commit -m "Initial commit - Task Management App"

# Subir a GitHub
# 1. Crea un repositorio en GitHub (ej: task-management-app)
# 2. Conecta tu repositorio local:
git remote add origin https://github.com/tu-usuario/task-management-app.git
git branch -M main
git push -u origin main
```

### **Paso 2: Deployment en Railway**
1. **Ir a [Railway.app](https://railway.app/)**
2. **Registrarse/Login** con GitHub
3. **Nuevo Proyecto**: Click "New Project"
4. **Deploy from GitHub repo**: Selecciona tu repositorio
5. **Configurar el servicio**:
   - Railway detectará automáticamente .NET
   - Root Directory: `backend/TaskAPI`
   - Build Command: `dotnet publish -c Release -o out`
   - Start Command: `dotnet out/TaskAPI.dll`

### **Paso 3: Configuración en Railway**
```bash
# Variables de entorno a agregar en Railway:
PORT=5000
ASPNETCORE_ENVIRONMENT=Production
```

### **Paso 4: Obtener URL del backend**
- Después del deploy, Railway te dará una URL como:
- `https://tu-proyecto-abc123.railway.app`
- **¡COPIA ESTA URL!** La necesitarás para el frontend

---

## 🌐 **PARTE 2: Deployment Frontend en Netlify**

### **Paso 1: Actualizar URL del backend**
1. **Abrir**: `frontend/src/app/services/config.service.ts`
2. **Reemplazar** esta línea:
```typescript
return 'https://tu-api-backend.railway.app/api/tasks';
```
**Por tu URL real de Railway**:
```typescript
return 'https://TU-URL-DE-RAILWAY.railway.app/api/tasks';
```

### **Paso 2: Actualizar CORS en backend**
1. **Abrir**: `backend/TaskAPI/Program.cs`
2. **Reemplazar** esta línea:
```csharp
: new[] { "https://tu-app-frontend.netlify.app", "http://localhost:4200" };
```
**Por tu futura URL de Netlify** (o déjala así por ahora)

### **Paso 3: Deployment en Netlify**
1. **Ir a [Netlify.com](https://www.netlify.com/)**
2. **Registrarse/Login** con GitHub  
3. **New site from Git**: Click este botón
4. **Conectar GitHub**: Autorizar Netlify
5. **Seleccionar repositorio**: Elige tu repo
6. **Configurar build**:
   - Base directory: `frontend`
   - Build command: `npm run build` 
   - Publish directory: `dist/task-app`
7. **Deploy site**: Click para iniciar

### **Paso 4: Configurar dominio personalizado (Opcional)**
- En Netlify, ve a "Domain settings"
- Cambia el nombre del sitio por algo más amigable
- Ejemplo: `task-manager-tunom.netlify.app`

---

## 🔄 **PARTE 3: Configuración Final**

### **Actualizar URLs cruzadas**

#### **En el Frontend** (`config.service.ts`):
```typescript
return 'https://TU-URL-RAILWAY.railway.app/api/tasks';
```

#### **En el Backend** (`Program.cs`):
```csharp
: new[] { "https://TU-URL-NETLIFY.netlify.app", "http://localhost:4200" };
```

### **Hacer commit y redeploy**:
```bash
git add .
git commit -m "Update URLs for production"
git push origin main
```

**Railway y Netlify se actualizarán automáticamente** 🎉

---

## ✅ **Verificación Final**

1. **Backend**: Visita `https://tu-railway-url.railway.app/api/tasks`
   - Deberías ver un JSON con las tareas de ejemplo

2. **Frontend**: Visita tu URL de Netlify  
   - La aplicación debería cargar y mostrar las tareas
   - Prueba crear, editar y eliminar tareas

---

## 🐛 **Solución de Problemas Comunes**

### **Error CORS**:
```
Access to XMLHttpRequest at 'railway-url' from origin 'netlify-url' has been blocked
```
**Solución**: Verificar que las URLs en `Program.cs` sean exactas

### **Error 404 en rutas de Angular**:
**Solución**: El archivo `netlify.toml` ya está configurado para esto

### **Error de build en Railway**:
**Solución**: Verificar que el directorio raíz sea `backend/TaskAPI`

### **Frontend no conecta al backend**:
**Solución**: Verificar URL en `config.service.ts` y que termine en `/api/tasks`

---

## 💡 **URLs de Ejemplo Final**

- **Backend**: `https://task-api-production-abc123.railway.app`
- **Frontend**: `https://task-manager-app.netlify.app`
- **API Endpoint**: `https://task-api-production-abc123.railway.app/api/tasks`

---

## 🎉 **¡Listo!**

Tu aplicación estará disponible **24/7 gratis** en internet. 

**Costos**: $0 (Railway y Netlify tienen planes gratuitos generosos)

**Próximos pasos opcionales**:
- Configurar dominio personalizado
- Agregar SSL (automático en ambas plataformas)
- Configurar CI/CD para auto-deploy
- Migrar a base de datos PostgreSQL en Railway