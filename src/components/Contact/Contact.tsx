import { useState } from "react";
import "./Contact.css";

const BOT_TOKEN = "8046250058:AAFhdrSI_P4LKx2TUrW9gCRUi55n7tFfgqI";
const CHAT_ID = "5086705602";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || course === "") {
      setStatus("error");
      return;
    }

    const text = `
📩 Жаңы катталуу!
👤 Аты: ${name}
📞 Телефон: ${phone}
📘 Курс: ${course}
💬 Комментарий: ${message || "Комментарий жок"}
`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      setStatus("success");
      setName("");
      setPhone("");
      setCourse("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="contact-title">Курска катталуу</h2>
        <p className="contact-subtitle">
          Төмөнкү форманы толтуруп жөнөтүңүз — сиз менен байланышабыз.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Атыңыз"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Кайсы курс?</option>
            <option value="Flutter">Flutter</option>
            <option value="Web">Web Сайт Жасоо</option>
            <option value="Target">Таргет Реклама</option>
            <option value="China">Кытай Сайттары</option>
          </select>

          <textarea
            placeholder="Комментарий (милдеттүү эмес)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" className="send-btn">
            Жөнөтүү
          </button>

          {status === "success" && (
            <p className="success-msg">✔ Катталуу ийгиликтүү жөнөтүлдү!</p>
          )}

          {status === "error" && (
            <p className="error-msg">✖ Талааларды толтуруңуз!</p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
