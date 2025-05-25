import './App.css' // We'll use this for styling soon, or you can rename/create a new one
import { useState, useEffect } from 'react';

// Import page components
import IntroductionPage from './pages/IntroductionPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import HobbiesPage from './pages/HobbiesPage';

const timelineData = [
  { id: 'introduction', label: 'Introduction', component: <IntroductionPage /> },
  { id: 'experience', label: 'Experience', component: <ExperiencePage /> },
  { id: 'projects', label: 'Projects', component: <ProjectsPage /> },
  { id: 'hobbies', label: 'Hobbies', component: <HobbiesPage /> },
];

function App() {
  const [theme, setTheme] = useState('dark'); // Default to light theme
    const [activeSection, setActiveSection] = useState(null); // null means home/initial view


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleTimelineClick = (sectionId) => {
    setActiveSection(sectionId);
  };


  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, [theme]);
  return (
    // It's good practice to have a single root element, like a div with a class for styling
    <div className={`portfolio-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? (
          // Moon icon (to switch to Dark mode when in Light mode)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Switch to Dark Mode">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          // Sun icon (to switch to Light mode when in Dark mode)
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
      <main className="content-wrapper">
        {!activeSection && ( // Only show intro header if no section is active
          <header className="portfolio-header animate-children">
            <h1 className="animated-item">Hi, I'm <span className="highlight-name">Kelvin Bhavsar</span></h1>
            <p className="tagline animated-item">Flutter Developer | iOS Developer | Senior Software Engineer</p>
          </header>
        )}

        {!activeSection && ( // Only show links if no section is active
          <nav className="portfolio-links animated-item">
            <a href="https://github.com/Kelvinbhavsar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kelvinbhavsar/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </nav>
        )}

        <section className="horizontal-timeline-section animated-item">
          <div className="horizontal-timeline">
            {timelineData.map((item, index) => (
              <div
                className={`timeline-element ${activeSection === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => handleTimelineClick(item.id)}
              >
                <div className={`timeline-item ${activeSection === item.id ? 'active' : ''}`}>
                  <div className={`timeline-dot ${activeSection === item.id ? 'active' : ''}`}></div>
                  <div className="timeline-label">{item.label}</div>
                </div>
                {index < timelineData.length - 1 && (
                  <div className={`timeline-connector ${activeSection === item.id || activeSection === timelineData[index+1]?.id ? 'active-connector-segment' : ''}`}></div>
                )}
              </div>
            ))}
          </div>
        </section>

       {/* Content Area for selected section */}
        <section className="main-content-area">
          {activeSection && timelineData.find(item => item.id === activeSection)?.component}
        </section>

        {!activeSection && ( // Only show footer if no section is active
          <footer className="portfolio-footer animated-item">
            <p>&copy; {new Date().getFullYear()} Kelvin Bhavsar. All rights reserved.</p>
            <p>Click on the timeline above to explore sections.</p>
          </footer>
        )}
      </main>
    </div>
  )
}

export default App
