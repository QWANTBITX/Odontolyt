# Guía de Despliegue y Ejecución - Odontolyt

Esta guía detalla los pasos necesarios para poner en marcha el sistema integral del consultorio odontológico **Odontolyt**.

## 📋 Requisitos Previos
- **Java 17** o superior.
- **Maven 3.6+**.
- **Node.js 18+** y **npm**.
- Una cuenta en **Supabase** (PostgreSQL).
- Claves de **Google reCAPTCHA v2** (se proporcionan claves de prueba por defecto).

---

## 🛠️ Paso 1: Configuración de la Base de Datos (Supabase)
1. Crea un nuevo proyecto en [Supabase](https://supabase.com/).
2. Ve al **SQL Editor** de Supabase y ejecuta el contenido de:
   - `database/schema.sql`: Crea las tablas y relaciones.
   - `database/seed.sql`: Inserta servicios básicos y el administrador inicial.
3. En la configuración de tu proyecto (*Settings > Database*), obtén tu **Host** y **Password**.

---

## ⚙️ Paso 2: Configuración del Backend (Spring Boot)
1. Abre el archivo `backend/src/main/resources/application.properties`.
2. Actualiza los siguientes campos:
   ```properties
   spring.datasource.url=jdbc:postgresql://db.[TU_ID].supabase.co:5432/postgres
   spring.datasource.password=[TU_PASSWORD]
   ```
3. (Opcional) Cambia la clave secreta del JWT:
   ```properties
   odontolyt.jwt.secret=[CADENA_ALEATORIA_LARGA]
   ```

---

## 💻 Paso 3: Configuración del Frontend (React)
1. Navega a la carpeta `frontend`.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Verifica que el componente `Signup.jsx` y `Login.jsx` usen tu **Site Key** de reCAPTCHA (por defecto tiene la de prueba).

---

## 🚀 Paso 4: Ejecución del Sistema

### Iniciar Backend
```bash
cd backend
mvn spring-boot:run
```
El servidor estará en: `http://localhost:8080`

### Iniciar Frontend
```bash
cd frontend
npm run dev
```
La web estará en: `http://localhost:5173`

---

## 🔐 Credenciales de Prueba
Para tu primera entrada al sistema, usa:
- **Usuario**: `admin@odontolyt.com`
- **Contraseña**: `admin123`
- **Rol**: Administrador

---

## ✅ Verificación de Seguridad
- **reCAPTCHA**: El sistema no permitirá el registro ni el login sin completar el captcha.
- **JWT**: Las rutas de los Dashboards están protegidas. Si intentas acceder sin token, serás redirigido al Login.
- **Contraseñas**: El registro valida que la contraseña tenga mínimo 5 caracteres y no sea solo letras.

---
*Desarrollado por Harvey Santiago Gutierrez Hernandez - 2026*
