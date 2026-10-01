import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

/**
 * All hero images live in: src/assets/images/hero/
 * (see the file names used below)
 */
const hero = (name: string) =>
  new URL(`../../assets/images/hero/${name}`, import.meta.url).href;

const IMG = {
  man: hero("hero-man.png"),
  squiggleLime: hero("shape-squiggle-lime.png"), // big lime squiggle, left
  squiggleWhiteSmall: hero("shape-squiggle-white-small.png"), // small white squiggle, left
  cylinder: hero("shape-cylinder-lime.png"), // lime cylinder, top right
  cone: hero("shape-cone-white.png"), // white cone, right
  ring: hero("shape-ring-white.png"), // white ring, bottom left
  squiggleWhite: hero("shape-squiggle-white.png"), // white squiggle, bottom right
};

const AVATARS = [1, 2, 3, 4, 5, 6].map((n) => hero(`Ellipse-${n}.png`));

const LIME = "#c9ff00";

/**
 * Hero matched to the design: 1440 x 1024 canvas.
 * Decorations sit on a fixed 1440px frame centered in the section,
 * so they crop (not squash) on narrower screens.
 */
export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <section className="relative h-[1024px] w-full overflow-hidden bg-brand bg-grid text-white">
      {/* ---------- Decorative canvas (1440px frame) ---------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 select-none md:block"
      >
        {/* Lime half circle */}
        <div
          className="absolute left-1/2 top-[583px] size-[1118px] -translate-x-1/2 rounded-full"
          style={{ backgroundColor: LIME }}
        />

        {/* 3D shapes */}
        <img src={IMG.squiggleLime} alt="" className="absolute left-0 top-[285px] w-[200px]" />
        <img src={IMG.squiggleWhiteSmall} alt="" className="absolute left-[215px] top-[505px] w-[115px]" />
        <img src={IMG.cylinder} alt="" className="absolute -right-2 top-[255px] w-[180px]" />
        <img src={IMG.cone} alt="" className="absolute right-[182px] top-[485px] w-[130px]" />
        <img src={IMG.ring} alt="" className="absolute left-[68px] top-[740px] w-[240px]" />
        <img src={IMG.squiggleWhite} alt="" className="absolute right-[50px] top-[710px] w-[200px]" />

        {/* Man (cut-out) standing on the lime circle */}
        <img
          src={IMG.man}
          alt="Smiling student with headphones holding a laptop"
          className="absolute bottom-0 left-[410px] w-[680px]"
        />

        {/* Card: UI/UX Design */}
        <div className="absolute left-[405px] top-[639px] flex h-[70px] w-[208px] flex-col justify-center gap-1 rounded-2xl bg-white px-4">
          <p className="text-[17px] font-medium leading-none text-gray-950">UI/UX Design</p>
          <p className="text-[12px] leading-none text-gray-400">
            200 Courses <span className="mx-1">•</span> 1000+ Students
          </p>
        </div>

        {/* Card: Learning Progress */}
        <div className="absolute left-[842px] top-[652px] flex h-[130px] w-[232px] flex-col justify-between rounded-2xl bg-white p-4">
          <p className="text-[14px] font-medium leading-none text-gray-950">Learning Progress</p>
          <p className="font-poppins text-[44px] font-semibold leading-none text-gray-950">55%</p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full" style={{ backgroundColor: LIME }} />
          </div>
        </div>

        {/* Card: Happy Students */}
        <div className="absolute left-[329px] top-[838px] flex h-[120px] w-[258px] flex-col justify-between rounded-2xl bg-white p-4">
          <div>
            <p className="text-[17px] font-medium leading-none text-gray-950">Happy Students</p>
            <p className="mt-1.5 flex items-center gap-1 text-[12px] leading-none text-gray-500">
              4.5 <span className="text-gray-400">(240)</span>
              <span className="text-[14px]" style={{ color: LIME }}>★</span>
            </p>
          </div>
          <div className="flex items-center">
            {AVATARS.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="size-[28px] rounded-full object-cover"
                style={{ marginLeft: i === 0 ? 0 : -6 }}
              />
            ))}
            <span
              className="relative z-10 -ml-3 grid size-[40px] shrink-0 place-items-center rounded-full text-[13px] font-bold text-gray-950"
              style={{ backgroundColor: LIME }}
            >
              2K+
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Text + search (centered) ---------- */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-6 pt-[168px] text-center">
        <h1 className="max-w-[900px] font-poppins text-[44px] font-semibold leading-[1.2] sm:text-[60px] lg:text-[72px]">
          Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
        </h1>

        <p className="mt-[34px] max-w-[820px] text-[16px] leading-[1.6] text-white sm:text-[18px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-[59px] flex w-full max-w-[580px] items-center gap-[17px]"
        >
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#82868e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="w-full bg-transparent text-[18px] text-gray-950 outline-none placeholder:text-gray-400"
            />
          </label>
          <button
            type="submit"
            className="h-[50px] shrink-0 cursor-pointer rounded-full px-6 text-[18px] font-medium text-gray-950 transition hover:brightness-95 active:scale-[0.98]"
            style={{ backgroundColor: LIME }}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
} 