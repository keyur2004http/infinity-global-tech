import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // Check for required environment variables
    if (!process.env.MAIL_USER) {
      return NextResponse.json({ error: "Missing MAIL_USER environment variable" }, { status: 500 });
    }
    if (!process.env.MAIL_PASS) {
      return NextResponse.json({ error: "Missing MAIL_PASS environment variable" }, { status: 500 });
    }
    if (!process.env.MAIL_TO) {
      return NextResponse.json({ error: "Missing MAIL_TO environment variable" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mailer error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}