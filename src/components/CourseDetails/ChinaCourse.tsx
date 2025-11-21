import "./CourseDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ChinaCourse = () => {
  return (
    <div className="course-page">
      <Navbar />
      <div className="course-inner">
        <div className="course-back">
          <Link to="/">Башкы бет</Link> · Кытай сайттары курсу
        </div>

        <div className="course-header">
          <h1 className="course-title">Кытай Сайттары — Таobao, 1688, Pinduoduo</h1>
          <p className="course-tagline">
            Товардын сапатын текшерүүдөн тартып, заказ кылуу жана жеткирүүгө чейин.
          </p>
        </div>

        <div className="course-grid">
          <div>
            <div className="course-block">
              <h3>Эмне үйрөнөсүң?</h3>
              <ul>
                <li>1688, Taobao, Pinduoduo менен иштөө</li>
                <li>Сатуучуну текшерүү, рейтинг жана комментарий анализ</li>
                <li>Оптовый бааларды салыштыруу</li>
                <li>Жеткирүү жолдору жана логистика</li>
              </ul>
            </div>

            <div className="course-block">
              <h3>Кимге ылайыктуу?</h3>
              <p>
                Товар алып-сатууну каалагандарга, онлайн дүкөн ээлерине, дүң соода
                баштагысы келгендерге.
              </p>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-info-box">
              <h4>Практикалык формат</h4>
              <p>Реал товарды тандап, бирге заказ кылып көрөбүз.</p>
            </div>

            <div className="course-info-box">
              <h4>Колдоо</h4>
              <p>Курс бүткөндөн кийин да суроолор боюнча байланышсаң болот.</p>
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

export default ChinaCourse;
