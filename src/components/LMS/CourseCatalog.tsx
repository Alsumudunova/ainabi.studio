import { Link, useParams } from "react-router-dom";
import { getAuthUser } from "./authState";
import LmsLayout from "./LmsLayout";
import { getVisibleCourses, lmsCourses } from "./lmsData";

export const CourseCatalog = () => {
  const user = getAuthUser();
  const visibleCourses = getVisibleCourses(user);

  return (
    <LmsLayout
      title="Курстар системасы"
      subtitle="Ар бир курс модулдарга, сабактарга, видео материалдарга, документтерге жана үй тапшырмаларга бөлүнгөн."
    >
      <section className="lms-grid">
        {visibleCourses.map((course) => (
          <article className="lms-card" key={course.slug}>
            <div className="lms-course-cover">{course.image}</div>
            <span className="lms-badge">{course.level}</span>
            <h3>{course.title}</h3>
            <p className="lms-muted">{course.description}</p>
            <p className="lms-meta">
              {course.duration} · {course.lessonsCount} сабак · Ментор: {course.mentor}
            </p>
            <div className="lms-progress">
              <span style={{ width: `${course.progress}%` }} />
            </div>
            <Link className="lms-action" to={`/lms/courses/${course.slug}`}>
              Курска кирүү
            </Link>
          </article>
        ))}
      </section>
    </LmsLayout>
  );
};

export const CourseLearn = () => {
  const { slug } = useParams();
  const user = getAuthUser();
  const visibleCourses = getVisibleCourses(user);
  const course = visibleCourses.find((item) => item.slug === slug) ?? visibleCourses[0] ?? lmsCourses[0];
  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <LmsLayout
      title={course.title}
      subtitle={`${course.description} Узактыгы: ${course.duration}. Деңгээли: ${course.level}. Ментор: ${course.mentor}.`}
    >
      <section className="lms-grid two">
        <div className="lms-panel">
          <div className="lms-video">
            <div>
              <span className="lms-badge">Видео материал</span>
              <h2>{firstLesson?.videoTitle}</h2>
              <p className="lms-muted">Бул жерде сабактын видеосу LMS backend кошулганда video storage аркылуу ойнотулат.</p>
            </div>
          </div>
          <h2>{firstLesson?.title}</h2>
          <p className="lms-muted">{firstLesson?.text}</p>
          <div className="lms-row">
            <div>
              <strong>PDF документ</strong>
              <p className="lms-muted">{firstLesson?.pdf}</p>
            </div>
            <button className="lms-secondary" type="button">
              Жүктөө
            </button>
          </div>
          <div className="lms-row">
            <div>
              <strong>Үй тапшырма</strong>
              <p className="lms-muted">{firstLesson?.homework}</p>
            </div>
            <Link className="lms-action" to="/lms/assignments">
              Жөнөтүү
            </Link>
          </div>
        </div>

        <div className="lms-panel">
          <h2>Модуль жана сабактар</h2>
          <div className="lms-list">
            {course.modules.map((module) => (
              <div className="lms-card" key={module.title}>
                <h3>{module.title}</h3>
                <div className="lms-list">
                  {module.lessons.map((lesson) => (
                    <div className="lms-row" key={lesson.id}>
                      <div>
                        <strong>{lesson.title}</strong>
                        <p className="lms-muted">{lesson.duration}</p>
                      </div>
                      <span className="lms-badge">
                        {lesson.completed ? "Авто белгиленди" : "Ачык"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LmsLayout>
  );
};
