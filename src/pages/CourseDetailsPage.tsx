import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import CourseCard from "@/components/marketing/CourseCard";
import Breadcrumb from "@/components/shared/Breadcrumb";
import RatingStars from "@/components/shared/RatingStars";
import {
  IconLevel,
  IconStar,
  IconUsers,
  IconShare,
  IconPlay,
  IconCheckCircle,
  IconResources,
  IconVideo,
  IconCertificate,
  IconConsultation,
  IconModule,
} from "@/components/shared/CourseIcons";

// Images
import heroCourseImg from "@/assets/images/course-build-digital-asset.png";
import previewImg1 from "@/assets/images/course-build-digital-asset.png";
import previewImg2 from "@/assets/images/course-ui.png";
import previewImg3 from "@/assets/images/creator-dashboard.png";
import previewImg4 from "@/assets/images/course-big-data.png";
import avatarCreator from "@/assets/images/avatars/avatar-1.png";

const av = (n: number) => new URL(`../assets/images/avatars/avatar-${n}.png`, import.meta.url).href;
const avatars = [1, 2, 3, 4].map(av);
const st = (n: number) => new URL(`../assets/images/avatars/student-${n}.png`, import.meta.url).href;
const studentAvatars = [1, 2, 3, 4].map(st);
const img = (name: string) => new URL(`../assets/images/${name}.png`, import.meta.url).href;

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const PREVIEW_CARDS = [
  { src: previewImg1, title: "Asset Creation Workspace", tag: "Figma & 3D" },
  { src: previewImg2, title: "Design System Fundamentals", tag: "UI Components" },
  { src: previewImg3, title: "Creator Production Pipeline", tag: "Workflow" },
  { src: previewImg4, title: "Analytics & Platform Launch", tag: "Monetization" },
];

const MODULE_OVERVIEW = [
  {
    number: "01",
    title: "Module 1: Introduction to Digital Assets",
    duration: "45 mins • 4 lessons",
    description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    number: "02",
    title: "Module 2: Design Principles for Impact",
    duration: "1 hr 12 mins • 6 lessons",
    description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    number: "03",
    title: "Module 3: User-Centric Design Strategies",
    duration: "52 mins • 5 lessons",
    description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    number: "04",
    title: "Module 4: Interactive Media and Engagement",
    duration: "1 hr 30 mins • 7 lessons",
    description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    number: "05",
    title: "Module 5: Project Showcase and Critique",
    duration: "48 mins • 4 lessons",
    description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    number: "06",
    title: "Module 6: Optimizing for Various Platforms",
    duration: "1 hr 05 mins • 5 lessons",
    description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const SIDEBAR_LESSONS = [
  { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const INCLUDED_FEATURES = [
  { label: "Learning Resources", icon: IconResources },
  { label: "Quality Lesson Videos", icon: IconVideo },
  { label: "Certificate of Completion", icon: IconCertificate },
  { label: "Private Consultation", icon: IconConsultation },
];

const RELATED = [
  { image: "course-build-digital-asset", title: "Build Digital Asset" },
  { image: "course-big-data", title: "the Power of Big Data" },
  { image: "course-ui", title: "UI/UX Design Fundamentals" },
];

export default function CourseDetailsPage() {
  const { slug } = useParams();
  const courseSlug = slug || "build-digital-asset";
  const [activeTab, setActiveTab] = useState<"About" | "Lessons" | "Reviews">("About");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const courseTitle = slug ? slug.replace(/-/g, " ") : "Build Digital Asset: A Comprehensive Guide";

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Build Digital Asset: A Comprehensive Guide",
          text: "Unlock the Power of Digital Creation with Expert Guidance",
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2500);
    } catch {
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* Toast Notification */}
      {sharedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-2xl bg-gray-950 px-5 py-3 text-body-s font-medium text-white shadow-2xl animate-fade-in border border-white/10">
          <IconCheckCircle className="size-5 shrink-0" />
          <span>Course link copied to clipboard!</span>
        </div>
      )}

      {/* Video Modal Preview */}
      {isPlayingPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gray-950 shadow-2xl border border-white/10">
            <button
              onClick={() => setIsPlayingPreview(false)}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40 cursor-pointer"
              aria-label="Close video preview"
            >
              ✕
            </button>
            <div className="aspect-video w-full bg-black flex flex-col items-center justify-center relative">
              <img src={heroCourseImg} alt="Preview background" className="absolute inset-0 size-full object-cover opacity-40 blur-xs" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
                <span className="grid size-20 place-items-center rounded-full bg-lime text-[28px] text-gray-950 shadow-xl">
                  ▶
                </span>
                <p className="font-poppins text-2xl font-bold text-white">Course Video Preview</p>
                <p className="max-w-md text-body-m text-gray-200">
                  Welcome to Build Digital Asset! Explore modules, master design principles, and build real digital products.
                </p>
                <Link
                  to={`/course/${courseSlug}/lessons`}
                  className="rounded-pill bg-lime px-8 py-3 text-label-m font-bold text-gray-950 transition hover:bg-lime/90"
                >
                  Start Full Lessons →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION (Figma frame 55:4066 CourseHeroSection) */}
      <section className="relative w-full bg-brand bg-grid text-white pb-20 pt-[120px] overflow-hidden" aria-labelledby="course-title">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full bg-brand-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 size-[400px] rounded-full bg-lime/10 blur-[140px]" />

        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-6">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Courses", to: "/search" },
              { label: "Digital Asset Creation" },
            ]}
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-[780px] flex-col gap-4">
              <h1 id="course-title" className="font-poppins text-[36px] font-semibold leading-[1.2] sm:text-[44px]">
                {courseTitle}
              </h1>
              <p className="font-poppins text-[18px] font-medium text-gray-100 sm:text-[20px]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-label-l text-gray-100">
                by{" "}
                <Link to="/creator/purepearl-studio" className="font-semibold text-lime hover:underline transition">
                  purepearl studio
                </Link>
              </p>

              {/* Course metadata badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2 rounded-3xl bg-white/95 px-5 py-2 text-gray-950 shadow-md backdrop-blur-md">
                  <IconLevel className="size-5 text-brand" />
                  <span className="text-body-m font-medium">Intermediate</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-3xl bg-white/95 px-5 py-2 text-gray-950 shadow-md backdrop-blur-md">
                  <IconStar className="size-5 text-amber-500" />
                  <span className="text-body-m font-medium">4.8 (172 reviews)</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-3xl bg-white/95 px-5 py-2 text-gray-950 shadow-md backdrop-blur-md">
                  <IconUsers className="size-5 text-brand" />
                  <span className="text-body-m font-medium">199 Students</span>
                </div>
              </div>
            </div>

            {/* Share button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex h-fit items-center justify-center gap-2 self-start rounded-pill bg-lime px-6 py-2.5 text-label-m font-semibold text-gray-950 shadow-md transition hover:bg-lime/90 hover:scale-102 cursor-pointer"
              aria-label="Share this course"
            >
              <IconShare className="size-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Video Preview Card (720px in Figma, responsive full-width container) */}
          <div className="relative mt-4 aspect-video max-w-[720px] w-full overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-gray-900 to-gray-950 shadow-2xl group">
            <img
              src={heroCourseImg}
              alt="Course video preview cover"
              className="size-full object-cover transition duration-500 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-black/30 to-transparent" />

            <button
              type="button"
              onClick={() => setIsPlayingPreview(true)}
              aria-label="Play course preview"
              className="absolute inset-0 m-auto flex size-24 items-center justify-center rounded-3xl border border-white/30 bg-black/40 text-lime shadow-2xl backdrop-blur-xl transition hover:scale-110 hover:bg-black/60 cursor-pointer"
            >
              <IconPlay className="ml-1 size-10" />
            </button>

            <div className="absolute bottom-4 left-6 flex items-center gap-3 text-body-s text-white">
              <span className="rounded-pill bg-lime/90 px-3 py-1 font-semibold text-gray-950 text-xs">PREVIEW</span>
              <span>Watch 3 min introductory tour</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR GRID */}
      <section className="mx-auto w-[1200px] max-w-full px-6 py-16" aria-label="Course curriculum and details">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_400px]">
          {/* LEFT: Overview, Modules, Reviews Tabs */}
          <div className="flex flex-col gap-10">
            {/* Nav Tabs */}
            <nav className="inline-flex gap-3 rounded-pill bg-gray-50 p-1.5 border border-gray-100" aria-label="Course sections">
              {(["About", "Lessons", "Reviews"] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-pill px-6 py-2.5 text-body-m font-semibold transition cursor-pointer ${
                      isActive
                        ? "bg-lime text-gray-950 shadow-sm"
                        : "text-gray-700 hover:text-gray-950 hover:bg-gray-100/60"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </nav>

            {/* TAB: About */}
            {activeTab === "About" && (
              <div className="flex flex-col gap-10">
                {/* Description */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Description</h2>
                  <div className="flex flex-col gap-4 text-body-m leading-[1.7] text-gray-700">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course,{" "}
                      <strong className="text-gray-950">“Build Digital Assets: A Comprehensive Guide.”</strong> This transformative
                      learning experience invites you to delve deep into the intricacies of crafting impactful digital content.
                      From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is
                      meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset
                      creation.
                    </p>
                    <p>
                      In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the
                      digital realm.
                    </p>
                    <p>
                      As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of
                      design principles that drive impactful creations. Uncover the secrets behind effective visual communication,
                      exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak Gallery */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Sneak Peak</h2>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {PREVIEW_CARDS.map((preview, i) => (
                      <div
                        key={preview.title}
                        onClick={() => setIsPlayingPreview(true)}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md cursor-pointer"
                      >
                        <div className="relative h-[120px] w-full overflow-hidden bg-gray-100">
                          <img
                            src={preview.src}
                            alt={preview.title}
                            className="size-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-lime backdrop-blur-xs">
                            {preview.tag}
                          </span>
                        </div>
                        <div className="p-3">
                          <p className="text-body-xs font-semibold text-gray-950 line-clamp-1">{preview.title}</p>
                          <p className="text-[11px] text-gray-500">Preview {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Key Points</h2>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {KEY_POINTS.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-body-m text-gray-700">
                        <IconCheckCircle className="size-6 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: Lessons / Modules */}
            {activeTab === "Lessons" && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Explore the Modules</h2>
                  <p className="text-body-m text-gray-700">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
                    practical insights and hands-on experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {MODULE_OVERVIEW.map((module) => (
                    <article
                      key={module.number}
                      className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start"
                    >
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime text-gray-950">
                        <IconModule className="size-6" />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-poppins text-base font-semibold text-gray-950">{module.title}</h3>
                          <span className="rounded-pill bg-gray-50 px-3 py-1 text-body-xs font-medium text-brand">
                            {module.duration}
                          </span>
                        </div>
                        <p className="text-body-s text-gray-700 leading-[1.6]">{module.description}</p>
                        <Link
                          to={`/course/${courseSlug}/lessons`}
                          className="mt-2 text-body-s font-semibold text-brand hover:underline inline-flex items-center gap-1"
                        >
                          View lessons in player →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Reviews */}
            {activeTab === "Reviews" && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-poppins text-[44px] font-bold text-gray-950">4.8</p>
                      <RatingStars value={4.8} size={22} count={172} />
                      <p className="mt-1 text-body-s text-gray-500">Based on 172 verified student ratings</p>
                    </div>
                    <Link
                      to="/reviews"
                      className="rounded-pill border border-gray-200 px-6 py-2.5 text-label-s font-semibold text-gray-950 transition hover:bg-gray-50 self-start sm:self-auto"
                    >
                      View All Reviews
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      name: "Alex Johnson",
                      role: "Product Designer",
                      avatar: studentAvatars[0],
                      date: "2 days ago",
                      text: "PurePearl Studio’s explanations on typography and responsive tokens are gold. I applied the layout system directly to my client deliverables!",
                    },
                    {
                      name: "Elena Rostova",
                      role: "3D Creator & Illustrator",
                      avatar: studentAvatars[1],
                      date: "1 week ago",
                      text: "The best comprehensive guide for digital creators on ByteSpace. Step-by-step clarity, excellent resource files, and immediate value.",
                    },
                    {
                      name: "Marcus Vance",
                      role: "Full Stack Engineer",
                      avatar: studentAvatars[2],
                      date: "2 weeks ago",
                      text: "As a developer wanting to design my own products, this course closed the gap between code and aesthetic design principles completely.",
                    },
                  ].map((rev) => (
                    <div key={rev.name} className="flex gap-4 rounded-2xl border border-gray-100 p-5">
                      <img src={rev.avatar} alt={rev.name} className="size-12 rounded-full object-cover shrink-0" />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <p className="text-label-m font-semibold text-gray-950">{rev.name}</p>
                          <span className="text-body-xs text-gray-400">{rev.date}</span>
                        </div>
                        <p className="text-body-xs text-gray-500">{rev.role}</p>
                        <RatingStars value={5} size={14} />
                        <p className="mt-2 text-body-s text-gray-700 leading-[1.6]">{rev.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR (Figma frame CourseDetailsSidebarSection) */}
          <aside
            aria-label="Course details sidebar"
            className="sticky top-6 flex flex-col gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
          >
            {/* Lessons Preview */}
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-[20px] font-semibold text-gray-950">112 Lessons (24 hours)</h2>
              <ol className="flex flex-col gap-3">
                {SIDEBAR_LESSONS.map((lesson) => (
                  <li key={lesson.number} className="flex items-center justify-between text-body-s">
                    <span className="flex items-center gap-3">
                      <span className="font-medium text-gray-950">{lesson.number}</span>
                      <span className="font-medium text-gray-800">{lesson.title}</span>
                    </span>
                    <span className="font-medium text-brand">{lesson.duration}</span>
                  </li>
                ))}
                <li className="text-body-s font-medium text-gray-500 pt-1">99 more videos</li>
              </ol>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <p className="text-body-s text-gray-700 leading-[1.5]">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <div className="flex items-baseline gap-2">
                <span className="font-poppins text-[36px] font-bold text-brand">$25</span>
                <span className="text-body-s text-gray-500">/lifetime access</span>
              </div>

              <button
                type="button"
                onClick={() => setIsEnrolled(!isEnrolled)}
                className={`w-full rounded-pill py-3.5 text-center text-label-l font-bold transition shadow-md cursor-pointer ${
                  isEnrolled
                    ? "bg-brand text-white hover:bg-brand/90"
                    : "bg-lime text-gray-950 hover:bg-lime/90 hover:scale-101"
                }`}
              >
                {isEnrolled ? "✓ Enrolled — Continue" : "Enroll Now"}
              </button>

              <Link
                to={`/course/${courseSlug}/lessons`}
                className="w-full text-center rounded-pill border border-gray-200 py-2.5 text-label-m font-semibold text-gray-950 transition hover:bg-gray-50"
              >
                Open Lesson Player →
              </Link>
            </div>

            {/* What's Included */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <h3 className="font-poppins text-[18px] font-semibold text-gray-950">This course includes</h3>
              <ul className="flex flex-col gap-3">
                {INCLUDED_FEATURES.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-body-s text-gray-700">
                    <Icon className="size-5 text-brand shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creator Profile Section */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3">
                <img src={avatarCreator} alt="PurePearl Studio" className="size-14 rounded-full object-cover shadow-sm" />
                <div className="flex flex-col">
                  <h4 className="text-label-m font-semibold text-gray-950">PurePearl Studio</h4>
                  <span className="text-body-xs font-medium text-gray-500">Professional Creator</span>
                </div>
              </div>

              <p className="text-body-s text-gray-700 leading-[1.5]">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <button
                type="button"
                onClick={() => setIsProfileVisible(!isProfileVisible)}
                className="w-full rounded-pill border border-gray-200 py-2 text-center text-label-s font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer"
              >
                {isProfileVisible ? "Hide Profile" : "See Full Profile"}
              </button>

              {isProfileVisible && (
                <div className="rounded-2xl bg-gray-50 p-4 text-body-xs text-gray-700 flex flex-col gap-2">
                  <p>
                    PurePearl Studio creates practical digital learning experiences for modern creators. With over 10 years of
                    industry design and product development experience.
                  </p>
                  <Link to="/creator/purepearl-studio" className="font-semibold text-brand hover:underline">
                    View instructor profile &amp; courses →
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED COURSES */}
      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-10 px-6 pb-24 border-t border-gray-100 pt-16">
        <div className="flex items-center justify-between">
          <h2 className="font-poppins text-[28px] font-semibold text-gray-950">Related Courses</h2>
          <Link to="/search" className="text-body-m font-semibold text-brand hover:underline">
            View all courses →
          </Link>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED.map((c) => (
            <CourseCard
              key={c.title}
              image={img(c.image)}
              title={c.title}
              author="purepearl studio"
              price="25"
              avatars={avatars}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <NewsletterFooter />
    </div>
  );
}
