import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <h2 className="courses-title">Биздин курстар</h2>
        <p className="courses-subtitle">
          Ainabi Studio'да теория эмес — 70% практика менен үйрөтөбүз. 
          Ар бир курс студентке реал долбоорлордо иштөө мүмкүнчүлүгүн берет.
        </p>

        <div className="courses-grid">
          {/* Flutter */}
          <div className="course-card">
            <div className="course-icon">📱</div>
            <h3>Flutter Мобилдик Тиркеме</h3>
            <p>
              Android жана iOS үчүн мобилдик тиркемелерди нөлдөн баштап 
              жазууну үйрөтөбүз. Реал долбоорлор + стажировка.
            </p>
            <Link to="/courses/flutter" className="course-link">
              Толук маалымат →
            </Link>
          </div>

          {/* Web */}
          <div className="course-card">
            <div className="course-icon">💻</div>
            <h3>Web — Сайт Жасоо</h3>
            <p>
              HTML, CSS, JavaScript практикалык түрдө. 5+ сайт долбоору 
              жана профессионал портфолио.
            </p>
            <Link to="/courses/web" className="course-link">
              Толук маалымат →
            </Link>
          </div>

          {/* Target */}
          <div className="course-card">
            <div className="course-icon">🎯</div>
            <h3>Таргет Реклама</h3>
            <p>
              Meta Ads стратегиялары, визуал, A/B тест жана лид генерация 
              боюнча толук курс.
            </p>
            <Link to="/courses/target" className="course-link">
              Толук маалымат →
            </Link>
          </div>

          {/* China */}
          <div className="course-card">
            <div className="course-icon">🛒</div>
            <h3>Кытай Сайттары (Taobao, 1688)</h3>
            <p>
              Товар тандоо, заказ берүү, жеткирүү, баа салыштыруу — 
              толук практикалык программа.
            </p>
            <Link to="/courses/china" className="course-link">
              Толук маалымат →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
