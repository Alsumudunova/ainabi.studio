import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { clearAuthUser, getAuthUser } from "./authState";
import "./LMS.css";

type LmsLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const LmsLayout = ({ title, subtitle, children }: LmsLayoutProps) => {
  const user = getAuthUser();

  const logout = () => {
    clearAuthUser();
    window.location.href = "/";
  };

  return (
    <div className="lms-page">
      <Navbar />
      <div className="lms-container lms-shell">
        <aside className="lms-sidebar">
          <div className="lms-brand">
            <strong>AINABI LMS</strong>
            <span>{user ? `${user.name} · ${user.role}` : "Практикалык окуу платформасы"}</span>
          </div>
          <nav className="lms-nav">
            <NavLink to="/dashboard">Кабинет</NavLink>
            <NavLink to="/lms/courses">Курстар</NavLink>
            <NavLink to="/lms/assignments">Тапшырмалар</NavLink>
            <NavLink to="/lms/tests">Тесттер</NavLink>
            <NavLink to="/lms/certificates">Сертификаттар</NavLink>
            <NavLink to="/internship">Стажировка</NavLink>
            {(user?.role === "mentor" || user?.role === "admin") && <NavLink to="/mentor">Ментор</NavLink>}
            {user?.role === "admin" && <NavLink to="/admin">Админ</NavLink>}
            {user ? (
              <button type="button" onClick={logout}>
                Чыгуу
              </button>
            ) : (
              <Link to="/auth/login">Кирүү</Link>
            )}
          </nav>
        </aside>

        <main className="lms-main">
          <header className="lms-hero">
            <h1 className="lms-title">{title}</h1>
            <p className="lms-subtitle">{subtitle}</p>
          </header>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LmsLayout;
