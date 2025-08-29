import React from 'react';
import { FaTv, FaFingerprint, FaFilePdf, FaVideo } from 'react-icons/fa';

const examples = [
	{
		icon: <FaTv />,
		title: 'Rating TV dengan Audio Fingerprint',
		description:
			'Identifikasi, hitung, dan analisis cuplikan audio untuk menghasilkan metrik rating otomatis dan pelacakan tayangan.',
	},
	{
		icon: <FaFingerprint />,
		title: 'Ekstraksi Data dari Dokumen Scan',
		description:
			'OCR + post-processing untuk menstrukturkan informasi dari dokumen hasil scan secara otomatis.',
	},
	{
		icon: <FaFilePdf />,
		title: 'Pencarian Topik dalam Dokumen PDF',
		description:
			'Pencarian semantik dan penandaan topik di seluruh koleksi PDF untuk menemukan informasi relevan dengan cepat.',
	},
	{
		icon: <FaVideo />,
		title: 'Pencarian Topik dari Video',
		description:
			'Konversi audio ke teks lalu lakukan ekstraksi topik dan pencarian berbasis teks dari konten video.',
	},
];

const Examples = () => {
	return (
		<section id="examples" className="section bg-white">
			<div className="container">
				<h2 className="section-title">Contoh Aplikasi & Implementasi</h2>
				<div className="row g-4">
					{examples.map((ex, i) => (
						<div
							className="col-md-6 col-lg-3"
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 80}
						>
							<div className="service-card h-100 d-flex flex-column">
								<div className="service-icon">{ex.icon}</div>
								<h5 className="fw-bold my-3">{ex.title}</h5>
								<p className="flex-grow-1">{ex.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Examples;
