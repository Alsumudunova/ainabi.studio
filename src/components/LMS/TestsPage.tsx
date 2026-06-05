import { useState } from "react";
import type { FormEvent } from "react";
import LmsLayout from "./LmsLayout";
import { testQuestions } from "./lmsData";

const TestsPage = () => {
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [score, setScore] = useState<number | null>(null);

  const toggleAnswer = (questionId: string, option: string, multiple: boolean) => {
    setAnswers((current) => {
      const selected = current[questionId] ?? [];
      if (!multiple) return { ...current, [questionId]: [option] };
      return selected.includes(option)
        ? { ...current, [questionId]: selected.filter((item) => item !== option) }
        : { ...current, [questionId]: [...selected, option] };
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const correct = testQuestions.filter((question) => {
      const selected = [...(answers[question.id] ?? [])].sort();
      return selected.join("|") === [...question.answer].sort().join("|");
    }).length;
    setScore(Math.round((correct / testQuestions.length) * 100));
  };

  return (
    <LmsLayout
      title="Тесттер"
      subtitle="Бир жооптуу жана көп жооптуу суроолор автоматтык текшерилип, жыйынтык дароо чыгат."
    >
      <section className="lms-panel">
        <form className="lms-form" onSubmit={submit}>
          {testQuestions.map((question) => (
            <div className="lms-question" key={question.id}>
              <strong>{question.question}</strong>
              <div className="lms-options">
                {question.options.map((option) => (
                  <label key={option}>
                    <input
                      type={question.type === "multiple" ? "checkbox" : "radio"}
                      name={question.id}
                      checked={(answers[question.id] ?? []).includes(option)}
                      onChange={() => toggleAnswer(question.id, option, question.type === "multiple")}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="lms-action" type="submit">
            Тестти текшерүү
          </button>
          {score !== null && <div className="lms-stat">Жыйынтык: {score}%</div>}
        </form>
      </section>
    </LmsLayout>
  );
};

export default TestsPage;
