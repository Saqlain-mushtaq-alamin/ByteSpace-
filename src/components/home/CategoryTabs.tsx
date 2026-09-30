import { useState } from "react";

const ROW_1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const ROW_2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const ROW_3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("Featured");

  const renderPill = (tab: string) => {
    const isActive = active === tab;
    return (
      <button
        key={tab}
        type="button"
        onClick={() => setActive(tab)}
        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-body-s font-semibold transition cursor-pointer ${
          isActive
            ? "bg-lime text-gray-950 shadow-sm"
            : "bg-gray-100/70 text-gray-700 hover:bg-gray-200/80 hover:text-gray-950"
        }`}
      >
        {tab}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {ROW_1.map(renderPill)}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {ROW_2.map(renderPill)}
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {ROW_3.map(renderPill)}
        <button
          type="button"
          onClick={() => setActive("All")}
          className="rounded-full px-4 py-2 text-body-s font-bold text-brand hover:underline cursor-pointer"
        >
          + More
        </button>
      </div>
    </div>
  );
}
