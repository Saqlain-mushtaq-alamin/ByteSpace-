import { useParams } from "react-router-dom";
import CourseLayout from "@/components/course/CourseLayout";

import rect0 from "@/assets/images/Rectangle.png";
import rect1 from "@/assets/images/Rectangle-1.png";
import rect2 from "@/assets/images/Rectangle-2.png";
import rect3 from "@/assets/images/Rectangle-3.png";

const PREVIEWS = [rect0, rect1, rect2, rect3];

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

const h2 = "font-poppins text-[20px] font-semibold text-gray-950";
const body = "text-[14px] leading-[1.7] text-gray-700";

export default function CourseDetailsPage() {
  const { slug } = useParams();

  return (
    <CourseLayout slug={slug || "build-digital-asset"} active="About">
      <div className="flex flex-col gap-4">
        <h2 className={h2}>Description</h2>
        <p className={body}>
          Embark on an enlightening exploration into the world of digital creation with our comprehensive course,{" "}
          <strong className="text-gray-950">“Build Digital Assets: A Comprehensive Guide.”</strong> This
          transformative learning experience invites you to delve deep into the intricacies of crafting impactful
          digital content. From laying the groundwork with foundational concepts to mastering advanced techniques,
          this guide is meticulously curated to empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </p>
        <p className={body}>
          In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational
          concepts that form the backbone of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in leveraging these elements to communicate
          effectively in the digital realm.
        </p>
        <p className={body}>
          As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances
          of design principles that drive impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout strategies that elevate your digital assets
          to new heights.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={h2}>Sneak Peak</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PREVIEWS.map((src, i) => (
            <img key={i} src={src} alt={`Course preview ${i + 1}`} className="h-[125px] w-full rounded-2xl object-cover" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={h2}>Key Points</h2>
        <ul className="flex flex-col gap-3">
          {KEY_POINTS.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[14px] text-gray-700">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </CourseLayout>
  );
}
