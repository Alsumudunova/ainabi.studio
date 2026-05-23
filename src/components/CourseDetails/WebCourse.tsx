import "./CourseDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const WebCourse = () => {
  return (
    <div className="course-page">
      <Navbar />
      <div className="course-inner">
        <div className="course-back">
          <Link to="/#courses">Курстар</Link> · Web курс
        </div>

        <div className="course-header">
          <h1 className="course-title">Web — Сайт Жасоо Курсу</h1>
          <p className="course-tagline">
            HTML, CSS, JavaScript менен заманбап сайттарды нөлдөн баштап.
          </p>
        </div>

        <div className="course-grid">
          <div>
            <div className="course-block">
              <h3>Эмне үйрөнөсүң?</h3>
              <ul>
                <li>HTML, CSS негиздери</li>
                <li>Responsive дизайн жана адаптивдүү сайттар</li>
                <li>JavaScript логикасы</li>
                <li>Жөнөкөй анимациялар жана UI</li>
                <li>5+ даяр сайт портфолиого</li>
              </ul>
            </div>

            <div className="course-block">
              <h3>Кимге ылайыктуу?</h3>
              <p>
                Frontend дүйнөсүнө кирүүнү каалагандарга, дизайнды сайтка айлантууну
                үйрөнгүсү келгендерге.
              </p>
            </div>

            <div className="course-block">
              <h3>Программадан кыскача</h3>
              <ul>
                <li>Модуль 1: HTML, структура</li>
                <li>Модуль 2: CSS, Flex, Grid</li>
                <li>Модуль 3: JavaScript негиздери</li>
                <li>Модуль 4: Реал сайт долбоорлору</li>
              </ul>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-info-box">
              <h4>Формат</h4>
              <p>Онлайн/офлайн, практикалык сабактар, үй тапшырмалар.</p>
            </div>

            <div className="course-info-box">
              <h4>Портфолио</h4>
              <p>Курс бүткөндө өз алдынча көрсөтө турган сайттар портфолиого.</p>
            </div>

            <div className="course-info-box">
              <h4>Катталуу</h4>
              <button
                className="course-cta-btn"
                onClick={() => (window.location.href = "/#contact")}
              >
                Курска катталуу
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebCourse;
