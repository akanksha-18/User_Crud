# User Management CRUD App (React)

A simple React-based CRUD (Create, Read, Update, Delete) application to manage user data. The application uses a schema-driven form architecture that allows new fields to be added with minimal code changes.

---

## 🚀 Features

- Create new users  
- View all users  
- Update existing users  
- Delete users  
- Required field validation  
- Dynamic form rendering using schema  
- Clean and responsive UI  
- Mock backend using JSON Server  

---

## 🛠 Tech Stack

- React (Vite)  
- Axios  
- JSON Server  
- CSS  

---

## 📂 Folder Structure

src
│── api
│ └── userApi.js
│── components
│ ├── UserForm.jsx
│ └── UserList.jsx
│── config
│ └── userFormSchema.js
│── App.jsx
│── main.jsx
│── index.css

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-github-repo-url>
cd project-folder

2. Install Dependencies
npm install

3. Create Mock Database

Create a file named db.json in the project root:

{
  "users": []
}

4. Start Mock Backend (JSON Server)
npx json-server --watch db.json --port 3001


Backend URL:

http://localhost:3001/users

5. Start Frontend Application

Open another terminal and run:

npm run dev


Frontend URL:

http://localhost:5173