# Nacobai HR System (Scaffold)

This repository contains a minimal scaffold for the Nacobai HR System: a small Express backend (with Prisma SQLite schema) and a simple Vite-based frontend, plus a Docker Compose file for local development.

Quick start

1. Install dependencies
   - backend: cd backend && npm install
   - frontend: cd frontend && npm install

2. Run locally
   - Backend: cd backend && npm run dev
   - Frontend: cd frontend && npm run dev

3. Docker (optional)
   docker-compose up --build

Notes
- The backend uses Prisma with a SQLite database for the scaffold. For production, convert to Postgres and update prisma/schema.prisma and .env.
- Starter issues will be created for: migrations & seed, auth & RBAC, S3/docs, notifications, attendance device integration.