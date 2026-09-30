import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import Breadcrumb from "@/components/shared/Breadcrumb";
import RatingStars from "@/components/shared/RatingStars";
import {
  IconLevel,
  IconStar,
  IconUsers,
  IconShare,
  IconPlay,
  IconPause,
  IconCheckCircle,
  IconResources,
  IconVideo,
  IconCertificate,
  IconConsultation,
  IconModule,
} from "@/components/shared/CourseIcons";

import heroCover from "@/assets/images/course-build-digital-asset.png";
import creatorAvatar from "@/assets/images/avatars/avatar-1.png";

interface LessonItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  completed?: boolean;
}

interface ModuleItem {
  id: string;
  title: string;
  description: string;
  lessons: LessonItem[];
}

const MODULES_DATA: ModuleItem[] = [
  {
    id: "mod-1",
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    lessons: [
      { id: "l-1", number: "01", title: "Introduction to Digital Assets", duration: "12 mins", completed: true },
      { id: "l-2", number: "02", title: "Navigating Design Software Tools", duration: "15 mins", completed: true },
      { id: "l-3", number: "03", title: "Asset Formats & Vectors vs Rasters", duration: "18 mins", completed: true },
    ],
  },
  {
    id: "mod-2",
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    lessons: [
      { id: "l-4", number: "04", title: "Design Principles for Impacts", duration: "21 mins", completed: true },
      { id: "l-5", number: "05", title: "Color Theory & Contrast Systems", duration: "19 mins", completed: false },
      { id: "l-6", number: "06", title: "Typography Hierarchies for UI", duration: "24 mins", completed: false },
    ],
  },
  {
    id: "mod-3",
    title: "Module 3: Advanced Techniques in Digital Creation",
    description:
      "Delve into sophisticated component architectures, auto-layout mastery, dynamic design tokens, and scalable production workflows.",
    lessons: [
      { id: "l-7", number: "07", title: "Advanced Techniques in Digital Creation", duration: "16 mins", completed: false },
      { id: "l-8", number: "08", title: "Responsive Layout Systems", duration: "22 mins", completed: false },
    ],
  },
  {
    id: "mod-4",
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    lessons: [
      { id: "l-9", number: "09", title: "Design Thinking in Digital Creation", duration: "20 mins", completed: false },
      { id: "l-10", number: "10", title: "User Experience (UX) Essentials", duration: "25 mins", completed: false },
    ],
  },
  {
    id: "mod-5",
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    lessons: [
      { id: "l-11", number: "11", title: "Creating Interactive Presentations", duration: "18 mins", completed: false },
      { id: "l-12", number: "12", title: "Integrating Multimedia Elements", duration: "23 mins", completed: false },
    ],
  },
  {
    id: "mod-6",
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    lessons: [
      { id: "l-13", number: "13", title: "Effective Presentation Techniques", duration: "17 mins", completed: false },
      { id: "l-14", number: "14", title: "Peer Critique and Portfolio Review", duration: "21 mins", completed: false },
    ],
  },
  {
    id: "mod-7",
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    lessons: [
      { id: "l-15", number: "15", title: "Mobile & Responsive Optimization", duration: "19 mins", completed: false },
      { id: "l-16", number: "16", title: "Marketplace Handoff & Launch", duration: "26 mins", completed: false },
    ],
  },
];

const ALL_LESSONS = MODULES_DATA.flatMap((m) => m.lessons);

const INCLUDED_BENEFITS = [
  { label: "Learning Resources", icon: IconResources },
  { label: "Quality Lesson Videos", icon: IconVideo },
  { label: "Certificate of Completion", icon: IconCertificate },
  { label: "Private Consultation", icon: IconConsultation },
];

export default function CourseLessonsPage() {
  const { slug } = useParams();
  const courseSlug = slug || "build-digital-asset";
  const [activeTab, setActiveTab] = useState<"Lesson" | "About" | "Reviews">("Lesson");
  const [activeLessonId, setActiveLessonId] = useState<string>("l-4");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(["l-1", "l-2", "l-3", "l-4"]));
  const [shareFeedback, setShareFeedback] = useState<string>("Share");
  const [isEnrolled, setIsEnrolled] = useState<boolean>(true);
  const [profileViewed, setProfileViewed] = useState<boolean>(false);

  const activeLesson = ALL_LESSONS.find((l) => l.id === activeLessonId) || ALL_LESSONS[0];
  const activeModule = MODULES_DATA.find((m) => m.lessons.some((l) => l.id === activeLessonId)) || MODULES_DATA[0];

  const totalLessons = ALL_LESSONS.length;
  const completedCount = completedIds.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  const toggleLessonComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
      setShareFeedback("Copied!");
      setTimeout(() => setShareFeedback("Share"), 2500);
    } catch {
      setShareFeedback("Copied!");
      setTimeout(() => setShareFeedback("Share"), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO SECTION (Figma frame 60:102 CourseHeroSection) */}
      <section className="relative w-full bg-brand bg-grid text-white pb-20 pt-[120px] overflow-hidden" aria-labelledby="course-title">
        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-6">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Courses", to: "/search" },
              { label: "Course Details", to: `/course/${courseSlug}` },
              { label: "Lessons Player" },
            ]}
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-[780px] flex-col gap-4">
              <h1 id="course-title" className="font-poppins text-[32px] font-semibold leading-[1.2] sm:text-[40px]">
                Build Digital Asset: A Comprehensive Guide
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
              <span>{shareFeedback}</span>
            </button>
          </div>

          {/* Interactive Video Player Canvas (720px width in Figma, responsive) */}
          <div className="relative mt-4 aspect-video max-w-[720px] w-full overflow-hidden rounded-3xl border border-white/20 bg-gray-950 shadow-2xl flex flex-col justify-between">
            {/* Player background image / poster */}
            <img
              src={heroCover}
              alt="Course lesson video"
              className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                isPlaying ? "opacity-30" : "opacity-75"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-black/30 to-black/50" />

            {/* Top player bar */}
            <div className="relative z-10 flex items-center justify-between p-6 text-white">
              <span className="rounded-pill bg-lime px-3 py-1 text-body-xs font-bold text-gray-950">
                LESSON {activeLesson.number}
              </span>
              <span className="text-body-s font-medium text-gray-200">
                {activeModule.title}
              </span>
            </div>

            {/* Center Play/Pause button */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="flex size-24 items-center justify-center rounded-3xl border border-white/30 bg-black/50 text-lime shadow-2xl backdrop-blur-xl transition hover:scale-110 hover:bg-black/70 cursor-pointer"
              >
                {isPlaying ? <IconPause className="size-10" /> : <IconPlay className="ml-1 size-10" />}
              </button>
              <p className="text-center font-poppins text-xl font-bold text-white drop-shadow-md">
                {activeLesson.title}
              </p>
            </div>

            {/* Bottom player controls bar */}
            <div className="relative z-10 flex flex-col gap-2 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
              {/* Progress bar */}
              <div className="relative h-1.5 w-full cursor-pointer rounded-full bg-white/30">
                <div
                  className="h-full rounded-full bg-lime transition-all duration-300"
                  style={{ width: isPlaying ? "65%" : "35%" }}
                />
              </div>

              <div className="flex items-center justify-between text-body-xs text-gray-300 pt-1">
                <span>{isPlaying ? "08:14" : "04:30"} / {activeLesson.duration}</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLessonComplete(activeLesson.id)}
                    className="text-lime hover:underline font-medium cursor-pointer"
                  >
                    {completedIds.has(activeLesson.id) ? "✓ Completed" : "Mark as completed"}
                  </button>
                  <span className="text-white">HD 1080p</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT: CURRICULUM SECTION + ENROLLMENT SIDEBAR */}
      <section className="mx-auto w-[1200px] max-w-full px-6 py-16" aria-label="Course curriculum and progress">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_400px]">
          {/* LEFT: Course Curriculum Section */}
          <div className="flex flex-col gap-10">
            {/* Nav Tabs (About, Lesson, Reviews) */}
            <nav className="inline-flex gap-3 rounded-pill bg-gray-50 p-1.5 border border-gray-100" aria-label="Course sections">
              {(["Lesson", "About", "Reviews"] as const).map((tab) => {
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

            {/* TAB: Lesson (Figma cousecurriculumsection.tsx) */}
            {activeTab === "Lesson" && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Explore the Modules</h2>
                  <p className="text-body-m text-gray-700">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons,
                    providing practical insights and hands-on experiences.
                  </p>
                </div>

                <h3 className="font-poppins text-[20px] font-semibold text-gray-950">Lesson List</h3>

                {/* Modules list with electric lime module icons */}
                <div className="flex flex-col gap-4">
                  {MODULES_DATA.map((module) => {
                    const isCurrentModule = module.id === activeModule.id;

                    return (
                      <article
                        key={module.id}
                        className={`flex flex-col gap-4 rounded-3xl border p-6 transition shadow-sm ${
                          isCurrentModule ? "border-brand/40 bg-brand/5" : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime text-gray-950">
                            <IconModule className="size-6" />
                          </div>
                          <div className="flex flex-col gap-1 flex-1">
                            <h4 className="font-poppins text-base font-semibold text-gray-950">{module.title}</h4>
                            <p className="text-body-s text-gray-700 leading-[1.6]">{module.description}</p>
                          </div>
                        </div>

                        {/* Lessons inside module */}
                        <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">
                          {module.lessons.map((lesson) => {
                            const isSelected = lesson.id === activeLessonId;
                            const isDone = completedIds.has(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                type="button"
                                onClick={() => {
                                  setActiveLessonId(lesson.id);
                                  setIsPlaying(true);
                                  window.scrollTo({ top: 350, behavior: "smooth" });
                                }}
                                className={`flex items-center justify-between rounded-2xl p-3 text-left transition cursor-pointer ${
                                  isSelected
                                    ? "bg-brand text-white shadow-md"
                                    : "bg-gray-50 hover:bg-gray-100 text-gray-950"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleLessonComplete(lesson.id);
                                    }}
                                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                                      isDone
                                        ? "bg-lime text-gray-950"
                                        : isSelected
                                          ? "border border-white/50 text-white"
                                          : "border border-gray-300 text-gray-400"
                                    }`}
                                  >
                                    {isDone ? "✓" : lesson.number}
                                  </span>
                                  <span className="text-body-s font-medium">{lesson.title}</span>
                                </div>
                                <span className={`text-body-xs font-medium ${isSelected ? "text-lime" : "text-brand"}`}>
                                  {lesson.duration}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Lesson Content Section */}
                <div className="flex flex-col gap-2 border-t border-gray-100 pt-6">
                  <h3 className="font-poppins text-[20px] font-semibold text-gray-950">Lesson Content</h3>
                  <p className="text-body-m text-gray-700 leading-[1.6]">
                    Engage with each lesson through captivating video content, detailed textual explanations, and
                    interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* Learning Progress Tracking Card (Figma cousecurriculumsection.tsx) */}
                <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <span className="text-label-s font-semibold text-gray-950">Learning Progress</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-poppins text-[40px] font-bold text-gray-950">{progressPct}%</span>
                    <span className="text-body-s text-gray-500">
                      ({completedCount} of {totalLessons} lessons completed)
                    </span>
                  </div>

                  <div
                    className="relative h-3 w-full overflow-hidden rounded-full bg-gray-100"
                    role="progressbar"
                    aria-valuenow={progressPct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-lime transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: About */}
            {activeTab === "About" && (
              <div className="flex flex-col gap-6">
                <h2 className="font-poppins text-[20px] font-semibold text-gray-950">About This Course</h2>
                <p className="text-body-m text-gray-700 leading-[1.7]">
                  Build practical digital design skills through guided lessons, hands-on exercises, and real-world creative
                  projects. Master the fundamentals of vector design, composition, color theory, typography, and monetization
                  strategies.
                </p>
                <Link
                  to={`/course/${courseSlug}`}
                  className="rounded-pill bg-gray-50 border border-gray-200 px-6 py-3 text-body-m font-semibold text-brand hover:bg-gray-100 self-start"
                >
                  ← Back to full course overview
                </Link>
              </div>
            )}

            {/* TAB: Reviews */}
            {activeTab === "Reviews" && (
              <div className="flex flex-col gap-6">
                <h2 className="font-poppins text-[20px] font-semibold text-gray-950">Course Reviews</h2>
                <p className="text-body-m text-gray-700 leading-[1.7]">
                  Learners appreciate the clear explanations, practical projects, and structured path through each stage of the
                  course. Over 98% of students rate this course 5 stars for depth and clarity.
                </p>
                <RatingStars value={4.8} count={172} size={20} />
                <Link to="/reviews" className="font-semibold text-brand hover:underline">
                  Read all 172 student reviews on ByteSpace →
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT: Course Enrollment Sidebar Section (courseenrollmensidebarsection.tsx) */}
          <aside
            aria-label="Course lessons sidebar"
            className="sticky top-6 flex flex-col gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl"
          >
            {/* Lessons List Header */}
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-[20px] font-semibold text-gray-950">112 Lessons (24 hours)</h2>
              <div className="flex flex-col gap-3">
                {ALL_LESSONS.slice(0, 5).map((lesson) => {
                  const isCur = lesson.id === activeLessonId;
                  const isDone = completedIds.has(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => {
                        setActiveLessonId(lesson.id);
                        setIsPlaying(true);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`flex items-center justify-between text-left text-body-s transition rounded-xl p-2 cursor-pointer ${
                        isCur ? "bg-brand/10 text-brand font-semibold" : "hover:bg-gray-50 text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-xs ${isDone ? "text-lime font-bold" : "text-gray-400"}`}>
                          {isDone ? "✓" : lesson.number}
                        </span>
                        <span className="line-clamp-1">{lesson.title}</span>
                      </div>
                      <span className="shrink-0 text-brand font-medium">{lesson.duration}</span>
                    </button>
                  );
                })}
                <p className="text-body-s text-gray-500 pt-1">99 more lessons in full syllabus</p>
              </div>
            </div>

            {/* Pricing & Enrollment */}
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
                {isEnrolled ? "✓ Enrolled" : "Enroll Now"}
              </button>
            </div>

            {/* Course Includes Benefits */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <h3 className="font-poppins text-[18px] font-semibold text-gray-950">This course includes</h3>
              <ul className="flex flex-col gap-3">
                {INCLUDED_BENEFITS.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-body-s text-gray-700">
                    <Icon className="size-5 text-brand shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creator Profile */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3">
                <img src={creatorAvatar} alt="PurePearl Studio" className="size-14 rounded-full object-cover shadow-sm" />
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
                onClick={() => setProfileViewed(!profileViewed)}
                className="w-full rounded-pill border border-gray-200 py-2 text-center text-label-s font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer"
              >
                {profileViewed ? "Hide Profile" : "See Full Profile"}
              </button>

              {profileViewed && (
                <div className="rounded-2xl bg-gray-50 p-4 text-body-xs text-gray-700 flex flex-col gap-2">
                  <p>
                    PurePearl Studio creates practical digital learning experiences for modern creators.
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

      {/* FOOTER */}
      <NewsletterFooter />
    </div>
  );
}
