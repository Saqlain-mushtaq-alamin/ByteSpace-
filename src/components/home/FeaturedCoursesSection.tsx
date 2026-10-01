import SectionHeading from "./SectionHeading";
import CategoryTabs from "./CategoryTabs";
import CourseGrid from "./CourseGrid";

/** Combines Frame 13:249.. grid (33:683), the heading, and the tab list (21:33) */
export default function FeaturedCoursesSection() {
  return (
    <section id="courses" className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 px-6 py-24">
      <SectionHeading eyebrow="Featured Categories" title="Innovative Paths to Knowledge" action="View More" />
      <CategoryTabs />
      <CourseGrid />
    </section>
  );
}
