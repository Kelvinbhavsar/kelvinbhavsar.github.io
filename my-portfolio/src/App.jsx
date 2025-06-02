import './App.css'
import { useState, useEffect } from 'react';

// Import page components
import IntroductionPage from './pages/IntroductionPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import HobbiesPage from './pages/HobbiesPage';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const navItems = [
  { id: 'introduction', label: 'Introduction', component: <IntroductionPage /> },
  { id: 'experience', label: 'Experience', component: <ExperiencePage /> },
  { id: 'projects', label: 'Projects', component: <ProjectsPage /> },
  { id: 'hobbies', label: 'Hobbies', component: <HobbiesPage /> },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    document.body.className = '';
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, [theme]);

  return (
    <div className={`portfolio-container ${theme}`}>
      {activeSection && (
        <header className="main-header">
          <div className="header-content">
            <h1 className="header-title">
              <span className="highlight-name" onClick={() => setActiveSection(null)} style={{ cursor: 'pointer' }}>
                Kelvin Bhavsar
              </span>
            </h1>
            <nav className="header-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>
      )}

      <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>

      <main className="content-wrapper">
        {!activeSection ? (
          <>
            <header className="portfolio-header animate-children">
              <h1 className="animated-item">Hi, I'm <span className="highlight-name">Kelvin Bhavsar</span></h1>
              <p className="tagline animated-item">Flutter Developer | iOS Developer | Senior Software Engineer</p>
            </header>

            <nav className="portfolio-links animated-item">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="nav-button"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="social-links animated-item">
              <a href="https://github.com/Kelvinbhavsar" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kelvinbhavsar/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>

            <footer className="portfolio-footer animated-item">
              <p>&copy; {new Date().getFullYear()} Kelvin Bhavsar. All rights reserved.</p>
            </footer>
          </>
        ) : (
          <div className="main-content">
            {navItems.find(item => item.id === activeSection)?.component}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
