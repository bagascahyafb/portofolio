// src/App.jsx
import { Routes, Route } from 'react-router-dom';

// Import Halaman (akan kita buat selanjutnya)
import Beranda from './pages/beranda';
import ProjectDetail from './pages/projectdetail';

// Import Komponen (akan kita buat selanjutnya)
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Konten utama akan berganti di sini */}
      <main className="container-fluid my-5 flex-grow-1">
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