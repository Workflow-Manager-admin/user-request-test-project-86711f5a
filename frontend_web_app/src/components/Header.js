import React from 'react';
import './Header.css';

// PUBLIC_INTERFACE
function Header() {
  /** Renders the top header of the app */
  return (
    <header className="header">
      <div className="header-title">
        <span style={{color: 'var(--primary)'}}>My React App</span>
      </div>
    </header>
  );
}

export default Header;
