import "./CourseDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const FlutterCourse = () => {
  return (
    <div className="course-page">
      <Navbar />
      <div className="course-inner">
        <div className="course-back">
          <Link to="/">Башкы бет</Link> · Flutter курсу
        </div>

        <div className="course-header">
          <h1 className="course-title">Flutter Мобилдик Тиркеме Курсу</h1>
          <p className="course-tagline">
            Нөлдөн баштап Android жана iOS үчүн реал мобилдик тиркемелерди
            жазганга чейин.
          </p>
        </div>

        <div className="course-grid">
          {/* Left side */}
          <div>
            <div className="course-block">
              <h3>Эмне үйрөнөсүң?</h3>
              <ul>
                <li>Flutter жана Dart негиздери</li>
                <li>UI/UX боюнча заманбап экрандар</li>
                <li>State management (Provider/BLoC ж.б.)</li>
                <li>API менен иштөө, Firebase</li>
                <li>Play Market / App Store’го жүктөө логикасы</li>
              </ul>
            </div>

            <div className="course-block">
              <h3>Кимге ылайыктуу?</h3>
              <p>
                IT тармагына жаңы кирип жаткандарга, мобилдик тиркеме жазгысы
                келген студенттерге жана junior developer болууну каалагандарга.
              </p>
            </div>

            <div className="course-block">
              <h3>Программадан кыскача</h3>
              <ul>
                <li>Модуль 1: Dart жана Flutter негиздери</li>
                <li>Модуль 2: Виджеттер, навигация, UI</li>
                <li>Модуль 3: API, Local DB, Auth</li>
                <li>Модуль 4: Реал долбоор (чогуу жазабыз)</li>
                <li>Модуль 5: Портфолио жана стажировка</li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="course-sidebar">
            <div className="course-info-box">
              <h4>Формат</h4>
              <p>Онлайн/офлайн, жумасына бир нече жолу, 70% практика.</p>
            </div>

            <div className="course-info-box">
              <h4>Стажировка</h4>
              <p>
                Курстан кийин Ainabi Studio’да реал долбоорлорго катышып,
                тажрыйба топтойсуң.
              </p>
            </div>

            <div className="course-info-box">
              <h4>Катталуу</h4>
              <p>Төмөнкү кнопканы басып өтмөктөн катталсаң болот.</p>
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

export default FlutterCourse;
