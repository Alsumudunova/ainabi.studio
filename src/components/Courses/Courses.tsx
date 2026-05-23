import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      icon: "📱",
      title: "Flutter Мобилдик Тиркеме",
      text: "Android жана iOS үчүн мобилдик тиркемелерди нөлдөн баштап жазуу. UI, API, Firebase жана публикацияга чейинки практика.",
      meta: "3 ай • 12+ практика",
      link: "/courses/flutter",
    },
    {
      icon: "💻",
      title: "Web — Сайт Жасоо",
      text: "HTML, CSS, JavaScript жана React негиздери. Landing, portfolio, dashboard сыяктуу 5+ даяр иш менен чыгасыз.",
      meta: "2 ай • 5+ сайт",
      link: "/courses/web",
    },
    {
      icon: "🎯",
      title: "Таргет Реклама",
      text: "Meta Ads кабинет, аудитория, креатив, A/B тест, аналитика жана лид генерация боюнча толук практика.",
      meta: "1.5 ай • реал кампания",
      link: "/courses/target",
    },
    {
      icon: "🛒",
      title: "Кытай Сайттары",
      text: "Taobao, 1688, Pinduoduo: товар издөө, баа салыштыруу, заказ берүү жана жеткирүү процессин түшүнүү.",
      meta: "1 ай • заказ практика",
      link: "/courses/china",
    },
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <h2 className="courses-title">Биздин курстар</h2>
        <p className="courses-subtitle">
          Ainabi Studio'да теория эмес — 70% практика менен үйрөтөбүз. 
          Ар бир курс студентке реал долбоорлордо иштөө мүмкүнчүлүгүн берет.
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-icon">{course.icon}</div>
              <span className="course-meta">{course.meta}</span>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <Link to={course.link} className="course-link">
                Толук маалымат
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
