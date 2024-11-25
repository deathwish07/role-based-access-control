import React from "react";
import { usePermission } from "../context/PermissionContext";

const PermissionList = () => {
  const { permissions } = usePermission();

  return (
    <div>
      <h3>Permission List</h3>
      <table>
        <thead>
          <tr>
            <th>Permission Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.name}>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionList;
