import React from 'react';

const technologies = [
	{
		name: 'Python',
		category: 'Programming Language',
		description: 'Bahasa utama untuk pengembangan AI dan pemrosesan data',
	},
	{
		name: 'RAG (Retrieval-Augmented Generation)',
		category: 'AI Algorithm',
		description: 'Teknologi untuk peningkatan akurasi AI dengan data kontekstual',
	},
	{
		name: 'OpenCV',
		category: 'Computer Vision',
		description: 'Library untuk pemrosesan gambar dan computer vision',
	},
	{
		name: 'OpenAI API',
		category: 'AI Service',
		description: 'API untuk integrasi model bahasa dan AI canggih',
	},
	{
		name: 'PyPDF',
		category: 'Document Processing',
		description: 'Library untuk membaca dan memproses file PDF',
	},
	{
		name: 'FFmpeg',
		category: 'Multimedia Processing',
		description: 'Tool untuk pemrosesan audio dan video',
	},
	{
		name: 'Ollama',
		category: 'AI Model',
		description: 'Local AI model untuk pemrosesan bahasa alami',
	},
	{
		name: 'React',
		category: 'Frontend Framework',
		description: 'Library JavaScript untuk pengembangan antarmuka',
	},
	{
		name: 'PyQt',
		category: 'GUI Framework',
		description: 'Framework untuk pembuatan aplikasi desktop dengan Python',
	},
	{
		name: 'Android',
		category: 'Mobile Platform',
		description: 'Platform untuk pengembangan aplikasi mobile',
	},
	{
		name: 'TensorFlow',
		category: 'Machine Learning',
		description: 'Framework untuk pengembangan model machine learning',
	},
];

const Technologies = () => {
	return (
		<section className="section" id="technologies">
			<div className="container">
				<h2 className="section-title text-center">Software & Algoritma</h2>
				<p className="text-muted text-center mb-5">
					Teknologi dan tools yang kami gunakan untuk memberikan solusi terbaik
				</p>

				<div className="tech-grid">
					{technologies.map((tech, index) => (
						<div className="tech-item" key={index}>
							<div className="tech-content">
								<div className="tech-category text-center">{tech.category}</div>
								<h4 className="text-center">{tech.name}</h4>
								<p>{tech.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
