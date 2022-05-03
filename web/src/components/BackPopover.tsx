import { ArrowLeft } from "phosphor-react";

interface BackPopoverProps {
  onBack: () => void;
}

export function BackPopover({ onBack }: BackPopoverProps) {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Voltar a tela de tipos de feedback"
      type="button"
      onClick={() => {
        onBack();
      }}
    >
      <ArrowLeft className="w-4 h-4" weight="bold"></ArrowLeft>
    </button>
  );
}
