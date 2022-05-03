import { FeedbackKeysType, feedbackTypes } from "../feedbackTypes";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (feedbackType: FeedbackKeysType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
  return (
    <div className="flex w-full gap-2 py-8 ">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#8357e7] focus:outline-none focus:border-[#8357e7]"
            type="button"
            onClick={() => onFeedbackTypeChange(key as FeedbackKeysType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
