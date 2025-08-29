import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'SUCCESS' | 'ERROR'
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const res = await fetch('https://formspree.io/f/xgvloryd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (res.ok) {
        setStatus('SUCCESS');
        setName(''); setEmail(''); setSubject(''); setMessage('');
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Hubungi Kami</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <p className="text-center mb-4">Punya ide proyek atau butuh konsultasi? Jangan ragu untuk mengirimkan pesan kepada kami.</p>

            {status === 'SUCCESS' && (
              <div className="alert alert-success text-center">Terima kasih! Pesan Anda telah terkirim.</div>
            )}
            {status === 'ERROR' && (
              <div className="alert alert-danger text-center">Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control p-3" placeholder="Nama Anda" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control p-3" placeholder="Email Anda" required />
                </div>
              </div>
              <div className="mb-3">
                <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className="form-control p-3" placeholder="Subjek" required />
              </div>
              <div className="mb-3">
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control p-3" rows={5} placeholder="Pesan Anda" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>{sending ? 'Mengirim...' : 'Kirim Pesan'}</button>
              </div>
            </form>

            {/* Contact address & urgent line */}
            <div className="contact-details mt-5 text-center small text-muted">
              <div className="mb-2"><strong>Alamat:</strong> <address className="mb-0">Desa Harjawinangun RT02 RW03, Kec. Balapulang, Kab. Tegal, Indonesia</address></div>
              <div>Urgent? Call / WhatsApp: <a href="tel:+6285291908262" className="fw-bold text-dark">+62 852-9190-8262</a> — <a href="https://wa.me/6285291908262" target="_blank" rel="noopener noreferrer" className="fw-bold text-success">Chat WhatsApp</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
