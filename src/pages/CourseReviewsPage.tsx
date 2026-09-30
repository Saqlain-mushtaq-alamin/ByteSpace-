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
  IconCheckCircle,
  IconResources,
  IconVideo,
  IconCertificate,
  IconConsultation,
} from "@/components/shared/CourseIcons";

import heroCourseImg from "@/assets/images/course-build-digital-asset.png";
import avatarCreator from "@/assets/images/avatars/avatar-1.png";

const st = (n: number) => new URL(`../assets/images/avatars/student-${n}.png`, import.meta.url).href;
const studentAvatars = [1, 2, 3, 4].map(st);

const RATING_DISTRIBUTION = [
  { stars: 5, count: 720, pct: 81 },
  { stars: 4, count: 120, pct: 13 },
  { stars: 3, count: 21, pct: 2 },
  { stars: 2, count: 12, pct: 1 },
  { stars: 1, count: 16, pct: 2 },
];

const REVIEWS_DATA = [
  {
    id: "r-1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    timeAgo: "a year ago",
    rating: 5,
    avatar: studentAvatars[0],
    quote:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "r-2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    timeAgo: "a year ago",
    rating: 5,
    avatar: studentAvatars[1],
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "r-3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    timeAgo: "a year ago",
    rating: 5,
    avatar: studentAvatars[2],
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "r-4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    timeAgo: "a year ago",
    rating: 5,
    avatar: studentAvatars[3],
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
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

export default function CourseReviewsPage() {
  const { slug } = useParams();
  const courseSlug = slug || "build-digital-asset";
  const [selectedFilter, setSelectedFilter] = useState<string>("All rating");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const filteredReviews =
    selectedFilter === "All rating"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.rating === parseInt(selectedFilter, 10));

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

      {/* HERO SECTION (Page 6 of ByteSpace New Check website.pdf) */}
      <section className="relative w-full bg-brand bg-grid text-white pb-20 pt-[120px] overflow-hidden" aria-labelledby="course-reviews-title">
        <HomeHeader />

        <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-6">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Courses", to: "/search" },
              { label: "Course Details", to: `/course/${courseSlug}` },
              { label: "Reviews" },
            ]}
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-[780px] flex-col gap-4">
              <h1 id="course-reviews-title" className="font-poppins text-[32px] font-semibold leading-[1.2] sm:text-[40px]">
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

              {/* Course metadata chips */}
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

          {/* Video Preview Card */}
          <div className="relative mt-4 aspect-video max-w-[720px] w-full overflow-hidden rounded-3xl border border-white/20 bg-gray-950 shadow-2xl flex flex-col justify-center items-center">
            <img src={heroCourseImg} alt="Course cover" className="absolute inset-0 size-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-black/20 to-transparent" />
            <Link
              to={`/course/${courseSlug}/lessons`}
              className="relative z-10 flex size-24 items-center justify-center rounded-3xl border border-white/30 bg-black/50 text-lime shadow-2xl backdrop-blur-xl transition hover:scale-110"
              aria-label="Play course preview"
            >
              <IconPlay className="ml-1 size-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: REVIEWS + SIDEBAR */}
      <section className="mx-auto w-[1200px] max-w-full px-6 py-16" aria-label="Course reviews">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_400px]">
          {/* LEFT: Reviews Content */}
          <div className="flex flex-col gap-10">
            {/* Tabs matching Figma: About, Lesson, Reviews */}
            <nav className="inline-flex gap-3 rounded-pill bg-gray-50 p-1.5 border border-gray-100" aria-label="Course sections">
              <Link
                to={`/course/${courseSlug}`}
                className="rounded-pill px-6 py-2.5 text-body-m font-semibold text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition"
              >
                About
              </Link>
              <Link
                to={`/course/${courseSlug}/lessons`}
                className="rounded-pill px-6 py-2.5 text-body-m font-semibold text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition"
              >
                Lesson
              </Link>
              <button
                type="button"
                className="rounded-pill bg-lime px-6 py-2.5 text-body-m font-semibold text-gray-950 shadow-sm cursor-pointer"
              >
                Reviews
              </button>
            </nav>

            {/* Heading & Subtitle from Page 6 of PDF */}
            <div className="flex flex-col gap-3">
              <h2 className="font-poppins text-[24px] font-semibold text-gray-950 sm:text-[28px]">
                What Learners Are Saying
              </h2>
              <p className="text-body-m text-gray-700 leading-[1.6]">
                Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive
                Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of
                mastering digital asset creation.
              </p>
            </div>

            {/* Ratings Summary Box from Page 6 of PDF */}
            <div className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="font-poppins text-lg font-semibold text-gray-950">Ratings</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] items-center">
                <div className="flex flex-col items-center justify-center gap-2 border-b border-gray-100 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8 text-center">
                  <p className="font-poppins text-[56px] font-bold text-gray-950 leading-none">4.7</p>
                  <RatingStars value={4.7} size={22} />
                  <p className="text-body-s text-gray-500">Based on 889 reviews</p>
                </div>

                <div className="flex flex-col gap-3">
                  {RATING_DISTRIBUTION.map((d) => (
                    <div key={d.stars} className="flex items-center gap-4 text-body-s">
                      <span className="w-12 shrink-0 font-medium text-gray-700">{d.stars} stars</span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full rounded-full bg-lime transition-all duration-500" style={{ width: `${d.pct}%` }} />
                      </div>
                      <span className="w-10 shrink-0 text-right font-medium text-gray-500">{d.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Reviews Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-poppins text-[20px] font-semibold text-gray-950">Individual Reviews:</h3>

                {/* Filter buttons from Page 6 of PDF */}
                <div className="flex flex-wrap items-center gap-2">
                  {["All rating", "5", "4", "3", "2", "1"].map((filter) => {
                    const isSelected = selectedFilter === filter;
                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setSelectedFilter(filter)}
                        className={`rounded-pill px-4 py-1.5 text-body-xs font-semibold transition cursor-pointer ${
                          isSelected
                            ? "bg-lime text-gray-950 shadow-xs"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {filter === "All rating" ? filter : `${filter} ★`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reviews List */}
              <div className="flex flex-col gap-6">
                {filteredReviews.map((review) => (
                  <article
                    key={review.id}
                    className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start"
                  >
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="size-14 rounded-full object-cover shrink-0 shadow-xs"
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="text-label-m font-semibold text-gray-950">{review.name}</h4>
                          <p className="text-body-xs text-gray-500">
                            {review.role} • {review.timeAgo}
                          </p>
                        </div>
                        <RatingStars value={review.rating} size={16} />
                      </div>
                      <p className="text-body-m text-gray-700 leading-[1.6]">{review.quote}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Course Details Sidebar (Page 6 of PDF) */}
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
                <span className="text-body-s text-gray-500">/lifetime</span>
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

            {/* What's Included */}
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
              <h3 className="font-poppins text-[18px] font-semibold text-gray-950">This course include</h3>
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
