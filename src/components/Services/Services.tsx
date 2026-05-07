import "./Services.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Services = () => {
  const [animRef, isVisible] = useScrollAnimation();
  const services = [
    {
      icon: "🌐",
      title: "Сайт жасоо",
      text: "Landing page, корпоративдик сайт, каталог жана CRM интеграциясы менен иштейбиз.",
    },
    {
      icon: "📱",
      title: "Мобилдик тиркеме",
      text: "Flutter аркылуу Android/iOS тиркемелерин дизайндан публикацияга чейин чыгарабыз.",
    },
    {
      icon: "🎯",
      title: "Таргет реклама",
      text: "Meta Ads стратегия, креатив, аналитика жана лиддерди көбөйтүү боюнча жардам.",
    },
    {
      icon: "🛒",
      title: "Кытай сайттары",
      text: "Taobao, 1688, Pinduoduo боюнча товар табуу, заказ жана жеткирүү консультациясы.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <h2 className="services-title">Биздин кызматтар</h2>
        <p className="services-subtitle">
          Бизнеске даяр digital продукт, студентке болсо ошол продуктту кантип
          жасоону үйрөткөн практикалык чөйрө түзөбүз.
        </p>

        <div
          ref={animRef}
          className={`services-grid fade-up ${isVisible ? "show" : ""}`}
        >
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
