import express from "express";
import { NodemailerAdapter } from "./adapters/nodemailer/nodemailer-adapter";

import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

const routes = express.Router();

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const nodemailerAdapter = new NodemailerAdapter();
  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerAdapter
  );

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json({ data: feedback });
});

export default routes;
