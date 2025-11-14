
# 🚀 Role-Based Authentication Full Stack Application

A production-ready web application that implements secure authentication with **role-based access control (RBAC)** using **Node.js, MongoDB, JWT, and Next.js**.

This project demonstrates full-stack architecture, authentication logic, protected routes, deployment-readiness, and clean developer experience — ideal for real-world SaaS platforms, dashboards, admin panels, and corporate systems.

---

## 📌 Features

| Feature                                           | Status |
| ------------------------------------------------- | ------ |
| User Signup with Role Selection (User/Admin)      | ✅      |
| Secure Login with JWT Authentication              | ✅      |
| Password Hashing with bcrypt                      | ✅      |
| Protected Dashboard (only accessible after login) | ✅      |
| Role-Based UI                                     | ✅      |
| Token Persistence in Local Storage                | ✅      |
| Logout Functionality                              | ✅      |
| Environment Variable Support                      | ✅      |
| Ready for Deployment (Frontend + Backend)         | ✅      |

---

## 🧠 Project Flow / Architecture

```
 User → Signup/Login → Backend API → MongoDB → JWT Issued → Frontend Stores Token
                         │
                         └──► GET /auth/me (Protected Route)
                                  │
                                  ▼
                           Role-Based Dashboard
```

* Authentication happens on the backend using **JWT tokens**.
* Passwords are securely hashed using **bcrypt** before saving to the database.
* The frontend stores JWT in browser **localStorage**, and automatically attaches it to requests via Axios.
* `/dashboard` is protected — only accessible if token is valid.
* Based on the user role, the dashboard adjusts its content:

```
Admin → Admin tools, elevated UI
User  → Normal user interface
```

---

## 🛠️ Tech Stack

### **Frontend**

* Next.js 16 (App Router)
* TypeScript
* TailwindCSS
* Axios

### **Backend**

* Node.js + Express
* MongoDB Atlas + Mongoose
* JWT Authentication
* bcrypt password hashing
* CORS enabled

---

## 🔐 Authentication Logic

1. **Signup**

   * User enters: Name, Email, Password, Role
   * Password is hashed with `bcrypt` → stored in DB
   * Role stored: `"User"` or `"Admin"`

2. **Login**

   * Credentials verified
   * JWT signed with user data:

     ```json
     {
       "id": "...",
       "email": "...",
       "role": "Admin/User"
     }
     ```

3. **Protected Route**

   * Frontend sends header:

     ```
     Authorization: Bearer <token>
     ```

   * Backend middleware verifies token → grants access

---

## ▶️ Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/auth-role-app.git
cd auth-role-app
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env`:

```
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

Visit frontend:

👉 [http://localhost:3000](http://localhost:3000)

---

## 📦 API Endpoints

| Method | Route          | Description              | Auth Required |
| ------ | -------------- | ------------------------ | ------------- |
| POST   | `/auth/signup` | Create new account       | ❌             |
| POST   | `/auth/login`  | Login and receive JWT    | ❌             |
| GET    | `/auth/me`     | Get user data from token | ✅             |

---

## 🧪 Sample Credentials (Example Only)

| Role  | Email                                   | Password |
| ----- | --------------------------------------- | -------- |
| Admin | [admin@test.com](mailto:admin@test.com) | admin123 |
| User  | [user@test.com](mailto:user@test.com)   | user123  |

*(You must create them via the signup page.)*

---

## 📁 Project Structure

```
auth-role-app
│
├── backend
│   ├── routes
│   ├── models
│   ├── middleware
│   └── index.js
│
└── frontend
    ├── src/app (Next.js pages)
    ├── src/lib/api.ts
    └── public
```

---

## 🚀 Deployment (Recommended)

| Service          | Purpose         |
| ---------------- | --------------- |
| Render / Railway | Deploy Backend  |
| MongoDB Atlas    | Cloud Database  |
| Vercel           | Deploy Frontend |

Once deployed, update frontend `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.onrender.com
```

---

## 🌟 What This Project Demonstrates

✔ Full-stack development ability
✔ Authentication security best practices
✔ API + Client integration
✔ Role-based system thinking
✔ Clean component-based architecture
✔ Deployable production-grade application

This is the type of real-world architecture companies expect.

---

## 👤 Author

**Lokesh**
🚀 Passionate about full-stack development, security, databases, and scalable architectures.

---

## ⭐ Want to Improve?

Planned enhancements:

* ⭕ Admin CRUD for users
* ⭕ Refresh token system
* ⭕ Email verification
* ⭕ Dark/light theme toggle

---

## 📌 If you use this project…

Feel free to ⭐ star the repo and showcase it in your portfolio.

---

---

Would you like me to also:

* Write a **LinkedIn post** announcing this project?
* Generate a **project preview banner** (image)?
* Generate **sample Q&A** if recruiter asks about it?

🙂

