import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';

import fotoProfilSaya from '../assets/Profil Photo.jpg'; 

function Beranda() {
  return (
    <div>
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-5 fw-bold">Selamat Datang di Portofolio Saya</h1>
              <p className="fs-4">
                Saya adalah seorang mahasiswa Sains Data Terapan di Politeknik Elektronika Negeri Surabaya yang gemar untuk menyelesaikan masalah riil berdasarkan dari data. 
                Lihat beberapa project yang telah saya kerjakan di bawah ini.
              </p>
            </div>
            
            <div className="col-md-4 text-center">
              <img 
                src={fotoProfilSaya} 
                alt="Foto Profil"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '250px', height: 'auto' }} 
              />
            </div>
            
          </div>

        <h2 >Project Saya</h2>
        <hr />

        <div className="row g-4">
            {projectData.map((project) => (
            <div className="col-md-4" key={project.id}>
                <div className="card h-100">
                {/* <img src={project.imageUrl} className="card-img-top" alt={project.title} /> */}
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description.substring(0, 100)}...</p>
                </div>
                <div className="card-footer">
                    <Link to={`/project/${project.id}`} className="btn btn-primary">
                    Lihat Detail
                    </Link>
                </div>
                </div>
            </div>
            ))}
        </div>
                
        <hr className="mt-5" />

          <h2 className="mt-4">Kontak Saya</h2>

          <div className="row mt-3">
            <div className="col-md-6">
              <p><strong>Email:</strong> bagascahyafajarbastian@gmail.com</p>
              <p><strong>WhatsApp:</strong> 08999021483</p>
            </div>

            <div className="col-md-6">
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a 
                  href="https://www.linkedin.com/in/bagascahyafb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/bagascahyafb
                </a>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Beranda;