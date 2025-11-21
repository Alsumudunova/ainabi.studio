import "./Services.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Services = () => {
  const anim = useScrollAnimation();

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <h2 className="services-title">Биздин кызматтар</h2>

        <div
          ref={anim.ref}
          className={`services-grid fade-up ${anim.isVisible ? "show" : ""}`}
        >
          <div className="service-card">🌐 <h3>Сайт жасоо</h3></div>
          <div className="service-card">📱 <h3>Мобилдик тиркеме</h3></div>
          <div className="service-card">🎯 <h3>Таргет реклама</h3></div>
          <div className="service-card">🛒 <h3>Кытай сайттары</h3></div>
        </div>

      </div>
    </section>
  );
};

export default Services;
