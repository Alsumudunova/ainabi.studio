import "./Internship.css";

const Internship = () => {
  return (
    <section id="internship" className="intern-section">
      <div className="intern-container">

        <h2 className="intern-title">Стажировка</h2>
        <p className="intern-subtitle">
          Ainabi Studio'да ар бир студент реал долбоорлорго катышып, 
          команда менен иштеп, чыныгы тажрыйбага ээ болот.
        </p>

        <div className="intern-grid">

          <div className="intern-card">
            <h3>Реал проекттер</h3>
            <p>Клиенттердин реал заказдары менен иштеп, практика топтойсуң.</p>
          </div>

          <div className="intern-card">
            <h3>Командалык иш</h3>
            <p>UX/UI дизайнер, таргетолог жана программисттер менен бирге.</p>
          </div>

          <div className="intern-card">
            <h3>Портфолио</h3>
            <p>Кеминде 4–6 долбоор бүтүп, резюме толук даяр болуп чыгат.</p>
          </div>

          <div className="intern-card">
            <h3>Жумушка даярдык</h3>
            <p>Интервью, резюме, GitHub жана жумушка кирүү багытында жардам.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Internship;
