import { prisma } from "../../prisma";
import {
  FeedbackData,
  FeedbackDataCreate,
  FeedbackRepository,
} from "../feedback-repository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(feedback: FeedbackDataCreate): Promise<FeedbackData> {
    const { type, comment, screenshot } = feedback;

    const feedbackResponse = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });

    return feedbackResponse as FeedbackData;
  }
}
