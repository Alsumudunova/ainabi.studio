import "./FloatingButton.css";

const FloatingButton = () => {
  return (
    <div className="floating-box">

      {/* WhatsApp */}
      <a
        href="https://wa.me/996702952200"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Phone call */}
      <a
        href="tel:+996702952200"
        className="floating-btn phone-btn"
      >
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/aibek_dev"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn telegram-btn"
      >
        <i className="fa-brands fa-telegram"></i>
      </a>

    </div>
  );
};

export default FloatingButton;
