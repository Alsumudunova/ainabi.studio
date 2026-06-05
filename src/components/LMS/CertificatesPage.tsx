import { getAuthUser } from "./authState";
import LmsLayout from "./LmsLayout";
import { getVisibleCourses } from "./lmsData";

const CertificatesPage = () => {
  const visibleCourses = getVisibleCourses(getAuthUser());
  const completed = visibleCourses.filter((course) => course.progress === 100);

  return (
    <LmsLayout
      title="Сертификаттар"
      subtitle="Курс 100% бүткөндө сертификат ачылат жана PDF катары жүктөп алууга даяр болот."
    >
      <section className="lms-grid two">
        {visibleCourses.map((course) => (
          <article className={`lms-card ${course.progress === 100 ? "lms-certificate" : ""}`} key={course.slug}>
            <span className="lms-badge">{course.progress}%</span>
            <h3>{course.title}</h3>
            <p className="lms-muted">
              {course.progress === 100
                ? "Сертификат ачылды. PDF жүктөп алууга болот."
                : "Сертификат ачылышы үчүн курс толук бүтүшү керек."}
            </p>
            <button className={course.progress === 100 ? "lms-action" : "lms-secondary"} type="button" disabled={course.progress !== 100}>
              PDF жүктөө
            </button>
          </article>
        ))}
      </section>
      <section className="lms-panel">
        <h2>Ачылган сертификаттар</h2>
        <p className="lms-muted">{completed.length} сертификат даяр.</p>
      </section>
    </LmsLayout>
  );
};

export default CertificatesPage;
