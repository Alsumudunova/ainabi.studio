import { useState } from "react";
import type { FormEvent } from "react";
import LmsLayout from "./LmsLayout";
import { internshipOpenings } from "./lmsData";

const InternshipPlatform = () => {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <LmsLayout
      title="AINABI Стажировка"
      subtitle="Практикалык окуудан кийин студенттер реал долбоорлорго катышып, портфолио жана команда менен иштөө тажрыйбасын топтойт."
    >
      <section className="lms-grid two">
        <div className="lms-panel">
          <h2>Ачык орундар</h2>
          <div className="lms-list">
            {internshipOpenings.map((opening) => (
              <div className="lms-row" key={opening}>
                <strong>{opening}</strong>
                <span className="lms-badge">Ачык</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lms-panel">
          <h2>Талаптар</h2>
          <div className="lms-list">
            <div className="lms-row"><strong>Практикалык долбоор</strong><span className="lms-badge">милдеттүү</span></div>
            <div className="lms-row"><strong>Портфолио шилтемеси</strong><span className="lms-badge">милдеттүү</span></div>
            <div className="lms-row"><strong>GitHub же кейс</strong><span className="lms-badge">милдеттүү</span></div>
            <div className="lms-row"><strong>Команда менен иштөө</strong><span className="lms-badge">бааланат</span></div>
          </div>
        </div>
      </section>

      <section className="lms-panel">
        <h2>Стажировкага катталуу</h2>
        <form className="lms-form" onSubmit={submit}>
          <label>
            Толук аты-жөнү
            <input required placeholder="Атыңызды жазыңыз" />
          </label>
          <label>
            Багыт
            <select>
              {internshipOpenings.map((opening) => (
                <option key={opening}>{opening}</option>
              ))}
            </select>
          </label>
          <label>
            Портфолио шилтемеси
            <input required placeholder="https://portfolio.com" />
          </label>
          <label>
            GitHub шилтемеси
            <input required placeholder="https://github.com/username" />
          </label>
          <label>
            Кыскача мотивация
            <textarea placeholder="Эмне үчүн AINABI стажировкасына катышкыңыз келет?" />
          </label>
          <button className="lms-action" type="submit">
            Катталуу
          </button>
          {sent && <span className="lms-badge">Арызыңыз кабыл алынды</span>}
        </form>
      </section>
    </LmsLayout>
  );
};

export default InternshipPlatform;
