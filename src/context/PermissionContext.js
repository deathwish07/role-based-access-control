import React, { createContext, useState, useContext } from "react";

const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([
    { name: "delete", description: "Delete data" },
    { name: "edit", description: "Edit data" },
    { name: "view", description: "View data" },
  ]);

  return (
    <PermissionContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => useContext(PermissionContext);
