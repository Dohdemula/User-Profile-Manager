import React, { useState, useEffect } from 'react';

export default function EditUserForm({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return React.createElement('form', { className: 'edit-form', onSubmit: handleSubmit },
    React.createElement('div', { className: 'form-group' },
      React.createElement('label', null, 'Name:'),
      React.createElement('input', {
        type: 'text',
        name: 'name',
        value: editedUser.name || '',
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', { className: 'form-group' },
      React.createElement('label', null, 'Email:'),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        value: editedUser.email || '',
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', { className: 'form-group' },
      React.createElement('label', null, 'Phone:'),
      React.createElement('input', {
        type: 'tel',
        name: 'phone',
        value: editedUser.phone || '',
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', { className: 'form-group' },
      React.createElement('label', null, 'Address:'),
      React.createElement('textarea', {
        name: 'address',
        value: editedUser.address || '',
        onChange: handleChange,
        required: true,
        rows: 3
      })
    ),
    React.createElement('div', { className: 'form-actions' },
      React.createElement('button', { type: 'button', className: 'cancel-btn', onClick: onCancel }, 'Cancel'),
      React.createElement('button', { type: 'submit', className: 'save-btn' }, 'Save')
    )
  );
}