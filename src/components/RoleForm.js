import React, { useState } from "react";
import { useRole } from "../context/RoleContext";

const RoleForm = () => {
  const [roleName, setRoleName] = useState("");
  const { setRoles } = useRole();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoles((prevRoles) => [...prevRoles, roleName]);
    setRoleName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Role</h3>
      <table>
        <tbody>
          <tr>
            <td>Role Name:</td>
            <td>
              <input
                type="text"
                placeholder="Role Name"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Add Role</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default RoleForm;
