import React, { useState } from "react";
import { usePermission } from "../context/PermissionContext";

const PermissionForm = () => {
  const [permissionName, setPermissionName] = useState("");
  const [description, setDescription] = useState("");
  const { setPermissions } = usePermission();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPermissions((prevPermissions) => [
      ...prevPermissions,
      { name: permissionName, description },
    ]);
    setPermissionName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Permission</h3>
      <table>
        <tbody>
          <tr>
            <td>Permission Name:</td>
            <td>
              <input
                type="text"
                placeholder="Permission Name"
                value={permissionName}
                onChange={(e) => setPermissionName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Add Permission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default PermissionForm;
