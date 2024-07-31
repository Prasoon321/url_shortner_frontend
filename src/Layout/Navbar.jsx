import { useState } from "react";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>PS.SHORTLY</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
        <div className={styles.closeMenu} onClick={closeMenu}>
          <i className="fas fa-times closeButton"></i>
        </div>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#services" className={styles.navLink} onClick={closeMenu}>
            Services
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
