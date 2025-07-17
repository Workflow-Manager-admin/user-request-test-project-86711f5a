import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
function Navbar({ currentPage, onNavigate }) {
  /** Renders the navigation bar
   * @param {string} currentPage - The currently active page
   * @param {function} onNavigate - Callback when user navigates
   */
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];
  return (
    <nav className="navbar">
      <ul>
        {navItems.map(item => (
          <li
            key={item.key}
            className={currentPage === item.key ? "active" : ""}
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
