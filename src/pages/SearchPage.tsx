import { useState } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import CourseCard from "@/components/marketing/CourseCard";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Pagination from "@/components/shared/Pagination";

const av = (n: number) => new URL(`../assets/images/avatars/avatar-${n}.png`, import.meta.url).href;
const avatars = [1, 2, 3, 4].map(av);
const img = (name: string) => new URL(`../assets/images/${name}.png`, import.meta.url).href;

const SEARCH_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const COURSES_CATALOG = [
  { image: "course-figma", title: "Learn Figma from Basic" },
  { image: "course-build-digital-asset", title: "Build Digital Asset" },
  { image: "course-big-data", title: "the Power of Big Data" },
  { image: "course-productivity", title: "Balancing Productivity and Self-Care" },
  { image: "course-money", title: "Mastering Money Management" },
  { image: "course-startup", title: "From Idea to Startup Success" },
  { image: "course-ui", title: "UI/UX Design Fundamentals" },
  { image: "course-web-dev", title: "Complete Web Development Bootcamp" },
  { image: "course-marketing", title: "Digital Marketing Essentials" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [levelFilter, setLevelFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most relevant");
  const [page, setPage] = useState(1);

  const filteredCourses = COURSES_CATALOG.filter((course) => {
    if (query.trim()) {
      return course.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO SEARCH SECTION (Page 3 of ByteSpace New Check website.pdf) */}
      <section className="relative w-full bg-brand bg-grid text-white pb-20 pt-[120px] overflow-hidden" aria-labelledby="search-heading">
        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-6 px-6">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Courses", to: "/search" },
              { label: "Find Your Next Course" },
            ]}
          />

          <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-6 text-center">
            <h1 id="search-heading" className="font-poppins text-[36px] font-semibold text-white sm:text-[44px]">
              Find Your Next Course
            </h1>

            {/* Search Bar matching Figma */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full items-center gap-3 rounded-pill bg-white p-2 shadow-2xl"
            >
              <div className="flex flex-1 items-center gap-3 pl-4">
                <span className="text-gray-400">🔍</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-body-m text-gray-950 placeholder:text-gray-400 outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-pill bg-lime px-8 py-3 text-label-m font-bold text-gray-950 transition hover:bg-lime/90 hover:scale-102 cursor-pointer shadow-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS BAR (Page 3 of ByteSpace New Check website.pdf) */}
      <section className="border-b border-gray-100 bg-white py-6" aria-label="Course categories">
        <div className="mx-auto flex w-[1200px] max-w-full items-center gap-3 overflow-x-auto px-6 no-scrollbar">
          {SEARCH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-pill px-5 py-2.5 text-body-s font-semibold transition cursor-pointer ${
                  isActive
                    ? "bg-lime text-gray-950 shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* FILTER & 3-COLUMN COURSES SECTION */}
      <section className="mx-auto w-[1200px] max-w-full px-6 py-12" aria-label="Course catalog">
        <div className="flex flex-col gap-10">
          {/* Filter Bar from Page 3 of PDF */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-pill bg-gray-50 border border-gray-200 px-4 py-2 text-body-s font-semibold text-gray-950">
                Filter
              </span>

              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="rounded-pill border border-gray-200 bg-white px-4 py-2 text-body-s font-medium text-gray-700 outline-none transition focus:border-brand"
              >
                <option value="All">Level: All</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="rounded-pill border border-gray-200 bg-white px-4 py-2 text-body-s font-medium text-gray-700 outline-none transition focus:border-brand"
              >
                <option value="All">Category: All</option>
                <option value="Design">UI/UX Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-body-s text-gray-500">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-pill border border-gray-200 bg-white px-4 py-2 text-body-s font-semibold text-gray-950 outline-none transition focus:border-brand"
              >
                <option value="Most relevant">Most relevant</option>
                <option value="Newest">Newest</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Price: Low to High">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* 3-Column Course Cards Grid matching Page 3 of PDF */}
          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((c) => (
              <CourseCard
                key={c.title}
                image={img(c.image)}
                title={c.title}
                author="purepearl studio"
                price="25"
                avatars={avatars}
              />
            ))}
          </div>

          {/* Pagination 1, 2, 3, 4, 5 from Page 3 of PDF */}
          <div className="flex justify-center pt-8">
            <Pagination page={page} totalPages={5} onChange={setPage} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NewsletterFooter />
    </div>
  );
}
