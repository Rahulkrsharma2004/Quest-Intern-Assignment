import React from 'react';
import "../style/Footer.css";

const Footer = () => {
  return (
    <section className='footerSection'>
      <div className="footer-logo">
        <img src="https://www.questlabs.ai/assets/brandLogo-_2OygUFf.png" alt="Quest Labs Logo" />
        <p>Quest Labs INC</p>
      </div>
      <div className="footer-column">
        <h5>Resources</h5>
        <p>Blogs</p>
        <p>Newsletter</p>
        <p>PlayBook</p>
        <p>Docs</p>
      </div>
      <div className="footer-column">
        <h5>Support</h5>
        <p>Join Quest Club</p>
        <p>Contact</p>
        <p>Sales Partner</p>
      </div>
      <div className="footer-column">
        <h5>Legal</h5>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Cookie Policy</p>
      </div>
      
    </section>
  );
};

export default Footer;
