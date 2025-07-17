import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  // Use localStorage for theme persistence
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [page, setPage] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // PUBLIC_INTERFACE
  const handleNavigate = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <Header />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <MainContent currentPage={page} />
      <Footer />
    </div>
  );
}

export default App;
