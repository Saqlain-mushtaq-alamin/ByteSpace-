import CourseCard from "@/components/marketing/CourseCard";
import { COURSE_IMAGES, STUDENT_AVATARS } from "@/components/shared/DesignAssets";

const COURSES = [
  {
    image: COURSE_IMAGES.figma,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    price: "25",
    slug: "learn-figma-from-basic",
  },
  {
    image: COURSE_IMAGES.digitalAsset,
    title: "Build Digital Asset",
    author: "purepearl studio",
    price: "25",
    slug: "build-digital-asset",
  },
  {
    image: COURSE_IMAGES.bigData,
    title: "the Power of Big Data",
    author: "purepearl studio",
    price: "25",
    slug: "the-power-of-big-data",
  },
  {
    image: COURSE_IMAGES.productivity,
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    price: "25",
    slug: "balancing-productivity-and-self-care",
  },
  {
    image: COURSE_IMAGES.money,
    title: "Mastering Money Management",
    author: "purepearl studio",
    price: "25",
    slug: "mastering-money-management",
  },
  {
    image: COURSE_IMAGES.startup,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    price: "25",
    slug: "from-idea-to-startup-success",
  },
] as const;

/** 3-column, 2-row grid of CourseCard (matching Figma & planning/homepage.md) */
export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {COURSES.map((c) => (
        <CourseCard
          key={c.title}
          image={c.image}
          title={c.title}
          author={c.author}
          price={c.price}
          slug={c.slug}
          avatars={STUDENT_AVATARS}
        />
      ))}
    </div>
  );
}
