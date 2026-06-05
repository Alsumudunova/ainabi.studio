import { Link } from "react-router-dom";
import LmsLayout from "./LmsLayout";
import { getAuthUser } from "./authState";
import { getVisibleAssignments, getVisibleCourses } from "./lmsData";

const Dashboard = () => {
  const user = getAuthUser();
  const visibleCourses = getVisibleCourses(user);
  const visibleAssignments = getVisibleAssignments(user);
  const totalProgress = Math.round(
    visibleCourses.reduce((sum, course) => sum + course.progress, 0) / Math.max(visibleCourses.length, 1)
  );
  const recentLessons = visibleCourses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.slice(0, 1).map((lesson) => ({ ...lesson, course: course.title }))
    )
  );

  return (
    <LmsLayout
      title={`Салам, ${user?.name ?? "студент"}`}
      subtitle={
        user?.role === "admin"
          ? "Админ бардык студенттерди, менторлорду, курстарды жана аналитиканы көрө алат."
          : user?.role === "mentor"
            ? "Ментор өзүнө бекитилген курстарды, студенттерди жана тапшырмаларды гана көрөт."
            : "Студент өзүнө бекитилген курстарды, сабактарды, тапшырмаларды жана сертификаттарды гана көрөт."
      }
    >
      <section className="lms-grid">
        <div className="lms-card">
          <h3>Жалпы прогресс</h3>
          <div className="lms-stat">{totalProgress}%</div>
          <div className="lms-progress">
            <span style={{ width: `${totalProgress}%` }} />
          </div>
        </div>
        <div className="lms-card">
          <h3>Менин курстарым</h3>
          <div className="lms-stat">{visibleCourses.length}</div>
          <p className="lms-muted">Активдүү окуу программалары</p>
        </div>
        <div className="lms-card">
          <h3>Тапшырмалар</h3>
          <div className="lms-stat">{visibleAssignments.length}</div>
          <p className="lms-muted">Жөнөтүү жана текшерүү статусу</p>
        </div>
      </section>

      <section className="lms-panel">
        <h2>Курстардын аткарылышы</h2>
        <div className="lms-list">
          {visibleCourses.map((course) => (
            <div className="lms-row" key={course.slug}>
              <div>
                <strong>{course.title}</strong>
                <div className="lms-progress">
                  <span style={{ width: `${course.progress}%` }} />
                </div>
              </div>
              <Link className="lms-secondary" to={`/lms/courses/${course.slug}`}>
                Улантуу
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Акыркы сабактар</h2>
          <div className="lms-list">
            {recentLessons.map((lesson) => (
              <div className="lms-row" key={`${lesson.course}-${lesson.id}`}>
                <div>
                  <strong>{lesson.title}</strong>
                  <p className="lms-muted">{lesson.course} · {lesson.duration}</p>
                </div>
                <span className="lms-badge">{lesson.completed ? "Бүттү" : "Улантуу"}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lms-panel">
          <h2>Акыркы тапшырмалар</h2>
          <div className="lms-list">
            {visibleAssignments.map((assignment) => (
              <div className="lms-row" key={assignment.id}>
                <div>
                  <strong>{assignment.title}</strong>
                  <p className="lms-muted">{assignment.course} · мөөнөтү {assignment.deadline}</p>
                </div>
                <span className="lms-badge">{assignment.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LmsLayout>
  );
};

export default Dashboard;
