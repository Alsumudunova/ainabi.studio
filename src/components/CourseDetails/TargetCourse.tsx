import "./CourseDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const TargetCourse = () => {
  return (
    <div className="course-page">
      <Navbar />
      <div className="course-inner">
        <div className="course-back">
          <Link to="/#courses">Курстар</Link> · Таргет курс
        </div>

        <div className="course-header">
          <h1 className="course-title">Таргет Реклама Курсу</h1>
          <p className="course-tagline">
            Meta Ads (Instagram/Facebook) аркылуу кардар тартуunu практикалык үйрөнүү.
          </p>
        </div>

        <div className="course-grid">
          <div>
            <div className="course-block">
              <h3>Эмне үйрөнөсүң?</h3>
              <ul>
                <li>Meta Business Suite менен иштөө</li>
                <li>Целевая аудиторияны аныктоо</li>
                <li>Креатив жана текст жазуу</li>
                <li>Лид-генерация кампаниялары</li>
                <li>Аналитика жана оптимизация</li>
              </ul>
            </div>

            <div className="course-block">
              <h3>Кимге ылайыктуу?</h3>
              <p>Бизнес ээлерине, маркетологдорго жана таргетолог болууну каалагандарга.</p>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-info-box">
              <h4>Практика</h4>
              <p>Реал аккаунттарда, реал кампанияларды коюп үйрөнөсүң.</p>
            </div>

            <div className="course-info-box">
              <h4>Колдоо</h4>
              <p>Курс учурунда ментордон индивидуалдуу кайтарым байланыш.</p>
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

export default TargetCourse;
