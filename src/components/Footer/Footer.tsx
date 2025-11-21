import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          Ainabi<span>Studio</span>
        </div>

        {/* NAVIGATION */}
        <ul className="footer-links">
          <li><a href="#home">Башкы бет</a></li>
          <li><a href="#about">Биз жөнүндө</a></li>
          <li><a href="#services">Кызматтар</a></li>
          <li><a href="#courses">Курстар</a></li>
          <li><a href="#contact">Катталуу</a></li>
        </ul>

        {/* SOCIALS */}
        <div className="footer-socials">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-telegram"></i></a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ainabi Studio — Бардык укуктар корголгон.
      </div>
    </footer>
  );
};

export default Footer;
