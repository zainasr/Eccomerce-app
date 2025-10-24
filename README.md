# Ecommerce Platform

A full-stack, modern, and scalable **eCommerce web application** built using **Next.js**, **TypeScript**, and **PostgreSQL** with advanced features including **admin dashboard**, **image uploads**, and **CI/CD pipeline integration** using **GitHub Actions** and **AWS (EKS + Helm)** for deployment.

---

## 🚀 Live Deployment

> ⚠️ Currently redeploying AWS infrastructure. The live deployment link will be added soon.  
> Source code is available and fully functional.

---

## 📦 Features

### 🛍️ User-Facing Storefront
- View product listings, categories, and details
- Add to cart, checkout flow, and user account management
- Fully responsive and fast-loading with **Next.js App Router**

### 🧑‍💼 Admin Dashboard
- Secure admin panel to manage:
  - Products
  - Categories
  - Inventory
  - Orders and customers
- Role-based access and authentication

### 🖼️ Image Uploads
- Integrated with [UploadThing](https://uploadthing.com/) for smooth and secure media uploads

---

## 🛠️ Tech Stack

| Area             | Tech Used                                      |
|------------------|------------------------------------------------|
| Frontend         | Next.js (App Router), TypeScript, Tailwind CSS |
| Auth             | NextAuth / Clerk / or similar                  |
| Backend          | Next.js API Routes                             |
| Database         | PostgreSQL                                     |
| ORM              | Prisma                                         |
| Deployment       | Vercel + AWS (EKS, Helm, Docker)               |
| CI/CD            | GitHub Actions + Kubernetes CD via Helm        |
| Image Uploads    | UploadThing                                    |
| Containerization | Docker                                         |

---

---

## ⚙️ Development Setup

### 1. Clone the repo
```bash
git clone https://github.com/mynameiszainmalik/malik-ecommerce.git
cd malik-ecommerce
2. Install dependencies

npm install

3. Configure environment

Create a .env file with:

DATABASE_URL=postgresql://...
UPLOADTHING_SECRET=...
NEXTAUTH_SECRET=...

4. Run locally

npm run dev
🚀 Deployment Notes
✅ Frontend:

    Deployed via Vercel

    Zero-downtime updates

🐳 Backend:

    Dockerized backend

    CI/CD pipeline with GitHub Actions

    CD to AWS EKS using Helm charts

    ⚠️ AWS infrastructure being rebuilt — full deployment guide and link will be updated shortly.

Core store functionality

Admin dashboard (CRUD)

Authentication

Dockerized

CI/CD with GitHub Actions

Redeploy to AWS (EKS + Helm)

📩 Contact

Zain Malik
LinkedIn | GitHub



---

### ✅ Next Steps for You:
- Upload source code to GitHub in a repo named `malik-ecommerce`
- Add this `README.md`
- When AWS is redeployed, add the live link and update the README

Let me know if you want a matching `requirements.txt`, `.dockerfile`, or GitHub Actions CI/CD workflow YAML file as well — happy to help make it complete!
