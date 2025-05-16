# FullStack MERN Project

Este proyecto es una aplicación de gestión de pacientes veterinarios construida con el stack MERN (MongoDB, Express, React, Node.js) y TypeScript.

## ¿Cómo funciona?
- **Backend**: Proporciona una API REST para gestionar veterinarios y pacientes. Incluye autenticación JWT, rutas protegidas y validación de datos.
- **Frontend**: Aplicación React con autenticación, registro, gestión de pacientes y perfil de usuario.

## Acceso a la aplicación
Puedes ingresar y probar la aplicación desde aquí con el siguiente usuario de prueba:

- **Correo:** prueba@prueba.com
- **Contraseña:** 123456
- Se demora en logear por el servidor unos segundos:
👉 [https://administrador-pacientes-w-mern.netlify.app/](https://administrador-pacientes-w-mern.netlify.app/)

## Instalación y ejecución local

### 1. Clona el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd <nombre_del_proyecto>
```

### 2. Instala dependencias
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../fronted
npm install
```

### 3. Configura las variables de entorno
Crea un archivo `.env` en la carpeta `backend` con las variables necesarias (por ejemplo, conexión a MongoDB y FRONTEND_URL).

### 4. Ejecuta el backend
```bash
cd backend
npm run dev
```

### 5. Ejecuta el frontend
```bash
cd ../fronted
npm run dev
```

## Funcionalidades principales
- Registro y confirmación de cuenta de veterinarios
- Login y recuperación de contraseña
- Gestión de pacientes (crear, editar, eliminar)
- Edición de perfil y cambio de contraseña
