import { COURSE_IMAGES, STUDENT_AVATARS, Cone2 } from "@/components/shared/DesignAssets";

const GROWTH_STUDENT_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";
const CREATOR_IMG = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";

const CREATOR_PERKS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24" aria-label="Professional growth and creator tools">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-40 size-[500px] rounded-full bg-lime/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 size-[500px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-32 px-6">
        {/* ROW 1: "Your Path to Professional Growth Starts Here!" */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text & Stats */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[44px]">
                Your Path to Professional <br /> Growth Starts Here!
              </h2>
              <p className="max-w-[500px] text-body-m leading-[1.7] text-gray-700">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
                career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or
                embark on a new career path entirely, we have the resources you need.
              </p>
            </div>

            {/* Stats row from Figma & homepage.md */}
            <div className="flex items-center gap-12 pt-2">
              <div className="flex flex-col">
                <span className="font-poppins text-[40px] font-bold text-brand leading-none">12K+</span>
                <span className="text-body-m text-gray-700 mt-1 font-medium">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-[40px] font-bold text-brand leading-none">70+</span>
                <span className="text-body-m text-gray-700 mt-1 font-medium">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-[40px] font-bold text-brand leading-none">16</span>
                <span className="text-body-m text-gray-700 mt-1 font-medium">Creators</span>
              </div>
            </div>
          </div>

          {/* Right: Visual with student photo, course card, progress card */}
          <div className="relative flex justify-center">
            {/* Student photo */}
            <div className="relative h-[480px] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-2xl">
              <img src={GROWTH_STUDENT_IMG} alt="Student learning" className="size-full object-cover" />
            </div>

            {/* Floating 3D decorative shape */}
            <div className="pointer-events-none absolute -right-8 -top-8 size-[160px]">
              <Cone2 className="size-full opacity-85 drop-shadow-xl" />
            </div>

            {/* Floating Card Left: Learn Figma Mini Card */}
            <div className="absolute -bottom-6 -left-6 hidden w-[260px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:block transition hover:scale-105">
              <div className="relative mb-2 h-24 w-full overflow-hidden rounded-xl bg-gray-100">
                <img src={COURSE_IMAGES.figma} alt="Learn Figma" className="size-full object-cover" />
                <span className="absolute bottom-1.5 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs">
                  17 Lessons
                </span>
              </div>
              <p className="font-poppins text-xs font-semibold text-gray-950 truncate">Learn Figma from Basic</p>
              <p className="text-[11px] text-gray-500">by purepearl studio</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-poppins text-xs font-bold text-brand">$25/lifetime</span>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-700 font-medium">Beginner</span>
              </div>
            </div>

            {/* Floating Card Right: Learning Progress 55% */}
            <div className="absolute -right-4 top-16 hidden w-[180px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:block transition hover:scale-105">
              <p className="text-[11px] font-semibold text-gray-500">Learning Progress</p>
              <p className="font-poppins text-3xl font-bold text-gray-950">55%</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[55%] rounded-full bg-lime" />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: "Create & Manage Courses Easily." */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Visual with female creator photo & revenue widgets */}
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="relative h-[480px] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-2xl">
              <img src={CREATOR_IMG} alt="Creator dashboard" className="size-full object-cover" />
            </div>

            {/* Blue Floating Card: Total Revenue */}
            <div className="absolute -left-6 top-6 hidden w-[170px] rounded-2xl bg-brand p-4 text-white shadow-2xl sm:block transition hover:scale-105">
              <p className="text-[11px] font-medium text-white/80">Total Revenue</p>
              <p className="text-[10px] text-white/60">July 1-28</p>
              <p className="font-poppins text-2xl font-bold text-white mt-1">$120.29</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/20">
                <div className="h-full w-2/3 rounded-full bg-lime" />
              </div>
            </div>

            {/* White Floating Card: Year to Date */}
            <div className="absolute -left-8 top-36 hidden w-[170px] rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:block transition hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-gray-950">Year to Date</p>
                  <p className="text-[10px] text-gray-400">2023</p>
                </div>
                <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold text-gray-950">+12%</span>
              </div>
              <p className="font-poppins text-2xl font-bold text-gray-950 mt-1">$1,200.38</p>
            </div>

            {/* Bottom Floating Card: Happy Students */}
            <div className="absolute -bottom-4 right-0 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl sm:block transition hover:scale-105">
              <div>
                <p className="font-poppins text-xs font-semibold text-gray-950">Happy Students</p>
                <p className="flex items-center gap-1 text-[11px] text-gray-500">
                  <span className="font-bold text-gray-950">4.5</span>
                  <span>(240)</span>
                  <span className="text-amber-500 font-bold">★</span>
                </p>
              </div>
              <div className="mt-2 flex items-center -space-x-1.5">
                {STUDENT_AVATARS.slice(0, 5).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="size-7 rounded-full border-2 border-white object-cover shrink-0"
                  />
                ))}
                <span className="relative z-10 flex size-7 items-center justify-center rounded-full border-2 border-white bg-lime text-[10px] font-bold text-gray-950 shrink-0">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text & Checklist */}
          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[44px]">
                Create &amp; Manage <br /> Courses Easily.
              </h2>
              <p className="max-w-[480px] text-body-m leading-[1.7] text-gray-700">
                ByteSpace supports individuals or entities in the creation, publication, and administration of
                educational courses with automated analytics, instant monetization, and community management tools.
              </p>
            </div>

            {/* Checklist with Blue Checkmark Circles */}
            <ul className="flex flex-col gap-4">
              {CREATOR_PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3.5 text-body-l font-semibold text-gray-950">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-xs">
                    ✓
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
