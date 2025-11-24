// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Bagas Cahya Fajar Bastian</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Beranda</Link>
            </li>
            {/* Tambahkan link lain jika perlu, misal /tentang atau /kontak */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;