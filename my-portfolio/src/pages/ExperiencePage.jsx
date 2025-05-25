import React from 'react';

const ExperiencePage = () => {
  return (
    <div className="page-content">
      <h2>Professional Experience</h2>
      <p>
        Here's a summary of my work experience and key skills.
        <em>(This is a good place to list your roles, responsibilities, and achievements, similar to your LinkedIn "Experience" section.)</em>
      </p>

      <div className="experience-item">
        <h3>Senior Software Engineer | Flutter & iOS Developer</h3>
        <p><em>(Company Name, Dates)</em></p>
        <ul>
          <li>Developed and maintained cross-platform mobile applications using Flutter.</li>
          <li>Contributed to native iOS application development.</li>
          <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
          <li>Worked on improving application performance and user experience.</li>
          <li><em>(Add more specific achievements and responsibilities.)</em></li>
        </ul>
      </div>

      <h3>Key Skills</h3>
      <p>
        Flutter, Dart, Swift, Objective-C, iOS Development, Android Development (basic), Firebase, REST APIs, Git, Agile Methodologies, UI/UX Design Principles.
        <em>(Tailor this list based on your LinkedIn "Skills" section and GitHub repositories.)</em>
      </p>
    </div>
  );
};

export default ExperiencePage;