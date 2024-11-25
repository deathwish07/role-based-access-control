import React from "react";
import { useRole } from "../context/RoleContext";

const RoleList = () => {
  const { roles } = useRole();

  return (
    <div>
      <h3>Role List</h3>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
