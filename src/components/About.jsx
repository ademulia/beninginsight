import React from 'react';

const steps = [
	{
		title: 'Permintaan Pengguna',
		desc: 'Pengguna mengajukan permintaan aplikasi atau kebutuhan fitur.',
	},
	{
		title: 'Penerimaan',
		desc: 'Tim kami menerima permintaan dan melakukan penjadwalan awal.',
	},
	{
		title: 'Desain',
		desc: 'Desainer membuat wireframe dan mockup sesuai kebutuhan.',
	},
	{
		title: 'Penawaran Desain',
		desc: 'Kami menyampaikan desain dan estimasi biaya untuk disetujui.',
	},
	{
		title: 'Revisi (jika ada)',
		desc: 'Perbaikan desain berdasarkan masukan hingga disetujui.',
	},
	{
		title: 'Kontrak / Deal',
		desc: 'Penandatanganan kontrak dan kesepakatan scope serta jadwal.',
	},
	{
		title: 'Eksekusi',
		desc: 'Pengembangan fitur dan integrasi berjalan sesuai rencana.',
	},
	{
		title: 'Testing & Rollout',
		desc: 'Pengujian menyeluruh dan peluncuran ke lingkungan produksi.',
	},
];

const About = () => {
	return (
		<section id="about" className="section bg-white">
			<div className="container">
				<h2 className="section-title">Alur Kerja</h2>

				<div className="workflow" aria-label="Alur kerja Bening Insight">
					{steps.map((s, i) => (
						<div className="workflow-step" key={i} aria-hidden={false}>
							<div className="dot" aria-hidden="true">
								{i + 1}
							</div>
							<div className="workflow-content text-center">
								<h5 className="fw-bold mt-3">{s.title}</h5>
								<p className="mb-0 small text-muted">{s.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
