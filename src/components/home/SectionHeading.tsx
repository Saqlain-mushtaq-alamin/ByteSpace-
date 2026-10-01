import { Link } from "react-router-dom";

interface Props {
  eyebrow: string;
  title: string;
  action?: string;
  actionTo?: string;
  align?: "left" | "center";
}

/** Shared "eyebrow + big title (+ View More link)" header used by several sections */
export default function SectionHeading({ eyebrow, title, action, actionTo = "/search", align = "left" }: Props) {
  return (
    <div className={`flex items-end justify-between gap-6 ${align === "center" ? "text-center" : ""}`}>
      <div className="flex flex-col gap-2">
        <p className="text-[18px] font-medium leading-[1.2] text-brand">{eyebrow}</p>
        <h2 className="max-w-[694px] font-poppins text-[40px] font-semibold leading-[1.3] tracking-[-0.4px] text-gray-950">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          to={actionTo}
          className="hidden shrink-0 items-center gap-2 rounded-pill border border-gray-200 px-6 py-2.5 text-[16px] font-medium text-gray-950 transition hover:border-brand hover:bg-brand hover:text-white sm:flex"
        >
          {action} →
        </Link>
      )}
    </div>
  );
}
