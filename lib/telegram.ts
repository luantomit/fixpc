// lib/telegram.ts
export async function sendTelegramMessage(message: string) {
  const token = "8532697325:AAEkf6mV9jE-_t7Ywt2SsUn8HThfy0dZC9A";
  const chatId = "7277023738";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML", // Cho phép dùng định dạng in đậm, in nghiêng
      }),
    });
  } catch (error) {
    console.error("Lỗi gửi Telegram:", error);
  }
}