import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const UserManagement = () => {
  return (
    <div>
      <h3>User Management</h3>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserManagement;
