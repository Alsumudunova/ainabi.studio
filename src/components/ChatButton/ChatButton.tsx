import "./ChatButton.css";

const TELEGRAM_BOT_LINK = "https://t.me/ainabistudio";

const ChatButton = () => {
  return (
    <a href={TELEGRAM_BOT_LINK} target="_blank" rel="noopener noreferrer" className="chat-btn">
      💬 Telegram Бот
    </a>
  );
};

export default ChatButton;
