import React from 'react';
import './Footer.css';

// PUBLIC_INTERFACE
function Footer() {
  /** Renders the app footer */
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} My React App
      </span>
    </footer>
  );
}

export default Footer;
