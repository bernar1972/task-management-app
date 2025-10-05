# 🌐 Netlify Deployment Guide - Angular Frontend

## 🚀 **Guía Paso a Paso para Netlify**

### **Prerrequisitos completados:**
- ✅ Proyecto Angular compilando correctamente
- ✅ `netlify.toml` configurado
- ✅ Proyecto subido a GitHub
- ✅ Build settings optimizados

---

## 📋 **PASO 1: Crear cuenta en Netlify**

1. **Ir a**: https://netlify.com/
2. **Sign up** con GitHub (recomendado)
   - Autoriza Netlify para acceder a tus repositorios
   - Esto facilitará el auto-deploy

---

## 🔗 **PASO 2: Conectar repositorio**

1. **Dashboard de Netlify** → **"New site from Git"**
2. **Choose Git Provider** → **"GitHub"**
3. **Authorize Netlify** (si no lo hiciste antes)
4. **Pick a repository** → Buscar: `task-management-app`
5. **Select** `bernar1972/task-management-app`

---

## ⚙️ **PASO 3: Configurar build settings**

### **Branch to deploy:**
```
Branch: main
```

### **Basic build settings:**
```
Base directory: frontend
Build command: npm ci && npm run build  
Publish directory: frontend/dist/task-app
```

### **Advanced build settings (opcional):**
```
Environment variables:
NODE_VERSION: 18
NPM_VERSION: 9
```

---

## 🚀 **PASO 4: Deploy**

1. **Review settings** (verificar que todo esté correcto)
2. **Deploy site** (click el botón)
3. **⏳ Esperar** 2-4 minutos para el primer deploy
4. **✅ Obtener URL**: Algo como `https://incredible-site-name.netlify.app`

---

## 🔧 **PASO 5: Configurar dominio personalizado (opcional)**

1. **Site settings** → **Domain management**
2. **Change site name** → Elegir algo como: `task-manager-bernar`
3. **Nueva URL**: `https://task-manager-bernar.netlify.app`

---

## 🔄 **PASO 6: Auto-deploy configurado**

Netlify automáticamente:
- ✅ Detecta cambios en tu repositorio GitHub
- ✅ Ejecuta build automáticamente
- ✅ Despliega la nueva versión
- ✅ Notifica por email del resultado

---

## 🎯 **PASO 7: Actualizar URLs para producción**

### **Una vez que tengas ambas URLs:**

1. **Backend en Render**: `https://task-management-api.onrender.com`
2. **Frontend en Netlify**: `https://task-manager-bernar.netlify.app`

### **Actualizar config.service.ts:**
```typescript
// En producción - Render URL
return 'https://task-management-api.onrender.com/api/tasks';
```

### **Actualizar CORS en backend:**
```csharp
: new[] { 
    "https://task-manager-bernar.netlify.app", // Tu URL de Netlify
    "http://localhost:4200" // Development
};
```

---

## ✅ **Checklist de deployment**

- [ ] ⏳ Crear cuenta en Netlify
- [ ] ⏳ Conectar repositorio GitHub
- [ ] ⏳ Configurar build settings
- [ ] ⏳ Hacer primer deploy
- [ ] ⏳ Obtener URL de Netlify
- [ ] ⏳ Actualizar URLs en código
- [ ] ⏳ Push cambios para auto-redeploy
- [ ] ⏳ Verificar que frontend y backend se comuniquen

---

## 🎊 **URLs esperadas:**

- **🎯 Frontend**: `https://task-manager-bernar.netlify.app`
- **🔧 Backend**: `https://task-management-api.onrender.com`
- **📊 API**: `https://task-management-api.onrender.com/api/tasks`

---

## 🐛 **Troubleshooting**

### **Build falla:**
- Verificar que `netlify.toml` esté en la raíz del proyecto
- Comprobar que `Base directory: frontend` esté configurado
- Revisar los logs en Netlify dashboard

### **Sitio carga pero no muestra datos:**
- Verificar URL del backend en `config.service.ts`
- Comprobar que backend esté online en Render
- Revisar CORS configuration

### **Error 404 en rutas:**
- El `netlify.toml` ya incluye redirects para Angular routing
- Verificar que `[[redirects]]` esté configurado correctamente

---

## 🎉 **¡Listo!**

Tu aplicación Angular estará disponible globalmente con:
- ✅ **HTTPS automático**
- ✅ **CDN global** (muy rápido)
- ✅ **Auto-deploy** desde GitHub
- ✅ **0$ costo** mensual
- ✅ **99.9% uptime**