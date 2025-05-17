import './App.css' // We'll use this for styling soon, or you can rename/create a new one
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light'); // Default to light theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, [theme]);
  return (
    // It's good practice to have a single root element, like a div with a class for styling
    <div className="portfolio-container">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? (
          // Moon icon (to switch to Dark mode)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Switch to Dark Mode">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          // Sun icon (to switch to Light mode)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Switch to Light Mode">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
      <header className="portfolio-header">
        <h1>Hi, I'm <span className="highlight-name">Kelvin Bhavsar</span></h1>
        <p className="tagline">Flutter Developer | iOS Developer | Senior Software Engineer</p>
      </header>

      <nav className="portfolio-links">
        <a href="https://github.com/Kelvinbhavsar" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/kelvinbhavsar/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </nav>

      <footer className="portfolio-footer">
        <p>More sections like "About Me", "Projects", and "Contact" coming soon!</p>
      </footer>
    </div>
  )
}

export default App
