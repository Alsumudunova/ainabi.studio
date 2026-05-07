import "./Hero.css";
import logo from "../../assets/images/logo.jpeg";

const Hero = () => {
  const highlights = ["70% практика", "Реал долбоорлор", "Стажировка", "Ментордук колдоо"];

  return (
    <section id="home" className="hero">
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-eyebrow">IT студия жана практикалык окуу борбор</p>
          <h1 className="hero-title">
            Ainabi <span>Studio</span>
          </h1>

          <p className="hero-subtitle">
            Сайт, мобилдик тиркеме, таргет реклама жана Кытай маркетплейстери
            боюнча практикалык курс. Студенттер теорияны гана окубай,
            студиянын реал долбоорлорунда портфолио топтойт.
          </p>

          <div className="hero-highlights" aria-label="Ainabi Studio артыкчылыктары">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Курска катталуу</a>
            <a href="#services" className="btn-secondary">Кызматтарды көрүү</a>
          </div>
        </div>

        <div className="hero-image-container">
          <img src={logo} alt="Айбек" className="hero-image" />
          <div className="hero-badge hero-badge-top">
            <strong>4 багыт</strong>
            <span>Web, Flutter, Target, China</span>
          </div>
          <div className="hero-badge hero-badge-bottom">
            <strong>1:1 ментор</strong>
            <span>Жеке текшерүү жана feedback</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
