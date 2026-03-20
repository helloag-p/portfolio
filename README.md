# 📰 Vintage Portfolio Website

A modern **full-stack portfolio website** with a unique **vintage newspaper-style UI**, showcasing projects, coding profiles, and a working contact system using **Nodemailer**.

---

## 🚀 Features

- 🧾 Vintage Newspaper UI (custom design)
- 📂 Projects showcase with live demo & code links
- 👨‍💻 Coding profiles (LeetCode, CodeChef, Codeforces)
- 📄 Resume download functionality
- 📬 Contact form with **email sending (Nodemailer)**
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- ShadCN UI

### Backend
- Node.js
- Express.js
- Nodemailer

---

## 📁 Project Structure

vintage-portfolio/
│
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # Express backend
│ ├── controllers/
│ ├── routes/
│ ├── nodemailer/
│ ├── .env
│ └── index.js
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```
2️⃣ Setup Backend
```bash
cd backend
npm install

Create .env file:

PORT=5000
CLIENT_URL=http://localhost:5173

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

SENDER_NAME=Your Name
SENDER_EMAIL=your_email@gmail.com
ADMIN_EMAIL=your_email@gmail.com

Run backend:

node index.js
```

3️⃣ Setup Frontend
```bash
cd frontend
npm install

Create .env file:

VITE_API_BASE_URL=http://localhost:5000

Run frontend:

npm run dev
```
📬 Contact Form (Nodemailer)
```
Sends email directly from backend
Uses Gmail SMTP
Requires App Password (not normal password)
👉 To generate app password:
Enable 2FA in Gmail
Go to Google Account → Security → App Password

```
🧠 Key Highlights

```
Clean UI with unique newspaper theme
Proper API integration between frontend & backend
Error handling + validation in contact form
Smooth scrolling & interactive navigation
```
