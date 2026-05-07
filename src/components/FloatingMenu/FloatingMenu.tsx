import { useState } from "react";
import "./FloatingMenu.css";
import telegramIcon from "../../assets/icons/telegram.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import phoneIcon from "../../assets/icons/phone.png";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fab-container">

      {/* Main Button */}
      <button className="fab-main" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* Telegram */}
      <a
        href="https://t.me/aibek_dev"
        target="_blank"
        rel="noopener noreferrer"
        className={`fab-item fab-telegram ${open ? "show" : ""}`}
        aria-label="Telegram"
      >
        <img src={telegramIcon} alt="telegram" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/996702952200"
        target="_blank"
        rel="noopener noreferrer"
        className={`fab-item fab-whatsapp ${open ? "show" : ""}`}
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="whatsapp" />
      </a>

      {/* Phone */}
      <a href="tel:+996702952200" className={`fab-item fab-phone ${open ? "show" : ""}`} aria-label="Телефон">
        <img src={phoneIcon} alt="phone" />
      </a>

    </div>
  );
};

export default FloatingMenu;
