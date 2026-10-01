import { useState } from "react";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const PRICES = ["Free", "Paid"];
const RATINGS = ["4.5 & up", "4.0 & up", "3.0 & up"];

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (o: string) => setChecked((c) => (c.includes(o) ? c.filter((x) => x !== o) : [...c, o]));
  return (
    <div className="flex flex-col gap-3 border-b border-gray-100 pb-6">
      <p className="text-label-m text-gray-950">{title}</p>
      {options.map((o) => (
        <label key={o} className="flex items-center gap-3 text-body-m text-gray-700">
          <input type="checkbox" checked={checked.includes(o)} onChange={() => toggle(o)} className="size-4 accent-brand" />
          {o}
        </label>
      ))}
    </div>
  );
}

/** Left filter rail used on the Search results page */
export default function FilterSidebar({ categories }: { categories: string[] }) {
  return (
    <aside className="flex w-[280px] shrink-0 flex-col gap-6">
      <FilterGroup title="Category" options={categories} />
      <FilterGroup title="Level" options={LEVELS} />
      <FilterGroup title="Price" options={PRICES} />
      <FilterGroup title="Rating" options={RATINGS} />
    </aside>
  );
}
