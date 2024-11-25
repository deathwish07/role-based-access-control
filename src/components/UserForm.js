import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const UserForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("viewer");
  const { addUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ id: Date.now(), name, role });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Add User</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default UserForm;
