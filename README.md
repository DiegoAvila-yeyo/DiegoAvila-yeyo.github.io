# ☕ Zenith Café - Full Stack Mood Experience

Welcome to **Zenith Café**! This is a Full Stack application designed to provide a personalized user experience by recommending specialty coffee products based on the user's current mood.

This project demonstrates a **monorepo** implementation, relational database management, and cloud microservices deployment.

## 🚀 Live Demo
- **Frontend (Vercel):** [https://diego-avila-yeyo-github-io.vercel.app/]
- **Backend API (Railway):** [https://vivacious-prosperity-production.up.railway.app/api]

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** for modern, responsive styling.
- **Lucide React** for clean iconography.

### Backend
- **Node.js & Express** for the REST API.
- **Prisma ORM** for efficient data management.
- **PostgreSQL** as the relational database.
- **Security Middlewares:** Helmet, CORS, and Rate Limiting.

---

## 🏗️ Project Architecture

The project follows a **Monorepo** architecture with clear separation of concerns:

- `/frontend`: An optimized SPA that communicates with the server via environment variables.
- `/backend`: An Express server managing business logic and database queries through Prisma.

---

## 🧠 Technical Challenges & Key Learnings

Building and deploying this project involved overcoming several engineering hurdles:

1. **Cloud Environment Management:** Configuring specific environment variables for production environments across Railway and Vercel.
2. **Database Synchronization:** Utilizing Prisma for data modeling and implementing an automated *seeding* process to populate products and tags in a live database.
3. **CORS & Networking Resolution:** Configuring TCP Proxies and HTTPS protocols to ensure secure and seamless cross-domain communication.

---

## 💻 Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DiegoAvila-yeyo/DiegoAvila-yeyo.github.io.git
