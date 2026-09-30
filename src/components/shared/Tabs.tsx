import { useState, type ReactNode } from "react";

interface Props {
  tabs: string[];
  children: (active: string) => ReactNode;
  defaultTab?: string;
}

/** Underlined tab row — used on Course Details / Creator Profile */
export default function Tabs({ tabs, children, defaultTab }: Props) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]);
  return (
    <div>
      <div className="flex gap-8 border-b border-gray-100">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`border-b-2 pb-4 text-[16px] transition ${
              active === t ? "border-brand font-medium text-brand" : "border-transparent text-gray-400 hover:text-gray-950"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="pt-8">{children(active)}</div>
    </div>
  );
}
