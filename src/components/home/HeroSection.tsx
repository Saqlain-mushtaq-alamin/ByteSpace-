import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Ring3D,
  Cone1,
  Cone2,
  HERO_STUDENT_IMAGE,
  STUDENT_AVATARS,
} from "@/components/shared/DesignAssets";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <section className="relative min-h-[960px] w-full overflow-hidden bg-brand bg-grid text-white pb-16 pt-[140px] sm:min-h-[1024px]">
      {/* 3D Floating Decorative Shapes from Figma / planning/homepage.md */}
      <div className="pointer-events-none absolute -left-10 bottom-24 z-0 lg:left-10 lg:bottom-28">
        <Ring3D className="size-[220px] lg:size-[300px] opacity-90 drop-shadow-2xl animate-pulse" />
      </div>

      <div className="pointer-events-none absolute -right-8 top-32 z-0 lg:right-16 lg:top-36">
        <Cone1 className="size-[190px] lg:size-[250px] opacity-90 drop-shadow-2xl" />
      </div>

      <div className="pointer-events-none absolute -right-10 bottom-16 z-0 lg:right-20 lg:bottom-20">
        <Cone2 className="size-[200px] lg:size-[270px] opacity-90 drop-shadow-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-[1200px] max-w-full flex-col items-center gap-10 px-6 text-center">
        {/* Headline & Subtitle */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-[960px] font-poppins text-[44px] font-semibold leading-[1.15] tracking-tight sm:text-[64px] lg:text-[72px]">
            Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
          </h1>
          <p className="max-w-[640px] text-body-m text-gray-100 sm:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search Input Bar matching Figma */}
        <form onSubmit={handleSearch} className="flex w-full max-w-[580px] items-center gap-2 rounded-pill bg-white p-2 shadow-2xl">
          <div className="flex flex-1 items-center gap-3 pl-4">
            <span className="text-gray-400 text-lg">🔍</span>
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

        {/* Center Student Visual with Vibrant Lime Circle & Floating Cards */}
        <div className="relative mt-6 flex h-[480px] w-full max-w-[800px] items-end justify-center sm:h-[540px]">
          {/* Lime Circle backdrop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-lime shadow-2xl sm:size-[520px] transition-transform duration-700 hover:scale-102" />

          {/* Student Photo */}
          <div className="relative z-10 h-full w-auto max-w-[540px] overflow-hidden flex items-end">
            <img
              src={HERO_STUDENT_IMAGE}
              alt="Student with laptop smiling"
              className="h-full w-auto max-w-[540px] object-cover drop-shadow-2xl rounded-b-full sm:rounded-b-[260px]"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (top-left) */}
          <Link
            to="/search?category=Design"
            className="absolute -left-2 top-8 z-20 hidden rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md transition hover:scale-105 hover:bg-white sm:flex flex-col gap-1 border border-white/40"
          >
            <p className="font-poppins text-base font-semibold text-gray-950">UI/UX Design</p>
            <p className="flex items-center gap-2 text-body-xs text-gray-500 font-medium">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </p>
          </Link>

          {/* Floating Card 2: Learning Progress 55% (top-right) */}
          <Link
            to="/course/build-digital-asset/lessons"
            className="absolute -right-2 top-12 z-20 hidden w-[240px] rounded-2xl bg-white/95 p-5 text-left shadow-2xl backdrop-blur-md transition hover:scale-105 hover:bg-white sm:flex flex-col gap-2 border border-white/40"
          >
            <p className="text-body-xs font-semibold text-gray-700">Learning Progress</p>
            <p className="font-poppins text-[42px] font-bold leading-none text-gray-950">55%</p>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-lime transition-all duration-1000" />
            </div>
          </Link>

          {/* Floating Card 3: Happy Students (bottom-left) */}
          <Link
            to="/course/learn-figma-from-basic/reviews"
            className="absolute left-4 bottom-8 z-20 hidden rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md transition hover:scale-105 hover:bg-white sm:flex flex-col gap-2.5 border border-white/40"
          >
            <div>
              <p className="font-poppins text-sm font-semibold text-gray-950">Happy Students</p>
              <p className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <span className="font-bold text-gray-950">4.5</span>
                <span>(240)</span>
                <span className="text-amber-500 font-bold">★</span>
              </p>
            </div>
            {/* Student avatars stack + 2K+ badge */}
            <div className="flex items-center -space-x-2">
              {STUDENT_AVATARS.slice(0, 5).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Student ${i + 1}`}
                  className="size-8 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                />
              ))}
              <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-white bg-lime text-[11px] font-bold text-gray-950 shadow-sm shrink-0">
                2K+
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
