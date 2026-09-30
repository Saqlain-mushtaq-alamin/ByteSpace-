import HomeHeader from "@/components/home/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import LogoPartners from "@/components/home/LogoPartners";
import CategoryTabs from "@/components/home/CategoryTabs";
import CourseGrid from "@/components/home/CourseGrid";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import GrowthSection from "@/components/home/GrowthSection";
import CtaSection from "@/components/home/CtaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";

/**
 * ByteSpace Home Page matching Page 0 of ByteSpace New Check website.pdf (1440x6377):
 * 1. HeroSection with 3D shapes, student visual, floating cards & search bar
 * 2. LogoPartners bar
 * 3. "Discover Your Passion, Build Your Skills" with 3-tier category pills & 6 course cards
 * 4. "Explore Diverse Learning Paths" with 6 custom vector category cards
 * 5. GrowthSection (Professional Growth + Create & Manage Courses)
 * 6. CtaSection ("Unlock Your Potential as a Creator with ByteSpace")
 * 7. TestimonialsSection ("Discover What Our Community Is Saying")
 * 8. NewsletterFooter (Site footer with newsletter form & navigation)
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* 1. HERO SECTION */}
      <div className="relative">
        <HomeHeader />
        <HeroSection />
      </div>

      {/* 2. LOGO PARTNERS */}
      <LogoPartners />

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS + CATEGORY TABS + 6 COURSES */}
      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 px-6 py-24" aria-label="Discover courses">
        <div className="mx-auto flex max-w-[840px] flex-col gap-6 text-center">
          <h2 className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[44px]">
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="text-body-m leading-[1.7] text-gray-700 sm:text-body-l">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
            different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3-tier Category Pills */}
        <CategoryTabs />

        {/* 6 Course Cards Grid */}
        <div className="pt-4">
          <CourseGrid />
        </div>
      </section>

      {/* 4. EXPLORE DIVERSE LEARNING PATHS + 6 CATEGORY CARDS */}
      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-12 px-6 pb-24 pt-8" aria-label="Learning paths">
        <div className="mx-auto flex max-w-[880px] flex-col gap-4 text-center">
          <h2 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[40px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-body-m leading-[1.7] text-gray-700">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
            various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        {/* 6 Category Cards with Lime Circles & Custom Vector Icons */}
        <CategoriesGrid />
      </section>

      {/* 5. GROWTH SECTION (Professional Growth + Create & Manage Courses) */}
      <GrowthSection />

      {/* 6. CREATOR CALL TO ACTION */}
      <CtaSection />

      {/* 7. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 8. NEWSLETTER FOOTER */}
      <Footer />
    </div>
  );
}
