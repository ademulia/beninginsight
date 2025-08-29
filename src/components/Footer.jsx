import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="mb-0">&copy; {currentYear} Bening Insight. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
