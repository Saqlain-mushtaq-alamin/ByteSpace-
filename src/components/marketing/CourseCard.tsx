import { Link } from "react-router-dom";
import AvatarStack from "./AvatarStack";
import starIcon from "@/assets/icons/star-outlined.svg";
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

/** Course_Card_1 matching ByteSpace Figma & planning/homepage.md (373x384, radius 24) */
export default function CourseCard({
  image,
  title,
  author,
  price,
  avatars,
  className,
  slug,
}: CourseCardProps) {
  const courseSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const displayAvatars =
    avatars && avatars.length > 0 && !avatars[0].includes("70")
      ? avatars
      : STUDENT_AVATARS;

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
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition duration-500 group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
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
              <Link
                to="/creator/purepearl-studio"
                className="font-medium text-brand hover:underline"
              >
                {author}
              </Link>
            </p>
          </div>

          <Link
            to={`/course/${courseSlug}/reviews`}
            className="flex items-center gap-1 text-[16px] font-bold text-gray-900 transition hover:text-brand shrink-0"
          >
            <span>4.5</span>
            <img src={starIcon} alt="" className="size-4 fill-amber-500 text-amber-500" />
          </Link>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 border border-gray-100">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-brand shrink-0"
            >
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
            <span className="font-poppins text-[22px] font-bold text-brand">
              ${price}
            </span>
            <span className="text-[12px] font-medium text-gray-500">/lifetime</span>
          </p>

          <Link
            to={`/course/${courseSlug}`}
            className="text-[12px] font-semibold text-brand hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
