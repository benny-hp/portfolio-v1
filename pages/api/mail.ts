// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail, { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { Contact } from "../../src/interfaces/Contact";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    mail.setApiKey(process.env.SENDGRID_API_KEY as string);
    const { name, company, email, message, phone }: Contact = JSON.parse(
      req.body
    );
    const emailMessage = `
  Name: ${name}\r\n
  Email: ${email}\r\n
  Company: ${company}\r\n
  Phone: ${phone}\r\n
  Message: ${message}
  `;

    const data: MailDataRequired = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM as string,
      subject: `message from portfolio website - ${company}`,
      text: emailMessage,
      html: emailMessage.replace(/\r\n/g, "<br>"),
    };
    try {
      await mail.send(data);

      res.status(200).json({ status: "OK" });
    } catch (error) {
      res.status(500).json({ status: "FAIL" });
    }
  } else {
    res.status(400).json({ status: "FAIL" });
  }
}
