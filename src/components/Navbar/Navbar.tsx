import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import { getAuthUser } from "../LMS/authState";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [user, setUser] = useState(() => getAuthUser());

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

  useEffect(() => {
    const syncUser = () => setUser(getAuthUser());

    window.addEventListener("storage", syncUser);
    window.addEventListener("ainabi-auth-change", syncUser);
    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("ainabi-auth-change", syncUser);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => handleLinkClick("home")}>
          <img src={logo} alt="Ainabi Studio" />
          <span className="nav-logo-text">
            Ainabi<span>Studio</span>
          </span>
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
            <Link to="/internship">Стажировка</Link>
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

        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="nav-profile" aria-label="Кабинет">
                <span>{user.avatar}</span>
              </Link>
              <Link to="/dashboard" className="nav-btn">
                Кабинет
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="nav-login">
                Кирүү
              </Link>
              <Link to="/auth/register" className="nav-btn">
                Катталуу
              </Link>
            </>
          )}
        </div>

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
        <Link to="/internship" onClick={() => setIsOpen(false)}>
          Стажировка
        </Link>
        <a
          href="#contact"
          onClick={() => handleLinkClick("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Контакт
        </a>
        {user ? (
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="mobile-btn">
            Кабинет
          </Link>
        ) : (
          <>
            <Link to="/auth/login" onClick={() => setIsOpen(false)}>
              Кирүү
            </Link>
            <Link to="/auth/register" onClick={() => setIsOpen(false)} className="mobile-btn">
              Катталуу
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
