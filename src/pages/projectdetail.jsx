// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects'; // Import data kita

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);
  if (!project) {
    return (
      <div>
        <h2>Project Tidak Ditemukan!</h2>
        <Link to="/" className="btn btn-secondary">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="btn btn-outline-secondary mb-4">&larr; Kembali ke Beranda</Link>

      <h1>{project.title}</h1>
      <hr />

      <div className="row">
        <div className="col-md-8">
          <img src={project.imageUrl} className="img-fluid rounded mb-4" alt={project.title} />
          <h3>Deskripsi Project</h3>
          <p>{project.description}</p>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Teknologi yang Digunakan
            </div>
            <ul className="list-group list-group-flush">
              {project.techStack.map(tech => (
                <li className="list-group-item" key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;