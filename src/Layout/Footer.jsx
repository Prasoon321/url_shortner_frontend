import styles from "../Styles/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerBottom}>
          <p>© 2024 Your Company Name. All rights reserved.</p>
          <p>Designed by Prasoon Sengar</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
