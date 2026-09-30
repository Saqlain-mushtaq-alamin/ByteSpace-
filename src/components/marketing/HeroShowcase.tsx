import CourseCard from "./CourseCard";
import HappyStudentsCard from "./HappyStudentsCard";
import { COURSE_IMAGES, Ring3D, Cone1, Cone2 } from "@/components/shared/DesignAssets";

/**
 * Left hero showcase for Auth pages (Login & Register)
 * Matches Figma 49:252 and planning/homepage.md lines 11535-11850:
 * - Floating course cards
 * - 3D Torus Ring, Coral Cone, and Violet Cone
 * - Lime Happy Students badge
 */
export default function HeroShowcase() {
  return (
    <div className="relative mt-8 h-[600px] w-full select-none">
      {/* 3D Torus Ring behind first card */}
      <div className="absolute left-[30px] top-[10px] z-0 animate-pulse transition duration-1000">
        <Ring3D className="size-[150px] drop-shadow-2xl" />
      </div>

      {/* Course Card 1: Build Digital Asset */}
      <div className="absolute left-0 top-[75px] z-10 transition duration-300 hover:z-30">
        <CourseCard
          image={COURSE_IMAGES.digitalAsset}
          title="Build Digital Asset"
          author="purepearl studio"
          price="25"
        />
      </div>

      {/* Course Card 2: the Power of Big Data (shifted right and up) */}
      <div className="absolute left-[130px] top-[15px] z-20 transition duration-300 hover:z-30">
        <CourseCard
          image={COURSE_IMAGES.bigData}
          title="the Power of Big Data"
          author="purepearl studio"
          price="25"
        />
      </div>

      {/* Coral Cone 1 floating at bottom left */}
      <div className="absolute -left-6 bottom-4 z-20">
        <Cone1 className="size-[170px] drop-shadow-2xl" />
      </div>

      {/* Violet Cone 2 floating at right */}
      <div className="absolute right-0 top-[300px] z-10">
        <Cone2 className="size-[160px] drop-shadow-2xl" />
      </div>

      {/* Lime Happy Students Card floating in the foreground */}
      <div className="absolute left-[190px] bottom-[30px] z-30 shadow-2xl">
        <HappyStudentsCard />
      </div>
    </div>
  );
}
