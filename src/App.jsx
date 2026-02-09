import { useEffect, useState } from "react";
import "./index.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./api/userApi";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, data);
        setEditingUser(null);
      } else {
        await createUser(data);
      }
      fetchUsers();
    } catch {
      alert("Operation failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await deleteUser(id);
    setEditingUser(null);
    fetchUsers();
  };

  return (
    <div>
      <h1>User Management App</h1>

      <UserForm
        onSubmit={handleSubmit}
        editingUser={editingUser}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
