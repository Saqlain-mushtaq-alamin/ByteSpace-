import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import CourseCard from "@/components/marketing/CourseCard";
import Pagination from "@/components/shared/Pagination";
import { COURSE_IMAGES, STUDENT_AVATARS } from "@/components/shared/DesignAssets";


const CATEGORIES = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Cooking",
];

// Links from the home page / footer use these names
const CATEGORY_ALIASES: Record<string, string> = { Design: "UI/UX Design" };
const resolveCategory = (c: string | null) => {
  const name = c ? (CATEGORY_ALIASES[c] ?? c) : "";
  return CATEGORIES.includes(name) ? name : "Featured";
};

const BASE_COURSES = [
  { image: COURSE_IMAGES.figma, title: "Learn Figma from Basic", category: "UI/UX Design" },
  { image: COURSE_IMAGES.digitalAsset, title: "Build Digital Asset", category: "Drawing & Painting" },
  { image: COURSE_IMAGES.bigData, title: "the Power of Big Data", category: "Marketing" },
  { image: COURSE_IMAGES.productivity, title: "Balancing Productivity and Self-Care", category: "Creative Marketing" },
  { image: COURSE_IMAGES.money, title: "Mastering Money Management", category: "Social Media" },
  { image: COURSE_IMAGES.startup, title: "From Idea to Startup Success", category: "Marketing" },
];

// Placeholder: 6 courses repeated to fill a full page of 18. Replace with real data.
const COURSES = Array.from({ length: 18 }, (_, i) => ({ ...BASE_COURSES[i % BASE_COURSES.length], id: i }));

const LEVEL_OPTIONS = [
  { value: "All", label: "Level: All" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];
const SORT_OPTIONS = [
  { value: "relevance", label: "Sort: Relevance" },
  { value: "az", label: "Sort: A to Z" },
  { value: "za", label: "Sort: Z to A" },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

interface DropdownProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  tone?: "light" | "lime";
}

function Dropdown({ label, value, onChange, options, tone = "light" }: DropdownProps) {
  const styles =
    tone === "lime"
      ? "h-[50px] bg-lime px-6 pr-11 text-[16px] font-medium text-gray-950 hover:brightness-95"
      : "h-10 border border-gray-200 bg-white pl-4 pr-9 text-[14px] font-medium text-gray-700 hover:border-gray-300 focus:border-brand";
  return (
    <div className="relative shrink-0">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`cursor-pointer appearance-none rounded-full outline-none transition ${styles}`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <Chevron className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${tone === "lime" ? "right-4 size-4 text-gray-950" : "right-3 size-4 text-gray-500"}`} />
    </div>
  );
}

export default function SearchPage() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [activeCategory, setActiveCategory] = useState(resolveCategory(params.get("category")));
  const [scope, setScope] = useState("courses");
  const [level, setLevel] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Keep in sync when links change the URL while already on this page
  useEffect(() => {
    setQuery(params.get("q") ?? "");
    setActiveCategory(resolveCategory(params.get("category")));
    setPage(1);
  }, [params]);

  const q = query.trim().toLowerCase();
  const results = COURSES.filter(
    (c) =>
      (!q || c.title.toLowerCase().includes(q)) &&
      (activeCategory === "Featured" || c.category === activeCategory)
  );
  if (sortBy !== "relevance") {
    results.sort((a, b) => a.title.localeCompare(b.title) * (sortBy === "az" ? 1 : -1));
  }

  const resetAll = () => {
    setQuery("");
    setActiveCategory("Featured");
    setLevel("All");
    setPage(1);
  };

  const changePage = (p: number) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-brand bg-grid pb-[90px] pt-[150px] text-white" aria-labelledby="search-heading">
        <HomeHeader />
        <div className="mx-auto flex w-[1200px] max-w-full flex-col items-center gap-8 px-6 text-center">
          <h1 id="search-heading" className="font-poppins text-[36px] font-semibold leading-[1.2] sm:text-[44px]">
            Find Your Next Course
          </h1>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[680px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#82868e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="w-full bg-transparent text-[18px] text-gray-950 outline-none placeholder:text-gray-400"
              />
            </label>
            <Dropdown
              tone="lime"
              label="Search in"
              value={scope}
              onChange={setScope}
              options={[
                { value: "courses", label: "Courses" },
                { value: "creators", label: "Creators" },
              ]}
            />
          </form>
        </div>
      </section>

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-6 pb-20 pt-10" aria-label="Course catalog">
        {/* FILTER BAR */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-[14px] font-semibold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filter
            </span>
            <Dropdown label="Level" value={level} onChange={setLevel} options={LEVEL_OPTIONS} />
            <Dropdown
              label="Category"
              value={activeCategory}
              onChange={(v) => { setActiveCategory(v); setPage(1); }}
              options={CATEGORIES.map((c) => ({ value: c, label: c === "Featured" ? "Category: All" : c }))}
            />
          </div>
          <Dropdown label="Sort by" value={sortBy} onChange={setSortBy} options={SORT_OPTIONS} />
        </div>

        {/* CATEGORY CHIPS */}
        <div className="-mx-6 flex items-center gap-3 overflow-x-auto px-6 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              aria-pressed={activeCategory === cat}
              className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-medium transition ${
                activeCategory === cat ? "bg-lime text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div ref={gridRef} className="scroll-mt-6 pt-2">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((c) => (
                <CourseCard
                  key={c.id}
                  image={c.image}
                  title={c.title}
                  author="purepearl studio"
                  price="25"
                  avatars={STUDENT_AVATARS}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 px-6 py-20 text-center">
              <p className="font-poppins text-[20px] font-semibold">No courses found</p>
              <p className="text-[14px] text-gray-500">Try a different keyword or category.</p>
              <button
                type="button"
                onClick={resetAll}
                className="cursor-pointer rounded-full bg-lime px-6 py-2.5 text-[14px] font-medium text-gray-950 transition hover:brightness-95"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="flex justify-center pt-4">
            <Pagination page={page} totalPages={5} onChange={changePage} />
          </div>
        )}
      </section>

      <NewsletterFooter />
    </div>
  );
}
