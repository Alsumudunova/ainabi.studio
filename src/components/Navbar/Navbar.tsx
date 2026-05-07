import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      // navbar фон өзгөртүү
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // активный секцияны аныктоо
      const sections = ["home", "about", "services", "courses", "internship", "contact"];

      const scrollPos = window.scrollY + 200; // кичине төмөн жагын эсепке алабыз
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPos >= offsetTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // биринчи жолу чакырабыз

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => handleLinkClick("home")}>
          Ainabi<span>Studio</span>
        </a>

        {/* Desktop menu */}
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Башкы бет
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              Биз жөнүндө
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
            >
              Кызматтар
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className={activeSection === "courses" ? "active" : ""}
            >
              Курстар
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Контакт
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-btn">
          Катталуу
        </a>

        {/* Mobile icon */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Менюну жабуу" : "Менюну ачуу"}
          aria-expanded={isOpen}
        >
          <span className={isOpen ? "line line1-open" : "line"}></span>
          <span className={isOpen ? "line line2-open" : "line"}></span>
          <span className={isOpen ? "line line3-open" : "line"}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={isOpen ? "mobile-menu open" : "mobile-menu"}>
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className={activeSection === "home" ? "active" : ""}
        >
          Башкы бет
        </a>
        <a
          href="#about"
          onClick={() => handleLinkClick("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          Биз жөнүндө
        </a>
        <a
          href="#services"
          onClick={() => handleLinkClick("services")}
          className={activeSection === "services" ? "active" : ""}
        >
          Кызматтар
        </a>
        <a
          href="#courses"
          onClick={() => handleLinkClick("courses")}
          className={activeSection === "courses" ? "active" : ""}
        >
          Курстар
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Контакт
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className="mobile-btn"
        >
          Катталуу
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
