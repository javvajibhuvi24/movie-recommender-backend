# 🎬 Movie Recommender Backend

A secure and scalable Node.js + MongoDB backend for a movie recommendation system. It supports user authentication, movie rating, and JWT-protected APIs.

---

## 🚀 Features

- 🔐 User Registration & Login with JWT
- 🔒 Protected Routes (e.g., Dashboard)
- 🎬 Movie Listing from MongoDB
- ⭐ Movie Rating by Logged-in Users
- 🧠 Ready for Recommendation Engine Extension

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** bcrypt, JWT
- **Tools:** Dotenv, Postman, Git

---

## 📁 Project Structure

movie-recommender-backend/
├── models/
│ ├── User.js
│ ├── Movie.js
│ └── Rating.js
├── routes/
│ ├── auth.js
│ ├── movies.js
│ ├── ratings.js
│ ├── recommend.js
│ └── protected.js
├── .env.example
├── .gitignore
├── server.js
└── README.md


---

## ⚙️ Environment Setup

### Create `.env` file:

> Don't commit this file — it's in `.gitignore`.

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


### Or use the included `.env.example` as a template.

---

## 🧪 API Usage (via Postman)

### ✅ Register:

POST /api/auth/register
Body: { name, email, password }


### ✅ Login:

POST /api/auth/login
Body: { email, password }
Returns: { token }


### 🔐 Protected Route:

GET /api/protected/dashboard
Header: Authorization: Bearer <token>


### 🎬 Get All Movies:

GET /api/movies


### ⭐ Rate a Movie:

POST /api/movies/:id/rate
Header: Authorization: Bearer <token>
Body: { rating: 4 }


---

## 🧠 Coming Next (Ideas)

- 🎯 `/api/recommend` route
- 🧑‍💼 User profile with rated/favorite movies
- 🧠 Collaborative filtering or content-based suggestions
- 🌐 Frontend (React or Streamlit)

---

## 🧑‍💻 Author

**Javvaji Bhuvi**  
[GitHub: javvajibhuvi24](https://github.com/javvajibhuvi24)

---

## 📄 License

This project is licensed under the MIT License.
