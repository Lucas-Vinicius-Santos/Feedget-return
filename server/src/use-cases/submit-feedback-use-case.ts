import { MailAdapter } from "../adapters/mail-adapter";
import { NodemailerAdapter } from "../adapters/nodemailer/nodemailer-adapter";
import { FeedbackRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(feedback: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = feedback;

    if (!type) {
      throw new Error("Type are required");
    }

    if (!comment) {
      throw new Error("Comment are required");
    }

    if (screenshot && !screenshot.startsWith("data:image/")) {
      throw new Error("Invalid screenshot format");
    }

    const feedbackResponse = await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style='font-family: sans-serif'>`,
        `<h1 style='color: #8357e7'>Novo Feedback</h1>`,
        `<p><strong>Tipo: </strong>   ${type}  </p>`,
        `<p><strong>Comentário: </strong>   ${comment}  </p>`,
        `</div>`,
      ].join("\n"),
    });

    return feedbackResponse;
  }
}
