import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

export class NodemailerAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3d810d8b7a254e",
        pass: "a3e82fa262f59b",
      },
    });

    const { subject, body } = data;

    await transport.sendMail({
      from: "Equipe de Feedback <llucassantoss3011@gmail.com>",
      to: "Lucas Vinicius <lucasparaipaba113@gmail.com>",
      subject,
      html: body,
    });
  }
}
