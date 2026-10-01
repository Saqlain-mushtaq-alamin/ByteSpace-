import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";
import {
  IconLevel, IconStar, IconUsers, IconShare, IconPlay, IconPause,
  IconResources, IconVideo, IconCertificate, IconConsultation,
} from "@/components/shared/CourseIcons";

import courseVideoCover from "@/assets/images/course-video-cover.png";
import creatorAvatar from "@/assets/images/avatars/Ellipse-4.png";

// Video thumbnail: course preview video cover
const cover = courseVideoCover;

export type CourseTab = "About" | "Lessons" | "Reviews";

const SIDEBAR_LESSONS = [
  { n: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { n: "02", title: "Design Principles for Impacts", time: "21 mins" },
  { n: "03", title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

const INCLUDES = [
  { label: "Learning Resources", icon: IconResources },
  { label: "Quality Lesson Videos", icon: IconVideo },
  { label: "Certificate of Completion", icon: IconCertificate },
  { label: "Private Consultation", icon: IconConsultation },
];

const badge = "inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[16px] font-medium text-gray-950";

function Sidebar() {
  const [enrolled, setEnrolled] = useState(false);
  return (
    <aside className="relative z-10 flex h-[940px] flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl lg:-mt-[571px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-poppins text-[20px] font-semibold">112 Lessons (24 hours)</h2>
        <ol className="flex flex-col gap-3 text-[14px]">
          {SIDEBAR_LESSONS.map((l) => (
            <li key={l.n} className="flex items-start justify-between gap-4">
              <span className="flex gap-3">
                <span className="font-medium text-gray-950">{l.n}</span>
                <span className="text-gray-800">{l.title}</span>
              </span>
              <span className="shrink-0 font-medium text-brand">{l.time}</span>
            </li>
          ))}
          <li className="text-gray-500">99 more videos</li>
        </ol>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
        <p className="text-[14px] leading-[1.5] text-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <p className="flex items-baseline gap-1">
          <span className="font-poppins text-[36px] font-bold text-brand">$25</span>
          <span className="text-[14px] text-gray-500">/lifetime</span>
        </p>
        <button
          type="button"
          onClick={() => setEnrolled(!enrolled)}
          className={`w-full cursor-pointer rounded-full py-3 text-[16px] font-medium transition ${
            enrolled ? "bg-brand text-white" : "bg-lime text-gray-950 hover:brightness-95"
          }`}
        >
          {enrolled ? "✓ Enrolled" : "Enroll Now"}
        </button>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
        <h3 className="font-poppins text-[18px] font-semibold">This course includes</h3>
        <ul className="flex flex-col gap-3">
          {INCLUDES.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3 text-[14px] text-gray-700">
              <Icon className="size-5 shrink-0 text-brand" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
        <div className="flex items-center gap-3">
          <img src={creatorAvatar} alt="PurePearl Studio" className="size-12 rounded-xl object-cover" />
          <div>
            <p className="text-[16px] font-semibold">PurePearl Studio</p>
            <p className="text-[12px] text-gray-500">Professional Creator</p>
          </div>
        </div>
        <p className="text-[14px] leading-[1.5] text-gray-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Link
          to="/creator/purepearl-studio"
          className="self-start rounded-full border border-gray-200 px-5 py-2 text-[14px] font-medium transition hover:bg-gray-50"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}

export default function CourseLayout({ slug, active, children }: { slug: string; active: CourseTab; children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [shareLabel, setShareLabel] = useState("Share");

  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: "Build Digital Asset", url: window.location.href });
      else await navigator.clipboard.writeText(window.location.href);
      setShareLabel("Copied!");
    } catch {
      setShareLabel("Share");
    }
    setTimeout(() => setShareLabel("Share"), 2000);
  };

  const tabs: { label: CourseTab; to: string }[] = [
    { label: "About", to: `/course/${slug}` },
    { label: "Lessons", to: `/course/${slug}/lessons` },
    { label: "Reviews", to: `/course/${slug}/reviews` },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand bg-grid pb-14 pt-[185px] text-white">
        <HomeHeader />
        <div className="mx-auto w-[1200px] max-w-full px-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-poppins text-[28px] font-semibold leading-[1.2] sm:text-[36px]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="font-poppins text-[18px] font-medium sm:text-[20px]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-[16px]">
                by{" "}
                <Link to="/creator/purepearl-studio" className="font-medium text-lime hover:underline">
                  purepearl studio
                </Link>
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <span className={badge}><IconLevel className="size-5 text-brand" /> Intermediate</span>
                <span className={badge}><IconStar className="size-5" /> 4.8 (172 reviews)</span>
                <span className={badge}><IconUsers className="size-5 text-brand" /> 199 Students</span>
              </div>
            </div>
            <button
              type="button"
              onClick={share}
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-[16px] font-medium text-gray-950 transition hover:brightness-95"
            >
              <IconShare className="size-4" /> {shareLabel}
            </button>
          </div>

          {/* Video: 720 x 440. Sidebar card starts level with its top. */}
          <div className="relative mt-14 h-[440px] w-full max-w-[720px] overflow-hidden rounded-3xl bg-gray-950">
            <img src={cover} alt="Course preview" className={`size-full object-cover transition ${playing ? "opacity-50" : ""}`} />
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? "Pause video" : "Play video"}
              className="absolute inset-0 m-auto grid size-16 cursor-pointer place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/40 backdrop-blur-md transition hover:scale-105"
            >
              {playing ? <IconPause className="size-6" /> : <IconPlay className="ml-0.5 size-6" />}
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT + FLOATING SIDEBAR */}
      <section className="mx-auto grid w-[1200px] max-w-full grid-cols-1 gap-12 px-6 pb-24 pt-[75px] lg:grid-cols-[1fr_400px]">
        <div className="flex min-w-0 flex-col gap-10">
          <nav className="flex gap-3" aria-label="Course sections">
            {tabs.map((t) => (
              <Link
                key={t.label}
                to={t.to}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition ${
                  t.label === active ? "bg-lime text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
          {children}
        </div>
        <Sidebar />
      </section>

      <NewsletterFooter />
    </div>
  );
}
