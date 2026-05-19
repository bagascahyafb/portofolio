// src/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Halaman (akan kita buat selanjutnya)
import Beranda from './pages/beranda';
import ProjectDetail from './pages/projectdetail';

// Import Komponen (akan kita buat selanjutnya)
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell d-flex flex-column">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Konten utama akan berganti di sini */}
      <main className="main-content flex-grow-1">
        <Routes>
          {/* Rute 1: Halaman Beranda */}
          <Route path="/" element={<Beranda />} />

          {/* Rute 2: Halaman Detail Project (Dinamis) */}
          {/* :projectId adalah parameter dinamis */}
          <Route path="/project/:projectId" element={<ProjectDetail />} />

          {/* Rute 3: Halaman 404 (Opsional) */}
          <Route path="*" element={<h2>404: Halaman Tidak Ditemukan</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
