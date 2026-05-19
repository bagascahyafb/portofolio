// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function AppNavbar({ theme, onToggleTheme }) {
  const scrollToSection = (sectionId) => {
    const scroll = () => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

    if (window.location.hash !== '#/') {
      window.location.hash = '#/';
      window.setTimeout(scroll, 80);
      return;
    }

    scroll();
  };

  return (
    <nav className="site-nav">
      <div className="container nav-container">
        <Link className="brand-link" to="/" onClick={() => scrollToSection('home')}>
          <span className="brand-mark">B</span>
          <span>Bagas Cahya Fajar Bastian</span>
        </Link>

        <div className="nav-actions">
          <button className="nav-link-custom nav-button" type="button" onClick={() => scrollToSection('projects')}>Projects</button>
          <a className="nav-link-custom" href="https://www.linkedin.com/in/bagascahyafb/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Ganti mode warna">
            <span aria-hidden="true">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
