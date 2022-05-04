import express from "express";
import { prisma } from "./prisma";

const routes = express.Router();

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

export default routes;
