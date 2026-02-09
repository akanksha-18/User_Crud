import { useEffect, useState } from "react";
import { userFormSchema } from "../config/userFormSchema";

const UserForm = ({ onSubmit, editingUser }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
    else setFormData({});
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>{editingUser ? "Edit User" : "Add User"}</h2>

        {userFormSchema.map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}

        <button className="btn-primary" type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
