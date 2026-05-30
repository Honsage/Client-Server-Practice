# Client-Server Architecture Practice

This repository stores templates and practices for developing applications with client-server architecture.

## Routing

**Project:** [`/Routing`](./Routing/README.md)

A frontend-only practice project focused on React Router DOM. Demonstrates client-side routing, dynamic parameterized routes, and component composition.

**Tech Stack:**

`React` `React Router DOM` `Vite` `CSS Modules`

**Key concepts practiced:**
- Route configuration with `Routes` and `Route`
- Dynamic routes with URL parameters (`/book/:id`)
- Accessing route parameters via `useParams` hook
- Component reusability with prop-driven rendering
- Conditional data passing (different prop sets for different contexts)

**Core features:**
- Browse catalog of books displayed as a grid of cards
- Navigate from catalog to individual book pages

---

## JWT

**Project:** [`/JWT-Auth`](./JWT-Auth/README.md)

A full-stack practice project implementing JWT-based authentication and role-based access control (RBAC). Consists of Spring Boot backend and React frontend.

**Tech Stack:**

`React` `React Router DOM` `Vite` `MobX` `Axios` | `Spring Boot 3` `Spring Security` `JWT` `JPA (Hibernate)` | `PostgreSQL` | `Docker` `Docker Compose`

**Key concepts practiced:**
- JWT generation and validation on backend
- Stateless authentication with Spring Security
- Role-based endpoint protection (`USER` vs `ADMIN`)
- Token storage and automatic injection in Axios interceptors
- Protected routes on frontend with wrapper components
- State management with MobX stores
- CRUD operations restricted by authentication

**Core features:**
- User registration and login
- Authenticated users can create, read, update, and delete their own notes
- Admin users can view all registered users

---
