import { useState } from "react";
import { BackPopover } from "../../BackPopover";
import { ClosePopover } from "../../ClosePopover";
import { FeedbackKeysType, feedbackTypes } from "../feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackKeysType;
  onBack: () => void;
  onFeedBackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onBack,
  onFeedBackSent,
}: FeedbackContentStepProps) {
  const { title, image } = feedbackTypes[feedbackType];

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleSubmitFeedback(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      feedbackMessage,
      screenshot,
    });

    onFeedBackSent();
  }

  return (
    <>
      <header className="">
        <BackPopover onBack={onBack} />

        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={image.source} alt={image.alt} />
          {title}
        </span>

        <ClosePopover />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#8357e7] focus:ring-[#8357e7] focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte o que está acontecendo..."
          onChange={(e) => setFeedbackMessage(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={!feedbackMessage}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
            type="submit"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
