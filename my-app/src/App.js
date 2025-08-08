import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Dogfight Simulator",
      description: "Built a really fun and simple fighter jet simulator (based on geometry and statistics) where the dogfight is logged in a file for memorabilia",
      tech: ["Python", "FastAPI", "MongoDB", "OOP"],
      status: "Personal"
    },
    {
      title: "Solar Panel CNN",
      description: "Developed a CNN model to classify an image of a solar panel as clean or dirty",
      tech: ["Python", "TensorFlow", "CNN", "Optimisation Algorithms"],
      status: "WIP"
    },
    {
      title: "Work Projects",
      description: "Ask me about them!",
      tech: ["Mystery"],
      status: "Production"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Bash", "Terraform"] },
    { category: "Processing", items: ["BigQuery", "PySpark", "Dask", "Pandas", "Numpy"] },
    { category: "Orchestration", items: ["Apache Airflow", "Dataflow"] },
    { category: "Cloud", items: ["GCP", "Snowflake"] },
    { category: "Databases/Storage", items: ["Postgres", "MongoDB", "GCS", "S3"] },
    { category: "Deployment", items: ["Docker", "GKE"] },
    { category: "Code Quality", items: ["Git", "Ruff", "Isort", "Black", "Flake8"] },
    { category: "CI/CD", items: ["GitHub Actions", "Google Cloud Build"] },
    { category: "Visualization", items: ["Looker Studio", "Grafana", "Tableau"] },
    { category: "Learning", items: ["LangChain", "RAG", "Node.js"] }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Matias Sanchez Wilson</h1>
            <h2>Data Engineer</h2>
            <p>An experienced data engineer specialising in big data processing and building scalable data pipelines using Python and SQL.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="data-flow">
              <div className="data-node">Extract</div>
              <div className="arrow">→</div>
              <div className="data-node">Transform</div>
              <div className="arrow">→</div>
              <div className="data-node">Load</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Interested in collaborating or discussing data engineering opportunities?</p>
          <div className="contact-links">
            <a href="mailto:matirsw@gmail.com" className="contact-link">
              <span>📧</span> Email
            </a>
            <a href="https://www.linkedin.com/in/matiassanchezwilson/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>💼</span> LinkedIn
            </a>
            <a href="https://github.com/mattysanchez20" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span>🔗</span> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;