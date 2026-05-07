import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || course === "") {
      setStatus("error");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          course,
          message,
        }),
      });

      if (!response.ok) throw new Error("Message was not sent");

      setStatus("success");
      setName("");
      setPhone("");
      setCourse("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="contact-title">Курска катталуу</h2>
        <p className="contact-subtitle">
          Төмөнкү форманы толтуруп жөнөтүңүз — сиз менен байланышабыз.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-kicker">Байланыш</span>
            <h3>Сурооңуз болсо, команда тез жооп берет</h3>
            <p>Форма аркылуу заявка калтырыңыз же түз WhatsApp/Telegram аркылуу жазыңыз.</p>
            <a href="tel:+996702952200">+996 702 952 200</a>
            <a href="https://wa.me/996702952200" target="_blank" rel="noopener noreferrer">WhatsApp аркылуу жазуу</a>
            <a href="https://t.me/aibek_dev" target="_blank" rel="noopener noreferrer">Telegram аркылуу жазуу</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Атыңыз"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />

            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
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

            <button type="submit" className="send-btn" disabled={sending}>
              {sending ? "Жөнөтүлүүдө..." : "Жөнөтүү"}
            </button>

            {status === "success" && (
              <p className="success-msg">Катталуу ийгиликтүү жөнөтүлдү!</p>
            )}

            {status === "error" && (
              <p className="error-msg">Талааларды текшерип, кайра жөнөтүңүз.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
