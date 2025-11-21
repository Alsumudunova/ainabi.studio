import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Мында токен менен ID койосуң
const BOT_TOKEN = "8046250058:AAFhdrSI_P4LKx2TUrW9gCRUi55n7tFfgqI";
const CHAT_ID = "5086705602";

app.post("/send-message", async (req, res) => {
  const { name, phone, message } = req.body;

  const text = `
📩 Жаңы билдирүү!
👤 Аты: ${name}
📞 Номер: ${phone}
💬 Сообщение: ${message}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });

    return res.json({ ok: true });
  } catch (e) {
    return res.json({ ok: false, error: e });
  }
});

app.listen(5000, () => console.log("SERVER STARTED ON 5000"));
