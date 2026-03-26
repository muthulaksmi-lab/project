# MERN ModernStore (Professional E-Commerce Website)

A complete, beginner-friendly MERN stack application with authentication, CRUD operations, responsive React + Bootstrap UI, MongoDB persistence, and REST APIs.

## Project Structure

```bash
.
├── frontend/
└── backend/
    ├── config/
    ├── controllers/
    ├── data/
    ├── middleware/
    ├── models/
    └── routes/
```

## Features

- React frontend with functional components + hooks
- Bootstrap responsive design + hover/animation effects
- React Router pages (Home, About, Services, Contact, Login, Register)
- Axios API integration
- Node.js + Express REST API (GET/POST/PUT/DELETE)
- MongoDB + Mongoose models
- JWT authentication (register/login)
- Form validation (frontend + backend)
- Error handling middleware
- Loading spinner for async UI states
- Sample seed data for products

## Backend Setup

```bash
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

Backend runs at: `http://localhost:5000`

### Important Backend Environment Variables

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CLIENT_URL`

## Frontend Setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Products

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (protected)
- `PUT /api/products/:id` (protected)
- `DELETE /api/products/:id` (protected)

## Beginner Notes

- Use `Authorization: Bearer <token>` for protected product create/update/delete endpoints.
- Import Bootstrap once in `frontend/src/main.jsx`.
- Keep controllers focused on business logic and routes focused on URL mapping.
