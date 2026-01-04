import { Resend } from "resend";
import { NextResponse } from "next/server";

import { ContactThanksEmail } from "@/lib/emails/contact-thanks";
import { ContactStoreEmail } from "@/lib/emails/contact-store";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Jungle Burger <info@jungleburger.hu>";
const TO = "info@jungleburger.hu";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    // 1️⃣ Email to STORE
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Új kapcsolatfelvétel – ${name || "Ismeretlen"}`,
      react: ContactStoreEmail({ name, email, message }),
    });

    // 2️⃣ Thank-you email to SENDER
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Köszönjük, hogy írtál – Jungle Burger",
      react: ContactThanksEmail({ name }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
