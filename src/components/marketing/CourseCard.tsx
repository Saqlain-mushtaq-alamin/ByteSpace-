import { useState } from "react";
import { Link } from "react-router-dom";
import AvatarStack from "./AvatarStack";
import { STUDENT_AVATARS } from "@/components/shared/DesignAssets";
import { cn } from "@/lib/cn";

export interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  price: string;
  avatars?: string[];
  className?: string;
  slug?: string;
}

const chip =
  "rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium leading-none text-white backdrop-blur-md shadow-sm";

/** Course card (373x384, radius 24) */
export default function CourseCard({
  image,
  title,
  author,
  price,
  avatars,
  className,
  slug,
}: CourseCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const courseSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const displayAvatars = avatars && avatars.length > 0 ? avatars : STUDENT_AVATARS;

  return (
    <article
      className={cn(
        "group relative h-[384px] w-[373px] max-w-full overflow-hidden rounded-[24px] border border-gray-100 bg-white p-3.5 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl",
        className
      )}
    >
      {/* Course Thumbnail */}
      <Link
        to={`/course/${courseSlug}`}
        className="relative block h-[195px] w-full overflow-hidden rounded-[16px] bg-gray-100"
      >
        {imgFailed || !image ? (
          <div className="grid size-full place-items-center text-[12px] text-gray-400">
            Image not found
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            decoding="async"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
            onError={() => {
              console.warn("CourseCard: image failed to load ->", image);
              setImgFailed(true);
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-2.5 left-2.5 flex flex-wrap gap-1.5">
          <span className={chip}>17 Lessons</span>
          <span className={chip}>2h 16m</span>
          <span className={chip}>59 Comments</span>
        </div>
      </Link>

      {/* Course Details */}
      <div className="mt-3.5 flex flex-col gap-3 px-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Link to={`/course/${courseSlug}`}>
              <h3 className="truncate font-poppins text-[18px] font-semibold leading-tight text-gray-950 transition group-hover:text-brand">
                {title}
              </h3>
            </Link>
            <p className="mt-1 text-[12px] leading-tight text-gray-500">
              by{" "}
              <Link to="/creator/purepearl-studio" className="font-medium text-brand hover:underline">
                {author}
              </Link>
            </p>
          </div>

          <Link
            to={`/course/${courseSlug}/reviews`}
            className="flex shrink-0 items-center gap-1 text-[16px] font-bold text-gray-900 transition hover:text-brand"
          >
            <span>4.5</span>
            {/* Inline SVG so the star always shows (an <img> SVG ignores text/fill classes) */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              className="size-4 text-gray-400"
              aria-hidden
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-brand">
              <path d="M4 18h3v-4H4v4z" />
              <path d="M10 18h3v-8h-3v8z" />
              <path d="M16 18h3v-13h-3v13z" />
            </svg>
            Beginner
          </span>
          <AvatarStack images={displayAvatars} extra="26+" size={28} />
        </div>

        <div className="flex items-baseline justify-between border-t border-gray-100 pt-2">
          <p className="flex items-baseline gap-1">
            <span className="font-poppins text-[22px] font-bold text-brand">${price}</span>
            <span className="text-[12px] font-medium text-gray-500">/lifetime</span>
          </p>
          <Link to={`/course/${courseSlug}`} className="text-[12px] font-semibold text-brand hover:underline">
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
