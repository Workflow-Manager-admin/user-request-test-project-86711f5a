import React from 'react';
import './MainContent.css';

// PUBLIC_INTERFACE
function MainContent({ currentPage }) {
  /** Renders the main content area
   * @param {string} currentPage - Which page to show
   */
  return (
    <main className="main-content">
      {currentPage === 'home' && (
        <div>
          <h2>Welcome Home</h2>
          <p>This is the main landing page.</p>
        </div>
      )}
      {currentPage === 'about' && (
        <div>
          <h2>About</h2>
          <p>This page tells you about the app.</p>
        </div>
      )}
      {currentPage === 'contact' && (
        <div>
          <h2>Contact</h2>
          <p>Contact us at info@example.com</p>
        </div>
      )}
    </main>
  );
}

export default MainContent;
