import CourseCard from "@/components/marketing/CourseCard";

/**
 * Images live in: src/assets/images/hero/  (same folder as the hero)
 * Reused from the hero: hero-man.png, hero-avatar-1..5.png, shape-squiggle-lime.png
 * New: growth-woman.png
 * Course thumbnail comes from: src/assets/images/course-figma.png (already in your project)
 */
const hero = (name: string) =>
  new URL(`../../assets/images/hero/${name}`, import.meta.url).href;
const courseImg = new URL("../../assets/images/course-figma.png", import.meta.url).href;

const IMG = {
  man: hero("hero-man.png"),
  woman: hero("growth-woman.png"),
  squiggle: hero("shape-squiggle-lime.png"),
};
const AVATARS = [1, 2, 3, 4, 5].map((n) => hero(`Ellipse-${n}.png`));

const LIME = "#c9ff00";

const STATS = [
  { value: "12K+", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const PERKS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const cutoutShadow = "drop-shadow-[0_30px_40px_rgba(0,30,140,0.22)]";

export default function GrowthSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#fafcf6] py-24"
      aria-label="Professional growth and creator tools"
    >
      {/* Soft background glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 size-[620px] rounded-full bg-lime/40 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -right-48 top-0 size-[720px] rounded-full bg-[#c9ccff]/60 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -right-48 top-[900px] size-[640px] rounded-full bg-[#c9ccff]/50 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 size-[620px] rounded-full bg-lime/40 blur-[150px]" />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-[90px] px-6">
        {/* ============ ROW 1 ============ */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[40px]">
              Your Path to Professional <br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="max-w-[460px] text-[16px] leading-[1.7] text-gray-700">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex items-start gap-14">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-poppins text-[36px] font-semibold leading-none text-brand">{s.value}</span>
                  <span className="text-[14px] text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual (600 x 560) */}
          <div className="relative mx-auto hidden h-[560px] w-[600px] lg:block">
            <div className="absolute left-[36px] top-[7px] scale-60">
              <CourseCard
                image={courseImg}
                title="Learn Figma from Basic"
                author="purepearl studio"
                price="25"
                slug="learn-figma-from-basic"
              />
            </div>

            <img
              src={IMG.squiggle}
              alt=""
              className="pointer-events-none absolute left-[493px] top-[73px] w-[110px] select-none"
            />

            <img
              src={IMG.man}
              alt="Student with headphones holding a laptop"
              className={`pointer-events-none absolute left-[105px] top-[56px] z-10 w-[500px] select-none ${cutoutShadow}`}
            />

            <div className="absolute left-[380px] top-[150px] z-20 flex h-[142px] w-[223px] flex-col justify-between rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-[14px] font-medium leading-none text-gray-950">Learning Progress</p>
              <p className="font-poppins text-[44px] font-semibold leading-none text-gray-950">55%</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[55%] rounded-full" style={{ backgroundColor: LIME }} />
              </div>
            </div>
          </div>
        </div>

        {/* ============ ROW 2 ============ */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Visual (600 x 600) */}
          <div className="relative mx-auto hidden h-[600px] w-[600px] lg:block">
            <img
              src={IMG.squiggle}
              alt=""
              className="pointer-events-none absolute left-[346px] top-[142px] w-[130px] select-none"
            />

            <img
              src={IMG.woman}
              alt="Creator with headphones holding a tablet"
              className={`pointer-events-none absolute left-[85px] top-[32px] w-[395px] z-30 select-none ${cutoutShadow}`}
            />

            {/* Total revenue */}
            <div className="absolute left-0 top-[47px] z-20 flex h-[104px] w-[242px] flex-col justify-between rounded-xl bg-brand p-4 text-white shadow-xl">
              <div>
                <p className="text-[12px] font-medium leading-none">Total Revenue</p>
                <p className="mt-1 text-[10px] leading-none text-white/70">July 1-28</p>
              </div>
              <p className="font-poppins text-[22px] font-semibold leading-none">$120.29</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[55%] rounded-full" style={{ backgroundColor: LIME }} />
              </div>
            </div>

            {/* Year to date */}
            <div className="absolute left-0 top-[195px] z-20 flex h-[136px] w-[132px] flex-col justify-between rounded-xl bg-brand p-4 text-white shadow-xl">
              <div>
                <p className="text-[12px] font-medium leading-none">Year to Date</p>
                <p className="mt-1 text-[10px] leading-none text-white/70">2023</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-bold leading-none text-gray-950"
                  style={{ backgroundColor: LIME }}
                >
                  +12%
                </span>
                <p className="font-poppins text-[18px] font-semibold leading-none">$1,200.38</p>
              </div>
            </div>

            {/* Happy students */}
            <div className="absolute left-[283px] top-[380px] z-40 flex h-[116px] w-[249px] flex-col justify-between rounded-2xl bg-white p-4 shadow-xl">
              <div>
                <p className="text-[16px] font-medium leading-none text-gray-950">Happy Students</p>
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
                  className="relative z-10 -ml-2 grid size-[32px] shrink-0 place-items-center rounded-full text-[11px] font-bold text-gray-950"
                  style={{ backgroundColor: LIME }}
                >
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[40px]">
              Create &amp; Manage <br className="hidden sm:inline" /> Courses Easily.
            </h2>
            <p className="max-w-[480px] text-[16px] leading-[1.7] text-gray-700">
              <strong className="font-semibold text-gray-950">ByteSpace</strong> supports individuals or entities in
              the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4 pt-2">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-[16px] text-gray-950">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
