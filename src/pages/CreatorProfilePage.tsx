import { useState, type ReactNode } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import CourseCard from "@/components/marketing/CourseCard";
import { COURSE_IMAGES, STUDENT_AVATARS, CREATOR_AVATAR } from "@/components/shared/DesignAssets";

const creatorAvatar = CREATOR_AVATAR;

const COURSES = [
  { image: COURSE_IMAGES.figma, title: "Learn Figma from Basic", category: "UI/UX Design" },
  { image: COURSE_IMAGES.digitalAsset, title: "Build Digital Asset", category: "Drawing & Painting" },
  { image: COURSE_IMAGES.bigData, title: "the Power of Big Data", category: "Marketing" },
  { image: COURSE_IMAGES.productivity, title: "Balancing Productivity and Self-Care", category: "Creative Marketing" },
  { image: COURSE_IMAGES.money, title: "Mastering Money Management", category: "Social Media" },
  { image: COURSE_IMAGES.startup, title: "From Idea to Startup Success", category: "Marketing" },
];

const CATEGORIES = Array.from(new Set(COURSES.map((c) => c.category)));

const LEVEL_OPTIONS = [
  { value: "All", label: "Level" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
];
const CATEGORY_OPTIONS = [{ value: "All", label: "Category" }, ...CATEGORIES.map((c) => ({ value: c, label: c }))];
const SORT_OPTIONS = [
  { value: "relevant", label: "Most relevant" },
  { value: "az", label: "A to Z" },
  { value: "za", label: "Z to A" },
];

const svgProps = {
  width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
} as const;

const IconFunnel = () => <svg {...svgProps}><path d="M3 5h18l-7 8v6l-4 2v-8z" /></svg>;
const IconBars = () => <svg {...svgProps}><path d="M6 20v-6M12 20V9M18 20V4" /></svg>;
const IconGrid = () => <svg {...svgProps}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>;
const IconSort = () => <svg {...svgProps}><path d="M4 7h16M7 12h10M10 17h4" /></svg>;

interface FilterSelectProps {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function FilterSelect({ icon, label, value, onChange, options }: FilterSelectProps) {
  return (
    <label className="relative inline-flex shrink-0">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">{icon}</span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 cursor-pointer appearance-none rounded-full border border-gray-200 bg-white pl-11 pr-9 text-[14px] font-medium text-gray-950 outline-none transition hover:border-gray-300 focus:border-brand"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <svg {...svgProps} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </label>
  );
}

const statPill = "inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-[16px] text-gray-950";

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [level, setLevel] = useState("All");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevant");

  const results = COURSES.filter((c) => category === "All" || c.category === category);
  if (sortBy !== "relevant") {
    results.sort((a, b) => a.title.localeCompare(b.title) * (sortBy === "az" ? 1 : -1));
  }

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-brand bg-grid pb-20 pt-[160px] text-white" aria-labelledby="creator-title">
        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-7 px-6">
          {/* Avatar + name */}
          <div className="flex items-center gap-5">
            <img
              src={creatorAvatar}
              alt="PurePearl Studio"
              className="size-[96px] shrink-0 rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 id="creator-title" className="font-poppins text-[28px] font-semibold leading-[1.2] sm:text-[32px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-lime px-4 py-1.5 text-[14px] font-medium leading-none text-gray-950">
                  Creator
                </span>
              </div>
              <p className="text-[16px] text-white">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3 text-[14px] leading-[1.7] text-white/90">
            <p>
              Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and
              inspiration that drive my creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to
              multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats + Follow */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className={statPill}>
                <strong className="font-semibold">{COURSES.length}</strong> Products
              </span>
              <span className={statPill}>
                <strong className="font-semibold">{isFollowing ? 13 : 12}</strong> Followers
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsFollowing(!isFollowing)}
              aria-pressed={isFollowing}
              className={`cursor-pointer rounded-full px-8 py-3 text-[16px] font-medium transition active:scale-[0.98] ${
                isFollowing ? "bg-white text-brand hover:bg-gray-100" : "bg-lime text-gray-950 hover:brightness-95"
              }`}
            >
              {isFollowing ? "Following ✓" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* FILTERS + COURSES */}
      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-10 px-6 pb-24 pt-[72px]" aria-label="Creator courses">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 items-center gap-2 rounded-full border border-gray-200 px-4 text-[14px] font-medium">
              <IconFunnel /> Filter
            </span>
            <FilterSelect icon={<IconBars />} label="Level" value={level} onChange={setLevel} options={LEVEL_OPTIONS} />
            <FilterSelect icon={<IconGrid />} label="Category" value={category} onChange={setCategory} options={CATEGORY_OPTIONS} />
          </div>
          <FilterSelect icon={<IconSort />} label="Sort by" value={sortBy} onChange={setSortBy} options={SORT_OPTIONS} />
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => (
            <CourseCard
              key={c.title}
              image={c.image}
              title={c.title}
              author="purepearl studio"
              price="25"
              avatars={STUDENT_AVATARS}
            />
          ))}
        </div>
      </section>

      <NewsletterFooter />
    </div>
  );
}
