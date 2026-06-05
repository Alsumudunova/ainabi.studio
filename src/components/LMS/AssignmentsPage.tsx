import { useState } from "react";
import type { FormEvent } from "react";
import { getAuthUser } from "./authState";
import LmsLayout from "./LmsLayout";
import { getVisibleAssignments, getVisibleCourses } from "./lmsData";

const AssignmentsPage = () => {
  const [sent, setSent] = useState(false);
  const user = getAuthUser();
  const visibleCourses = getVisibleCourses(user);
  const visibleAssignments = getVisibleAssignments(user);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <LmsLayout
      title="Тапшырмалар"
      subtitle="Студент файл жүктөйт, GitHub шилтемесин жөнөтөт жана комментарий калтырат. Ментор баа жана feedback берет."
    >
      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Тапшырма жөнөтүү</h2>
          <form className="lms-form" onSubmit={submit}>
            <label>
              Курс
              <select>
                {visibleCourses.map((course) => (
                  <option key={course.slug}>{course.title}</option>
                ))}
              </select>
            </label>
            <label>
              Файл
              <input type="file" />
            </label>
            <label>
              GitHub шилтемеси
              <input placeholder="https://github.com/username/project" />
            </label>
            <label>
              Комментарий
              <textarea placeholder="Менторго түшүндүрмө жазыңыз" />
            </label>
            <button className="lms-action" type="submit">
              Тапшырманы жөнөтүү
            </button>
            {sent && <span className="lms-badge">Тапшырма текшерүүгө жөнөтүлдү</span>}
          </form>
        </div>

        <div className="lms-panel">
          <h2>Статус</h2>
          <div className="lms-list">
            {visibleAssignments.map((assignment) => (
              <div className="lms-card" key={assignment.id}>
                <span className="lms-badge">{assignment.status}</span>
                <h3>{assignment.title}</h3>
                <p className="lms-muted">{assignment.course} · мөөнөтү {assignment.deadline}</p>
                {assignment.grade && <p>Баа: {assignment.grade}</p>}
                {assignment.feedback && <p className="lms-muted">Feedback: {assignment.feedback}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LmsLayout>
  );
};

export default AssignmentsPage;
