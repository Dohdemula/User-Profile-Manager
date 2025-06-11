import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ManageUsersPage } from './pages/ManageUsersPage';
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return React.createElement('div', { className: 'app' },
    React.createElement(Navbar, { currentPage, setCurrentPage }),
    currentPage === 'home' 
      ? React.createElement(HomePage, { setCurrentPage }) 
      : React.createElement(ManageUsersPage)
  );
}

export default App;