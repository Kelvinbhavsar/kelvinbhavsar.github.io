import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="page-content">
      <h2>My Projects</h2>
      <p>
        Here are some of the projects I've worked on.
        <em>(Showcase your key projects. You can link to GitHub repositories, live demos if available, and describe the technologies used and your role.)</em>
      </p>

      <div className="project-item">
        <h3>Project Title 1 (e.g., from GitHub Pinned Repos)</h3>
        <p>A brief description of the project, its purpose, and the technologies used (e.g., Flutter, Firebase).</p>
        <p><a href="your-github-repo-link" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
      </div>

      <div className="project-item">
        <h3>Project Title 2</h3>
        <p>Description of another significant project.</p>
        {/* Add more project items as needed */}
      </div>
    </div>
  );
};

export default ProjectsPage;