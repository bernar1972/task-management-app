# 🔧 Update Production URLs Script

## 📝 **Instrucciones para actualizar URLs de producción**

### **Cuando tengas tu URL de Render:**

1. **Copiar tu URL real de Render** (ej: `https://task-management-abc123.onrender.com`)

2. **Actualizar config.service.ts:**
   - Archivo: `frontend/src/app/services/config.service.ts`  
   - Líneas 14 y 22: Cambiar `https://task-management-api.onrender.com`
   - Por tu URL real de Render

3. **Actualizar CORS en backend:**
   - Archivo: `backend/TaskAPI/Program.cs`
   - Agregar tu URL de Netlify al array `allowedOrigins`

4. **Hacer commit y push:**
```bash
git add .
git commit -m "Update production URLs for Render and Netlify"
git push
```

5. **Auto-redeploy:**
   - Render se actualizará automáticamente
   - Netlify se actualizará automáticamente

---

## 🎯 **URLs Template:**

```typescript
// config.service.ts - Actualizar estas líneas:
return 'https://TU-URL-REAL-DE-RENDER.onrender.com/api/tasks';
```

```csharp
// Program.cs - Actualizar allowedOrigins:
: new[] { 
    "https://TU-URL-DE-NETLIFY.netlify.app",
    "http://localhost:4200"
};
```

---

## ✅ **Verificar funcionamiento:**

1. **Frontend carga**: Tu URL de Netlify abre la aplicación
2. **Backend responde**: Tu URL de Render + `/api/tasks` devuelve JSON  
3. **Comunicación**: Frontend puede crear/editar/eliminar tareas
4. **CORS OK**: No hay errores en consola del navegador