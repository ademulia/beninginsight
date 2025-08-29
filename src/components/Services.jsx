import React from 'react';
import { FaImage, FaFileAlt, FaFingerprint, FaMicrophoneAlt, FaBook } from 'react-icons/fa';

const services = [
  {
    icon: <FaImage />,
    title: 'Image Processing & OCR',
    description: 'Ekstraksi teks dan analisis gambar dengan akurasi tinggi untuk digitalisasi data Anda.'
  },
  {
    icon: <FaFingerprint />,
    title: 'Audio Fingerprinting',
    description: 'Identifikasi dan lacak konten audio unik Anda di berbagai platform media.'
  },
  {
    icon: <FaMicrophoneAlt />,
    title: 'Audio to Text',
    description: 'Transkripsi rekaman audio menjadi teks yang dapat dicari dan dianalisis secara otomatis.'
  },
  {
    icon: <FaFileAlt />,
    title: 'Ekstraksi Dokumen PDF',
    description: 'Mengubah dokumen PDF statis menjadi data terstruktur untuk diolah lebih lanjut.'
  },
  {
    icon: <FaBook />,
    title: 'RAG Dokumen',
    description: 'Sistem tanya jawab cerdas berbasis AI yang memahami konteks dari koleksi dokumen Anda.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Layanan Kami</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5 className="fw-bold my-3">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
