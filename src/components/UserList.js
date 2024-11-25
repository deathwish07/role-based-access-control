import React, { useState } from 'react';

const UserList = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Michael Brown', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Emily Davis', role: 'Admin', status: 'Active' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortConfig, setSortConfig] = useState(null);

  const roles = ['All', 'Admin', 'Editor', 'Viewer'];
  const statuses = ['All', 'Active', 'Inactive'];

  // Sort users based on column
  const sortUsers = (key) => {
    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setUsers(sortedUsers);
  };

  // Filter users by role and status
  const filteredUsers = users.filter((user) => {
    return (
      (filterRole === 'All' || user.role === filterRole) &&
      (filterStatus === 'All' || user.status === filterStatus) &&
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Toggle user status
  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
      )
    );
  };

  // Handle role change
  const handleRoleChange = (id, newRole) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)));
  };

  return (
    <section>
      <h3>User List</h3>

      {/* Search, Filter, and Actions */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #333',
            width: '200px',
          }}
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #333' }}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #333' }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* User Table */}
      <table>
        <thead>
          <tr>
            <th onClick={() => sortUsers('name')}>Name {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => sortUsers('role')}>Role {sortConfig?.key === 'role' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
            <th onClick={() => sortUsers('status')}>Status {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <select
                  className="select-role"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  {roles.slice(1).map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  className={`toggle-status ${user.status.toLowerCase()}`}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status}
                </button>
              </td>
              <td>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
