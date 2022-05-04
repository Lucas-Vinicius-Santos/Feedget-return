import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const type = "BUG",
  comment = "test",
  screenshot = undefined;

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback without screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({ type, comment, screenshot })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should be able to submit a feedback with screenshot", async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      {
        create: async () => ({
          id: "1",
          type,
          comment,
          screenshot: "data:image/png;base64,testando",
        }),
      },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot: "data:image/png;base64,testando",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to submit a feedback with screenshot with format invalid", async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      {
        create: async () => ({
          id: "1",
          type,
          comment,
          screenshot: "teste.png",
        }),
      },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot: "teste.png",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedbackUseCase.execute({ type: "", comment, screenshot })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({ type, comment: "", screenshot })
    ).rejects.toThrow();
  });
});
