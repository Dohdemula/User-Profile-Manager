import React from 'react';

export function HomePage({ setCurrentPage }) {
  return React.createElement('div', { className: 'home-page' },
    React.createElement('section', { className: 'hero' },
      React.createElement('div', { className: 'hero-content' },
        React.createElement('h1', null, 'User Management App'),
        React.createElement('p', null, 'Manage your users efficiently and effectively.'),
        React.createElement('button', {
          className: 'button',
          onClick: () => setCurrentPage('manage-users')
        }, 'Manage Users')
      )
    )
  );
}