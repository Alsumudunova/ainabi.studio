import "./Hero.css";
import logo from "../../assets/images/logo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">
            Ainabi <span>Studio</span>
          </h1>

          <p className="hero-subtitle">
            IT студия — сайт жасоо, мобилдик тиркеме иштеп чыгуу,
            таргет реклама жана Кытай сайттары боюнча окутуу.
            Студенттер үчүн расмий <strong>стажировка</strong> каралган.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Курска катталуу</a>
            <a href="#services" className="btn-secondary">Кызматтарды көрүү</a>
          </div>
        </div>

        {/* RIGHT — IMAGE + TEXT */}
        <div className="hero-image-container">
          <div className="hero-image-glow"></div>

          <img src={logo} alt="Айбек" className="hero-image" />

          {/* TEXT BELOW IMAGE */}
          {/* <div className="hero-founder-text">
            <h3>Набиев Айбек</h3>
            <p>Негиздөөчү • Ainabi Studio</p>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;
