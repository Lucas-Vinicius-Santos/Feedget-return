import { useState } from "react";

import { FeedbackKeysType } from "./feedbackTypes";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackKeysType>(
    null
  );
  const [feedbackSent, setFeedbackSent] = useState(false);

  function onBack() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onBack={onBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onBack={onBack}
              onFeedBackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        <a
          className="underline underline-offset-2"
          href="https://github.com/Lucas-Vinicius-Santos"
        >
          Lucas Vinicius
        </a>
      </footer>
    </div>
  );
}
