import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoleProvider } from "./context/RoleContext";
import { PermissionProvider } from "./context/PermissionContext";

import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";

const App = () => {
  return (
    <UserProvider>
      <RoleProvider>
        <PermissionProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/role-management" element={<RoleManagement />} />
              <Route path="/permission-management" element={<PermissionManagement />} />
            </Routes>
          </Router>
        </PermissionProvider>
      </RoleProvider>
    </UserProvider>
  );
};

export default App;
