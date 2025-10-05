# 🚂 Railway Deployment Guide - .NET Core Backend

## ✅ Archivos creados para Railway:
- `Dockerfile` - Para build con Docker
- `nixpacks.toml` - Para build con Nixpacks  
- `railway.json` - Configuración específica de Railway

## 🚀 Pasos para deployar en Railway:

### **Método 1: Usando el Root Directory**
1. **Ir a [Railway.app](https://railway.app/)**
2. **Login** con GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Seleccionar**: `bernar1972/task-management-app`
5. **Configuración importante**:
   - **Root Directory**: `backend/TaskAPI`
   - **Build Command**: `dotnet restore && dotnet publish -c Release -o out`
   - **Start Command**: `dotnet out/TaskAPI.dll`

### **Método 2: Variables de entorno en Railway**
Agregar estas variables en Railway Dashboard:
```
PORT=5000
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://0.0.0.0:$PORT
```

### **Método 3: Si sigue fallando**
1. **Fork** el repositorio
2. **Crear nueva rama** solo con el backend:
   ```bash
   git subtree push --prefix=backend/TaskAPI origin backend-only
   ```
3. **Deployar** desde esa rama

## 🔧 Solución al error "Script start.sh not found":

**Causa**: Railway no detecta automáticamente .NET Core cuando está en subdirectorio.

**Solución**: Los archivos creados (`Dockerfile`, `nixpacks.toml`) le dicen a Railway cómo manejar el proyecto.

## 📋 Checklist de deployment:

- [x] ✅ Dockerfile creado
- [x] ✅ nixpacks.toml creado  
- [x] ✅ Program.cs actualizado para puerto dinámico
- [ ] ⏳ Configurar Root Directory en Railway: `backend/TaskAPI`
- [ ] ⏳ Verificar variables de entorno
- [ ] ⏳ Deploy y obtener URL

## 🌐 Después del deploy exitoso:

1. **Copiar la URL** que Railway te dé (ej: `https://taskapi-production-abc123.railway.app`)
2. **Actualizar frontend**: En `config.service.ts` cambiar:
   ```typescript
   return 'https://TU-URL-DE-RAILWAY.railway.app/api/tasks';
   ```
3. **Actualizar CORS**: En `Program.cs` agregar tu URL de Netlify/Cloudflare

## 🆘 Si continúa el problema:

**Opción alternativa - Render.com**:
- Render detecta .NET Core automáticamente
- También gratuito
- Menos configuración requerida

**O crear un repositorio separado solo para el backend**.