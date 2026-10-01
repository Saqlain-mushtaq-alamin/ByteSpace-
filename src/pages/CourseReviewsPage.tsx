import { useState } from "react";
import { useParams } from "react-router-dom";
import CourseLayout from "@/components/course/CourseLayout";
import { STUDENT_AVATARS } from "@/components/shared/DesignAssets";

const students = STUDENT_AVATARS;

const DISTRIBUTION = [
  { stars: 5, count: 720, pct: 81 },
  { stars: 4, count: 120, pct: 13 },
  { stars: 3, count: 21, pct: 2 },
  { stars: 2, count: 12, pct: 1 },
  { stars: 1, count: 16, pct: 2 },
];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    rating: 5,
    quote: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    rating: 5,
    quote: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    rating: 4,
    quote: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    rating: 5,
    quote: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const FILTERS = ["All rating", "5", "4", "3", "2", "1"];
const h2 = "font-poppins text-[20px] font-semibold text-gray-950";

export default function CourseReviewsPage() {
  const { slug } = useParams();
  const [filter, setFilter] = useState("All rating");

  const shown = filter === "All rating" ? REVIEWS : REVIEWS.filter((r) => r.rating === Number(filter));

  return (
    <CourseLayout slug={slug || "build-digital-asset"} active="Reviews">
      <div className="flex flex-col gap-3">
        <h2 className={h2}>What Learners Are Saying</h2>
        <p className="text-[14px] leading-[1.7] text-gray-700">
          Discover what our learners have to say about their experience with 'Build Digital Assets: A
          Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings summary */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6 sm:flex-row sm:items-center">
        <div className="flex h-[150px] w-[130px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-lime">
          <p className="text-[14px] font-medium text-gray-950">Ratings</p>
          <p className="font-poppins text-[48px] font-bold leading-none text-gray-950">4.7</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {DISTRIBUTION.map((d) => (
            <div key={d.stars} className="flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-lime" style={{ width: `${d.pct}%` }} />
              </div>
              <span className="w-[90px] shrink-0 text-[13px] tracking-widest text-gray-950">{"★".repeat(d.stars)}</span>
              <span className="w-9 shrink-0 text-right text-[13px] text-gray-500">{d.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="flex flex-col gap-4">
        <h3 className={h2}>Individual Reviews:</h3>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-medium transition ${
                filter === f ? "bg-lime text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {f === "All rating" ? f : `★ ${f}`}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {shown.length === 0 && <p className="text-[14px] text-gray-500">No reviews with this rating yet.</p>}
          {shown.map((r, i) => (
            <article key={r.name} className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={students[i % students.length]} alt="" className="size-10 rounded-lg object-cover" />
                  <div>
                    <p className="text-[15px] font-semibold text-gray-950">{r.name}</p>
                    <p className="text-[12px] text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <span className="text-[12px] text-gray-400">a year ago</span>
              </div>
              <p className="text-[16px] tracking-widest text-gray-950" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(r.rating)}
                <span className="text-gray-200">{"★".repeat(5 - r.rating)}</span>
              </p>
              <p className="text-[14px] leading-[1.7] text-gray-700">“{r.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </CourseLayout>
  );
}
