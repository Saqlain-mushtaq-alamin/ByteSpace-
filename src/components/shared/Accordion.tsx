import { useState, type ReactNode } from "react";

export interface AccordionItem {
  title: string;
  meta?: string;
  content: ReactNode;
}

/** Expand/collapse list — used for course curriculum */
export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={item.title} className="overflow-hidden rounded-[16px] border border-gray-100">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 bg-gray-50/60 px-5 py-4 text-left"
          >
            <span className="text-label-m text-gray-950">{item.title}</span>
            <span className="flex items-center gap-4 text-body-s text-gray-400">
              {item.meta}
              <span className={`transition-transform ${open === i ? "rotate-180" : ""}`}>⌄</span>
            </span>
          </button>
          {open === i && <div className="px-5 py-4">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
