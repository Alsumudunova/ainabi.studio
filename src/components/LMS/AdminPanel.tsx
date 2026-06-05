import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { addManagedUser, getManagedUsers } from "./authState";
import type { ManagedUser } from "./authState";
import LmsLayout from "./LmsLayout";
import { lmsCourses } from "./lmsData";
import type { UserRole } from "./lmsData";

const AdminPanel = () => {
  const [users, setUsers] = useState<ManagedUser[]>(() => getManagedUsers());
  const [message, setMessage] = useState("");
  const students = users.filter((user) => user.role === "student");
  const mentors = users.filter((user) => user.role === "mentor");
  const metrics = [
    ["Колдонуучулар", String(users.length)],
    ["Менторлор", String(mentors.length)],
    ["Студенттер", String(students.length)],
    ["Сертификаттар", "89"],
  ];

  useEffect(() => {
    const syncUsers = () => setUsers(getManagedUsers());
    window.addEventListener("ainabi-users-change", syncUsers);
    return () => window.removeEventListener("ainabi-users-change", syncUsers);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const form = new FormData(event.currentTarget);
    const assignedCourseSlugs = lmsCourses
      .filter((course) => form.getAll("courses").includes(course.slug))
      .map((course) => course.slug);

    try {
      addManagedUser({
        name: String(form.get("name") ?? ""),
        login: String(form.get("login") ?? ""),
        email: String(form.get("email") ?? ""),
        password: String(form.get("password") ?? ""),
        role: String(form.get("role") ?? "student") as Exclude<UserRole, "admin">,
        assignedCourseSlugs,
      });
      event.currentTarget.reset();
      setUsers(getManagedUsers());
      setMessage("Колдонуучу кошулду. Эми ошол login/email жана сыр сөз менен кире алат.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Колдонуучу кошулган жок.");
    }
  };

  return (
    <LmsLayout
      title="Админ панели"
      subtitle="Колдонуучулар, курстар, менторлор, студенттер, аналитика жана сертификаттар боюнча жалпы башкаруу борбору."
    >
      <section className="lms-grid">
        {metrics.map(([label, value]) => (
          <div className="lms-card" key={label}>
            <h3>{label}</h3>
            <div className="lms-stat">{value}</div>
          </div>
        ))}
      </section>

      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Студент же ментор кошуу</h2>
          <form className="lms-form" onSubmit={submit}>
            <label>
              Аты-жөнү
              <input required name="name" placeholder="Мисалы: Нурбек Алиев" />
            </label>
            <label>
              Email
              <input required name="email" type="email" placeholder="student@email.com" />
            </label>
            <label>
              Login
              <input required name="login" placeholder="nurbek" />
            </label>
            <label>
              Сыр сөз
              <input required name="password" type="password" placeholder="Убактылуу сыр сөз" />
            </label>
            <label>
              Роль
              <select name="role">
                <option value="student">Студент</option>
                <option value="mentor">Ментор</option>
              </select>
            </label>
            <div className="lms-check-grid">
              {lmsCourses.map((course) => (
                <label key={course.slug}>
                  <input name="courses" type="checkbox" value={course.slug} />
                  {course.title}
                </label>
              ))}
            </div>
            <button className="lms-action" type="submit">
              Колдонуучу кошуу
            </button>
            {message && <span className="lms-badge">{message}</span>}
          </form>
        </div>

        <div className="lms-panel">
          <h2>Колдонуучулар</h2>
          <div className="lms-list">
            {users.map((user) => (
              <div className="lms-row" key={user.id}>
                <div>
                  <strong>{user.name}</strong>
                  <p className="lms-muted">
                    {user.role} · login: {user.login} · {user.email}
                  </p>
                </div>
                <span className="lms-badge">{user.assignedCourseSlugs.length} курс</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Курстар</h2>
          <div className="lms-list">
            {lmsCourses.map((course) => (
              <div className="lms-row" key={course.slug}>
                <div>
                  <strong>{course.title}</strong>
                  <p className="lms-muted">{course.mentor} · {course.lessonsCount} сабак</p>
                </div>
                <span className="lms-badge">{course.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lms-panel">
          <h2>Аналитика</h2>
          <div className="lms-list">
            <div className="lms-row"><strong>Орточо бүтүрүү</strong><span className="lms-badge">66%</span></div>
            <div className="lms-row"><strong>Активдүү курстар</strong><span className="lms-badge">{lmsCourses.length}</span></div>
            <div className="lms-row"><strong>Бул айдагы катталуу</strong><span className="lms-badge">74</span></div>
            <div className="lms-row"><strong>Сертификат күтүп жатат</strong><span className="lms-badge">18</span></div>
          </div>
        </div>
      </section>
    </LmsLayout>
  );
};

export default AdminPanel;
