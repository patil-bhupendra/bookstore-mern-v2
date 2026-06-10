# 📚 Readora – Bookstore MERN Web Application (v2)

🚀 **Live Demo:** [Bookstore MERN v2](https://bookstore-mern-v2.vercel.app/)

A full-stack Bookstore Web Application built using the MERN Stack.

This is Version 2 of my previous Bookstore project, completely rebuilt from scratch with a more scalable architecture, improved user experience, better code organization, enhanced security, and optimized performance.

---
## 🔄 What's New in Version 2

- Rebuilt the application from scratch
- Improved project architecture and folder structure
- Enhanced Admin Dashboard
- Better order management workflow
- Improved cart and checkout experience
- Cleaner and more maintainable codebase
- Modern responsive UI
- Optimized performance and scalability

---

## 🚀 Live Features

### 👤 User Module
- Browse books by category
- View detailed book information
- Search and filter books
- Add and remove books from cart
- Secure checkout process
- Place orders online
- View order history
- User authentication and authorization
- Responsive design for all devices

### 🛠️ Admin Module
- Secure admin login
- Admin dashboard
- Add new books
- Update existing books
- Delete books
- Manage customer orders
- Track sales and order activity

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Redux Toolkit
- RTK Query

### Backend 
- Node.js
- Express.js
- RESTful APIs

### Database 
- MongoDB
- Mongoose

### Authentication
- Firebase + JWT Authentication

### Other Tools & Libraries
- Axios
- React Hook Form
- Swiper.js
- dotenv
- CORS

---

## 🔐 Authentication & Security

- Firebase + JWT Authentication
- Protected Routes
- Role-Based Access Control (Admin/User)
- Secure API Communication

### 📁 Project Structure

```text
bookstore-mern-v2/
│
├── backend/
│   ├── src/
│   │   ├── books/
│   │   ├── middleware/
│   │   ├── orders/
│   │   ├── stats/
│   │   └── users/
│   │
│   ├── index.js
│   ├── package.json
│   └── vercel.json
│
├── frontend/
│   ├── public/
│   │   └── books.json
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── firebase/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── routers/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── vercel.json
```
---

## ⚙️ Installation
### Clone Repository
```
git clone https://github.com/patil-bhupendra/bookstore-mern-v2.git
```
### Backend Setup
```
cd backend
npm install
npm start
```
Create .env file:
```
DB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```
### Frontend Setup
```
cd frontend
npm install
npm run dev
```
Create .env file:
```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```
---
## 🎯 Key Highlights
- Full-Stack MERN Architecture
- Modern Responsive UI
- Admin Dashboard
- Cart & Checkout System
- Order Management
- Firebase + JWT Authentication
- REST API Integration
- MongoDB Database Integration
- Production Deployment Ready

## 📈 Future Enhancements
- Online Payment Gateway Integration
- Wishlist Feature
- Book Reviews & Ratings
- Email Notifications
- Advanced Analytics Dashboard

## 🤝 Contributing

This is a personal project, but suggestions are always welcome!

## 👨‍💻 Developer

GitHub: https://github.com/patil-bhupendra

Feel free to connect or provide feedback regarding the project.
