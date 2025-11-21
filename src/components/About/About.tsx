import "./About.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About = () => {
  const leftAnim = useScrollAnimation();
  const rightAnim = useScrollAnimation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div
          ref={leftAnim.ref}
          className={`about-text fade-left ${leftAnim.isVisible ? "show" : ""}`}
        >
          <h2 className="about-title">Биз жөнүндө</h2>
          <p className="about-subtext">
            Ainabi Studio — жаңы муундагы IT студия...
          </p>
          <p className="about-subtext">
            Студенттерге теория эмес, толук практика...
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div
          ref={rightAnim.ref}
          className={`about-cards fade-right ${rightAnim.isVisible ? "show" : ""}`}
        >
          <div className="about-card"><h3>70% Практика</h3></div>
          <div className="about-card"><h3>Стажировка</h3></div>
          <div className="about-card"><h3>Портфолио</h3></div>
          <div className="about-card"><h3>Ментордук жардам</h3></div>
        </div>

      </div>
    </section>
  );
};

export default About;
