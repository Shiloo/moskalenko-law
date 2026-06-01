import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  description?: string;
  contactMethod?: string;
}

function sanitize(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/[<>"']/g, "").trim().slice(0, 1000);
}

function buildMessage(data: ContactPayload): string {
  const lines = [
    "🛡️ *Нова заявка з сайту адвоката*",
    "",
    `👤 *Ім'я:* ${data.name}`,
    `📞 *Телефон:* ${data.phone}`,
    data.email ? `📧 *Email:* ${data.email}` : null,
    data.service ? `⚖️ *Послуга:* ${data.service}` : null,
    data.contactMethod ? `💬 *Спосіб зв'язку:* ${data.contactMethod}` : null,
    data.description ? `\n📝 *Опис ситуації:*\n${data.description}` : null,
    "",
    `🕐 _${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}_`,
  ];
  return lines.filter(Boolean).join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = sanitize(body.name);
    const phone = sanitize(body.phone);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!phone || phone.length < 7) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    const data: ContactPayload = {
      name,
      phone,
      email: sanitize(body.email) || undefined,
      service: sanitize(body.service) || undefined,
      description: sanitize(body.description) || undefined,
      contactMethod: sanitize(body.contactMethod) || undefined,
    };

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const message = buildMessage(data);

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.json();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Telegram send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
