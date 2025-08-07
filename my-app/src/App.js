import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Fighter Jet Simulator",
      description: "Built a really fun and simple fighter jet simulator (based on geometry and statistics) where the dogfight is logged in a file for memorabilia",
      tech: ["Python", "FastAPI", "MongoDB", "OOP"],
      status: "Beta"
    },
    {
      title: "Customer Analytics Dashboard",
      description: "Developed interactive dashboards for customer behavior analysis with 40% improvement in decision-making speed",
      tech: ["Tableau", "SQL", "Python", "AWS Redshift"],
      status: "Live"
    },
    {
      title: "ML Model Deployment Platform",
      description: "Created automated ML model deployment system reducing time-to-production from weeks to hours",
      tech: ["Docker", "Kubernetes", "MLflow", "FastAPI"],
      status: "Beta"
    },
    {
      title: "Data Quality Framework",
      description: "Implemented comprehensive data quality monitoring system with automated alerting and remediation",
      tech: ["Great Expectations", "Airflow", "Slack API", "MongoDB"],
      status: "Production"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "Scala", "R"] },
    { category: "Big Data", items: ["Apache Spark", "Hadoop", "Kafka", "Airflow"] },
    { category: "Cloud", items: ["AWS", "Azure", "GCP", "Snowflake"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"] },
    { category: "Tools", items: ["Docker", "Kubernetes", "Git", "Terraform"] },
    { category: "Visualization", items: ["Tableau", "Power BI", "Grafana", "Plotly"] }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Matias Sanchez Wilson</h1>
            <h2>Data Engineer</h2>
            <p>Transforming raw data into actionable insights through robust pipelines, analytics platforms, and machine learning systems.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="data-flow">
              <div className="data-node">Raw Data</div>
              <div className="arrow">→</div>
              <div className="data-node">Processing</div>
              <div className="arrow">→</div>
              <div className="data-node">Insights</div>
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