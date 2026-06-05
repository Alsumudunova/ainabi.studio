import { getAuthUser } from "./authState";
import LmsLayout from "./LmsLayout";
import { getVisibleAssignments, getVisibleCourses } from "./lmsData";

const MentorPanel = () => {
  const user = getAuthUser();
  const visibleCourses = getVisibleCourses(user);
  const visibleAssignments = getVisibleAssignments(user);

  return (
    <LmsLayout
      title="Ментор панели"
      subtitle="Ментор курстарды, сабактарды, студенттерди, тапшырмаларды жана окуу статистикасын башкарат."
    >
      <section className="lms-grid">
        <div className="lms-card">
          <h3>Курстар</h3>
          <div className="lms-stat">{visibleCourses.length}</div>
          <p className="lms-muted">Башкаруу жана жаңыртуу</p>
        </div>
        <div className="lms-card">
          <h3>Студенттер</h3>
          <div className="lms-stat">128</div>
          <p className="lms-muted">Активдүү окуучулар</p>
        </div>
        <div className="lms-card">
          <h3>Текшерүү</h3>
          <div className="lms-stat">{visibleAssignments.filter((item) => item.status === "Текшерүүдө").length}</div>
          <p className="lms-muted">Күтүп турган тапшырмалар</p>
        </div>
      </section>

      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Сабак кошуу</h2>
          <form className="lms-form">
            <label>
              Курс
              <select>
                {visibleCourses.map((course) => (
                  <option key={course.slug}>{course.title}</option>
                ))}
              </select>
            </label>
            <label>
              Сабак аталышы
              <input placeholder="Жаңы сабактын аталышы" />
            </label>
            <label>
              Видео жүктөө
              <input type="file" accept="video/*" />
            </label>
            <label>
              Материал
              <textarea placeholder="Сабактын текст материалы" />
            </label>
            <button className="lms-action" type="button">
              Сабакты сактоо
            </button>
          </form>
        </div>

        <div className="lms-panel">
          <h2>Тапшырмаларды текшерүү</h2>
          <div className="lms-list">
            {visibleAssignments.map((assignment) => (
              <div className="lms-card" key={assignment.id}>
                <span className="lms-badge">{assignment.status}</span>
                <h3>{assignment.title}</h3>
                <p className="lms-muted">{assignment.course}</p>
                <form className="lms-form">
                  <input placeholder="Баа" />
                  <textarea placeholder="Feedback" />
                  <button className="lms-secondary" type="button">
                    Текшерилди деп белгилөө
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LmsLayout>
  );
};

export default MentorPanel;
