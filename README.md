# ☕ Zenith Café - Full Stack Mood Experience

¡Bienvenido a **Zenith Café**! Esta es una aplicación Full Stack diseñada para ofrecer una experiencia personalizada al usuario, recomendando productos de café de especialidad basados en su estado de ánimo actual.

Este proyecto demuestra la implementación de un **monorepo**, la gestión de bases de datos relacionales y el despliegue de microservicios en la nube.

## 🚀 Demo En Vivo
- **Frontend (Vercel):** [https://diego-avila-yeyo-github-io.vercel.app/]
- **API Backend (Railway):** [https://vivacious-prosperity-production.up.railway.app/api]

---

## 🛠️ Stack Tecnológico

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** para un diseño moderno y responsive.
- **Lucide React** para iconografía.

### Backend
- **Node.js & Express** para la API REST.
- **Prisma ORM** para la gestión de datos.
- **PostgreSQL** como base de datos relacional.
- **Middlewares de Seguridad:** Helmet, CORS y Rate Limiting.

---

## 🏗️ Arquitectura del Proyecto

El proyecto utiliza una arquitectura de **Monorepo** separada por responsabilidades:

- `/frontend`: SPA optimizada para el usuario final, comunicándose mediante variables de entorno con el servidor.
- `/backend`: Servidor Express que gestiona la lógica de negocio y las consultas a la base de datos a través de Prisma.

---

## 🧠 Retos Técnicos y Aprendizajes

Durante el desarrollo y despliegue, se resolvieron desafíos clave:

1. **Gestión de Entornos Cloud:** Configuración de variables de entorno específicas para entornos de producción en Railway y Vercel.
2. **Sincronización de Base de Datos:** Uso de Prisma para el modelado de datos y el proceso de *seeding* automático para poblar productos y tags.
3. **Resolución de CORS y Redes:** Configuración de túneles de acceso (TCP Proxy) y protocolos HTTPS para asegurar la comunicación fluida entre dominios.

---

## 💻 Instalación Local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/DiegoAvila-yeyo/DiegoAvila-yeyo.github.io.git
