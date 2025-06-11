import React from 'react';

export default function UserCard({ user, onEdit, onDelete }) {
  return React.createElement('div', { className: 'user-card' },
    React.createElement('div', { className: 'user-info' },
      React.createElement('h3', null, user.name),
      React.createElement('p', null, user.email),
      React.createElement('p', null, user.phone),
      React.createElement('p', { className: 'user-address' }, user.address)
    ),
    React.createElement('div', { className: 'user-actions' },
      React.createElement('button', { 
        className: 'edit-btn',
        onClick: () => onEdit(user)
      }, 'Edit'),
      React.createElement('button', { 
        className: 'delete-btn',
        onClick: () => onDelete(user.id)
      }, 'Delete')
    )
  );
}