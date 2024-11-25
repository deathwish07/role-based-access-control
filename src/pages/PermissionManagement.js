import React from "react";
import PermissionList from "../components/PermissionList";
import PermissionForm from "../components/PermissionForm";

const PermissionManagement = () => {
  return (
    <div>
      <h3>Permission Management</h3>
      <PermissionForm />
      <PermissionList />
    </div>
  );
};

export default PermissionManagement;
