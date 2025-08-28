import { useState } from 'react';
import { BsChatDots } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("open");
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.classList.remove("open");
  };

  const handleDownload = (e) => {
    e.preventDefault();
    
    // Try multiple methods to ensure download works
    const downloadMethods = [
      // Method 1: Direct anchor download
      () => {
        const link = document.createElement('a');
        link.href = '/images/resume.pdf';
        link.download = 'SHUBHAMkr_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      // Method 2: Fetch and blob
      async () => {
        try {
          const response = await fetch('/images/resume.pdf');
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'SHUBHAMkr_resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Fetch download failed:', error);
          throw error;
        }
      },
      // Method 3: Open in new tab
      () => {
        window.open('/images/resume.pdf', '_blank');
      }
    ];

    // Try each method until one works
    for (let i = 0; i < downloadMethods.length; i++) {
      try {
        downloadMethods[i]();
        console.log(`Download method ${i + 1} succeeded`);
        break;
      } catch (error) {
        console.error(`Download method ${i + 1} failed:`, error);
        if (i === downloadMethods.length - 1) {
          alert('Download failed. Please try again or contact me directly.');
        }
      }
    }
  };

  return (
    <header>
      <a href="#" className="logo"><span>S</span>hubham</a>
      <ul className={`navlist ${menuActive ? 'active' : ''}`}>
        <li><a href="#home" className="active" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      <div className="right-header">
        <a 
          href="/images/resume.pdf" 
          download="SHUBHAMkr_resume.pdf"
          className="btn cv-btn"
          onClick={handleDownload}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV <BsDownload />
        </a>
        <a href="#" className="btn">Let's chat <BsChatDots /></a>
        <div className={`menu-icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;