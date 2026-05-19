// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects'; // Import data kita

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);
  if (!project) {
    return (
      <div className="container section-block">
        <h2>Project not found.</h2>
        <Link to="/" className="btn btn-secondary-custom">Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container section-block">
      <Link to="/" className="btn btn-secondary-custom mb-4">&larr; Back Home</Link>

      <div className="detail-header">
        <p className="eyebrow">Project Detail</p>
        <h1>{project.title}</h1>
        <p className="section-description">{project.role} / {project.period}</p>
      </div>

      <div className="detail-grid">
        <article className="detail-content">
          {/* <img src={project.imageUrl} className="img-fluid rounded mb-4" alt={project.title} /> */}
          <h3>What it does</h3>
          <p>{project.description}</p>
          {project.source && (
            <>
              <h3>Source</h3>
              <p>{project.source}</p>
            </>
          )}
        </article>

        <aside className="tech-panel">
          <h3>Tech Stack</h3>
          <div className="tag-row">
            {project.techStack.map(tech => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProjectDetail;
