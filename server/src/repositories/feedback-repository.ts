export interface FeedbackData {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackDataCreate {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (feedback: FeedbackDataCreate) => Promise<FeedbackData>;
}
