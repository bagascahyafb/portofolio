import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';

import fotoProfilSaya from '../assets/profile.jpeg'; 

function Beranda() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero-section" id='home'>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Data Science Portfolio</p>
              <h1>Bagas Cahya Fajar Bastian</h1>
              <p className="hero-lead">
                Applied Data Science student who enjoys building practical data apps, dashboards, and machine learning workflows for real-world problems.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary-custom" type="button" onClick={scrollToProjects}>See Projects</button>
              </div>
            </div>

            <div className="profile-panel">
              <img src={fotoProfilSaya} alt="Foto Profil Bagas Cahya Fajar Bastian" className="profile-photo" />
              <div>
                <p className="profile-name">Undergraduate Applied Data Science</p>
                <p className="profile-meta">Python ● Streamlit ● Tableau ● Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Things I Like Building</h2>
          </div>

          <div className="skill-grid">
            {['Data Analysis', 'Data Visualization', 'Data Scientist', 'Machine Learning', 'AI Engineer' ,'Dashboard Development', 'Recommendation Systems', 'UI Design'].map((skill) => (
              <div className="skill-pill" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects</h2>
            <p className="section-description">A mix of CV projects and local code projects that have clear apps, notebooks, APIs, or dashboards behind them.</p>
          </div>

          <div className="project-grid">
            {projectData.map((project) => (
              <article className="portfolio-card" key={project.id}>
                <div className="card-accent"></div>
                <div className="card-body-custom">
                  <h3>{project.title}</h3>
                  <p className="card-meta">{project.role} / {project.period}</p>
                  <p>{project.description.substring(0, 160)}...</p>
                  <div className="tag-row">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span className="tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer-custom">
                  <Link to={`/project/${project.id}`} className="btn btn-link-custom">
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block contact-section">
        <div className="container">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's Connect</h2>
              <p>Open to data projects, dashboard work, visualization ideas, and collaboration chats.</p>
            </div>
            <div className="contact-list">
              <a href="mailto:bagascahyafajarbastian@gmail.com">bagascahyafajarbastian@gmail.com</a>
              <a href="https://wa.me/628999021483" target="_blank" rel="noopener noreferrer">WhatsApp: 08999021483</a>
              <a href="https://www.linkedin.com/in/bagascahyafb/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bagascahyafb</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Beranda;
