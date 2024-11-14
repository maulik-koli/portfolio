import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <p className="footer-text">@ 2024 Maulik Koli. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/maulik-koli-387a75302/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/maulik-koli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>

        {/* Back to Top button using AnchorLink */}
        <AnchorLink href="#home" className="back-to-top">
          Back to Top
        </AnchorLink>
      </div>
    </div>
  );
};

export default Footer;
