import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/user-management">User Management</Link>
          </li>
          <li>
            <Link to="/role-management">Role Management</Link>
          </li>
          <li>
            <Link to="/permission-management">Permission Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
