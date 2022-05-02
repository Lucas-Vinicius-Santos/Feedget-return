import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>
        <div>hello world</div>
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full text-white px-3 h-12 flex items-center group ">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs group-hover:pl-2">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
