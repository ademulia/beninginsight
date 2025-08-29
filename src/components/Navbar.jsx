import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);

      // Jika masih di bagian atas, selalu tampilkan
      if (currentY < 80) {
        setVisible(true);
      } else {
        // scroll down -> sembunyikan; scroll up -> tampilkan
        if (currentY > lastY.current && currentY > 100) {
          setVisible(false);
        } else if (currentY < lastY.current) {
          setVisible(true);
        }
      }
      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-light ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'} ${!visible ? 'nav-hidden' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Bening Insight</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#services">Layanan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#process">Proses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontak</a>
            </li>
            <li className="nav-item d-lg-inline-block ms-3">
              <a className="btn btn-primary btn-sm" href="#contact">Hubungi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;