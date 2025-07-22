import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Education for All",
      description: "Providing quality education access to underserved communities",
      image: "/api/placeholder/400/300",
      details: "This comprehensive program focuses on breaking down barriers to education by providing scholarships, learning materials, and tutoring support to students in need.",
      impact: "500+ students supported",
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Skill Development Initiative",
      description: "Empowering youth with practical skills for employment",
      image: "/api/placeholder/400/300",
      details: "Our skill development program offers training in various technical and soft skills to prepare young people for the modern workforce.",
      impact: "200+ graduates placed in jobs",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Leadership Training",
      description: "Developing future leaders through mentorship and training",
      image: "/api/placeholder/400/300",
      details: "This program focuses on developing leadership qualities, communication skills, and civic engagement among young people.",
      impact: "150+ young leaders trained",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "Community Health Initiative",
      description: "Promoting health awareness and wellness in communities",
      image: "/api/placeholder/400/300",
      details: "A comprehensive health program that provides health education, preventive care, and wellness support to community members.",
      impact: "1000+ people reached",
      status: "Completed"
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Our Projects</h1>
            <p>Discover the various initiatives we're working on to create positive change in communities.</p>
          </div>
        </div>
      </section>
      
      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">
                    <span className={`status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-impact">
                    <strong>Impact: </strong>{project.impact}
                  </div>
                  <button 
                    className="learn-more-btn"
                    onClick={() => setActiveProject(index)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {activeProject !== null && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{projects[activeProject].title}</h2>
              <button 
                className="close-btn"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} />
              <p>{projects[activeProject].details}</p>
              <div className="project-stats">
                <div className="stat">
                  <strong>Impact:</strong> {projects[activeProject].impact}
                </div>
                <div className="stat">
                  <strong>Status:</strong> {projects[activeProject].status}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
