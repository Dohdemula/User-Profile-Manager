import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  return React.createElement('nav', { className: 'navbar' },
    React.createElement('div', { className: 'nav-container' },
      React.createElement('h1', { className: 'nav-title'}, 'Profile Management App'),
      React.createElement('div', { className: 'nav-buttons' },
        React.createElement('button', {
          className: `nav-link ${currentPage === 'home' ? 'active' : ''}`,
          onClick: () => setCurrentPage('home')
        }, 'Home'),
        React.createElement('button', {
          className: `nav-link ${currentPage === 'manage-users' ? 'active' : ''}`,
          onClick: () => setCurrentPage('manage-users')
        }, 'Manage Users')
      )
    )
  );
}