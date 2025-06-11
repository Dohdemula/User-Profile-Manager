import React, { useState, useEffect } from 'react';
import { users as mockUsers } from '../UserData';
import UserCard from '../components/UserCard';
import EditUserForm from '../components/EditUserForm';

export function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = (updatedUser) => {
    setUsers(prevUsers =>
      prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user)
    );
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return React.createElement('div', { className: 'manage-users-page' },
    React.createElement('h1', null, 'Manage Users'),
    React.createElement('div', { className: 'search-container' },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Search by name...',
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      })
    ),
    editingUser 
      ? React.createElement(EditUserForm, {
          user: editingUser,
          onSave: handleSave,
          onCancel: handleCancel
        })
      : React.createElement('div', { className: 'users-grid' },
          filteredUsers.map(user =>
            React.createElement(UserCard, {
              key: user.id,
              user,
              onEdit: handleEdit,
              onDelete: handleDelete
            })
          )
        )
  );
}