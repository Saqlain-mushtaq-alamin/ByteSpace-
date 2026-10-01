import CourseCard from "./CourseCard";
import { COURSE_IMAGES, STUDENT_AVATARS } from "@/components/shared/DesignAssets";

/**
 * Static imports: if a file name below does not exist, Vite shows a red error
 * naming the exact missing file. Change a name here if yours is different.
 */
// 3D shapes (your PNGs)
import ringLime from "@/assets/images/hero/shape-ring-lime.png";
import coneLime from "@/assets/images/hero/shape-cone-lime.png";
import squiggleWhite from "@/assets/images/hero/shape-squiggle-white-small.png";

const AVATARS = STUDENT_AVATARS.slice(0, 6);

/**
 * HeroShowcase
 *
 * Desktop (lg: >= 1024px):
 * - Positions are exact Figma coordinates measured from the 1440 x 1024 frame.
 * - Sits in the left column with absolute placement.
 *
 * Tablet & Mobile (< 1024px):
 * - Scales smoothly and crops dead space so it looks stunning and fits without overflow.
 */
export default function HeroShowcase() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[340px] select-none sm:h-[460px] sm:max-w-[420px] md:h-[500px] md:max-w-[480px] lg:absolute lg:inset-0 lg:h-full lg:max-w-none">
      {/* Scaling stage for mobile and tablet, 100% natural on desktop */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[280px] origin-top scale-[0.6] sm:scale-[0.72] md:scale-[0.82] lg:inset-0 lg:left-0 lg:top-0 lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:transform-none">
        <div className="relative h-[870px] w-[500px] lg:h-full lg:w-full">
          {/* Back card (mostly covered) */}
          <div className="absolute left-[2px] top-[386px] z-10">
            <CourseCard image={COURSE_IMAGES.digitalAsset} title="Build Digital Asset" author="purepearl studio" price="25" />
          </div>

          {/* Front card */}
          <div className="absolute left-[112px] top-[298px] z-20">
            <CourseCard image={COURSE_IMAGES.bigData} title="the Power of Big Data" author="purepearl studio" price="25" />
          </div>

          {/* 3D shapes */}
          <img src={ringLime} alt="" draggable={false} className="pointer-events-none absolute left-[59px] top-[339px] z-30 w-[95px]" />
          <img src={coneLime} alt="" draggable={false} className="pointer-events-none absolute left-[2px] top-[684px] z-30 w-[130px]" />
          <img src={squiggleWhite} alt="" draggable={false} className="pointer-events-none absolute left-[373px] top-[644px] z-30 w-[120px]" />

          {/* Happy Students (lime card) */}
          <div className="absolute left-[232px] top-[732px] z-30 flex h-[122px] w-[251px] flex-col justify-between rounded-2xl bg-lime p-4">
            <div>
              <p className="text-[16px] font-medium leading-none text-gray-950">Happy Students</p>
              <p className="mt-1.5 flex items-center gap-1 text-[12px] leading-none text-gray-700">
                4.5 <span className="text-gray-600">(240)</span>
                <span className="text-[14px] text-amber-500">★</span>
              </p>
            </div>
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="size-8 rounded-full object-cover ring-2 ring-lime"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                />
              ))}
              <span className="relative z-10 -ml-2 grid size-10 shrink-0 place-items-center rounded-full bg-gray-950 text-[12px] font-bold text-white ring-2 ring-lime">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
