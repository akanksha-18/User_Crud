# User Management CRUD App (React)

A simple React-based CRUD (Create, Read, Update, Delete) application to manage user data using a schema-driven form architecture. New fields can be added with minimal code changes.

---

## Features

- Create user  
- Read users  
- Update user  
- Delete user  
- Required field validation  
- Schema-driven dynamic form  
- Clean UI  

---

## Tech Stack

- React (Vite)
- Axios
- JSON Server
- CSS

---

## Folder Structure

```
src
├── api
│   └── userApi.js
├── components
│   ├── UserForm.jsx
│   └── UserList.jsx
├── config
│   └── userFormSchema.js
├── App.jsx
├── main.jsx
├── index.css
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone <your-github-repo-url>
cd project-folder
```

### 2. Install Dependencies

```
npm install
```

### 3. Create Database File

Create file **db.json** in root folder:

```
{
  "users": []
}
```

### 4. Run Backend (JSON Server)

```
npx json-server --watch db.json --port 3001
```

### 5. Run Frontend

Open new terminal:

```
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /users | Get all users |
| POST | /users | Create user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |

---

## How To Add New Field

Open file:

```
src/config/userFormSchema.js
```

Add:

```
{ name: "dob", label: "Date of Birth", type: "date", required: false }
```

No other changes needed.

---

## Design Decisions

- Schema-based form rendering  
- Central API file  
- Reusable components  
- Simple CSS  

---

## Deployment

Frontend can be deployed on:

- Netlify  
- Vercel  
- GitHub Pages  

---

## Assumptions

- JSON Server used only for mock backend  
- Frontend focused project  

---

## Future Improvements

- Toast notifications  
- Pagination  
- Search  
- TypeScript  

---

## Author

Akanksha Dubey
