import React from "react";
import RoleList from "../components/RoleList";
import RoleForm from "../components/RoleForm";

const RoleManagement = () => {
  return (
    <div>
      <h3>Role Management</h3>
      <RoleForm />
      <RoleList />
    </div>
  );
};

export default RoleManagement;
