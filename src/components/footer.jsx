// src/components/Footer.jsx

function Footer() {
    return (
      <footer className="bg-dark text-white text-center p-3 mt-auto">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bagas Cahya Fajar Bastian. Dibuat dengan React & Bootstrap.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;