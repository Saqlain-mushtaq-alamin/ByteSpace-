import { useState } from "react";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import CourseCard from "@/components/marketing/CourseCard";
import Breadcrumb from "@/components/shared/Breadcrumb";

import creatorAvatar from "@/assets/images/creator-avatar-1.png";

const av = (n: number) => new URL(`../assets/images/avatars/avatar-${n}.png`, import.meta.url).href;
const avatars = [1, 2, 3, 4].map(av);
const img = (name: string) => new URL(`../assets/images/${name}.png`, import.meta.url).href;

const CREATOR_COURSES = [
  { image: "course-figma", title: "Learn Figma from Basic" },
  { image: "course-build-digital-asset", title: "Build Digital Asset" },
  { image: "course-big-data", title: "the Power of Big Data" },
  { image: "course-productivity", title: "Balancing Productivity and Self-Care" },
  { image: "course-money", title: "Mastering Money Management" },
  { image: "course-startup", title: "From Idea to Startup Success" },
];

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [levelFilter, setLevelFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most relevant");

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO SECTION (Page 7 of ByteSpace New Check website.pdf) */}
      <section className="relative w-full bg-brand bg-grid text-white pb-20 pt-[120px] overflow-hidden" aria-labelledby="creator-title">
        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-6">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Creators", to: "/creator/purepearl-studio" },
              { label: "PurePearl Studio" },
            ]}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Creator Avatar */}
            <div className="relative shrink-0">
              <img
                src={creatorAvatar}
                alt="PurePearl Studio"
                className="size-32 rounded-3xl border-4 border-white/20 object-cover shadow-2xl backdrop-blur-md sm:size-40"
              />
              <span className="absolute -bottom-2 -right-2 rounded-full bg-lime px-3 py-1 text-xs font-bold text-gray-950 shadow-md">
                Verified
              </span>
            </div>

            {/* Creator Info */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h1 id="creator-title" className="font-poppins text-[36px] font-bold text-white sm:text-[44px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-pill bg-white/20 px-3.5 py-1 text-body-xs font-semibold text-lime backdrop-blur-md">
                  Creator
                </span>
              </div>

              <p className="font-poppins text-lg font-semibold text-lime">
                Passionate UI/UX, Web designer
              </p>

              <p className="max-w-[800px] text-body-m leading-[1.7] text-gray-100">
                Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and
                inspiration that drive my creative journey. Let's explore and learn together!
              </p>

              <p className="max-w-[800px] text-body-m leading-[1.7] text-gray-200">
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to
                multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>

              {/* Stats & Follow Button */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-6 text-body-m">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-poppins text-2xl font-bold text-white">3</span>
                    <span className="text-gray-300">Products</span>
                  </div>
                  <div className="h-4 w-px bg-white/30" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-poppins text-2xl font-bold text-white">
                      {isFollowing ? "13" : "12"}
                    </span>
                    <span className="text-gray-300">Followers</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`rounded-pill px-8 py-2.5 text-label-m font-bold transition shadow-md cursor-pointer ${
                    isFollowing
                      ? "bg-white text-brand hover:bg-gray-100"
                      : "bg-lime text-gray-950 hover:bg-lime/90 hover:scale-102"
                  }`}
                >
                  {isFollowing ? "Following ✓" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & COURSES SECTION (Page 7 of ByteSpace New Check website.pdf) */}
      <section className="mx-auto w-[1200px] max-w-full px-6 py-16" aria-label="Creator courses catalog">
        <div className="flex flex-col gap-10">
          {/* Filter Bar */}
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
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-body-s text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-pill border border-gray-200 bg-white px-4 py-2 text-body-s font-semibold text-gray-950 outline-none transition focus:border-brand"
              >
                <option value="Most relevant">Most relevant</option>
                <option value="Newest">Newest</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* 3-Column Course Grid */}
          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREATOR_COURSES.map((course) => (
              <CourseCard
                key={course.title}
                image={img(course.image)}
                title={course.title}
                author="purepearl studio"
                price="25"
                avatars={avatars}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NewsletterFooter />
    </div>
  );
}
