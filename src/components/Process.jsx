import React from 'react';
import { FaComments, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: <FaComments />,
    title: '1. Konsultasi & Analisis',
    description: 'Kami memulai dengan memahami kebutuhan, tujuan, dan tantangan spesifik dari proyek Anda.'
  },
  {
    icon: <FaCode />,
    title: '2. Pengembangan Solusi',
    description: 'Tim kami merancang dan membangun solusi teknologi yang disesuaikan menggunakan metode agile.'
  },
  {
    icon: <FaRocket />,
    title: '3. Implementasi & Integrasi',
    description: 'Solusi diimplementasikan dan diintegrasikan secara mulus ke dalam sistem Anda yang sudah ada.'
  },
  {
    icon: <FaHeadset />,
    title: '4. Dukungan & Pemeliharaan',
    description: 'Kami menyediakan dukungan berkelanjutan untuk memastikan solusi berjalan optimal.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section-title">Proses Kerja Kami</h2>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="process-card">
                <div className="process-icon">{step.icon}</div>
                <h5 className="fw-bold my-3">{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
