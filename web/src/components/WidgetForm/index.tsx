import { useState } from "react";

import { ClosePopover } from "../ClosePopover";
import { FeedbackKeysType } from "./feedbackTypes";

import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackKeysType>(
    null
  );

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <ClosePopover />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <p>Hello world</p>
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
