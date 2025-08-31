import { useState } from 'react';
import { BsChatDots } from "react-icons/bs";


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
        <a href="#" className="btn">Let's chat <BsChatDots /></a>
        <div className={`menu-icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;