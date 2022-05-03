import { useState } from "react";

import { FeedbackKeysType } from "./feedbackTypes";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackKeysType>(
    null
  );

  function onBack() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onBack={onBack} />
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
