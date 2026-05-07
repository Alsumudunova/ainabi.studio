import "./About.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const cards = [
    { title: "70% Практика", text: "Ар бир тема тапшырма, review жана мини-долбоор менен бекемделет." },
    { title: "Стажировка", text: "Окууну бүткөндөр студиянын ички жана клиенттик долбоорлоруна кошулат." },
    { title: "Портфолио", text: "Курстун аягында GitHub, кейс жана көрсөтө турган даяр иштер болот." },
    { title: "Ментордук жардам", text: "Код, дизайн, жарнама жана жумуш табуу боюнча жеке багыт берилет." },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div
          ref={leftRef}
          className={`about-text fade-left ${leftVisible ? "show" : ""}`}
        >
          <h2 className="about-title">Биз жөнүндө</h2>
          <p className="about-subtext">
            Ainabi Studio — окуу менен реал өндүрүштү бириктирген IT студия.
            Биз студентти жөн гана сабак угууга эмес, командада иштөөгө,
            дедлайн кармоого жана клиентке жыйынтык берүүгө үйрөтөбүз.
          </p>
          <p className="about-subtext">
            Web, Flutter, таргет реклама жана Кытай сайттары боюнча багыттар
            практикалык roadmap менен жүрөт: тапшырма, текшерүү, портфолио
            жана стажировка.
          </p>
          <a className="about-link" href="#courses">Курстарды караңыз</a>
        </div>

        {/* RIGHT CARDS */}
        <div
          ref={rightRef}
          className={`about-cards fade-right ${rightVisible ? "show" : ""}`}
        >
          {cards.map((card) => (
            <div className="about-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
