import { useParams } from "react-router-dom";
import CourseLayout from "@/components/course/CourseLayout";
import { IconVideo } from "@/components/shared/CourseIcons";

const MODULES = [
  {
    title: "Module 1: Introduction to Digital Assets",
    text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 3: User-Centric Design Strategies",
    text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 4: Interactive Media and Engagement",
    text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 5: Project Showcase and Critique",
    text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 6: Optimizing Digital Assets for Various Platforms",
    text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const h2 = "font-poppins text-[20px] font-semibold text-gray-950";
const body = "text-[14px] leading-[1.7] text-gray-700";
const PROGRESS = 55;

export default function CourseLessonsPage() {
  const { slug } = useParams();

  return (
    <CourseLayout slug={slug || "build-digital-asset"} active="Lessons">
      <div className="flex flex-col gap-3">
        <h2 className={h2}>Explore the Modules</h2>
        <p className={body}>
          Immerse yourself in the course content as we break down each module into comprehensive lessons,
          providing practical insights and hands-on experiences.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className={h2}>Lesson List</h2>
        <ul className="flex flex-col gap-6">
          {MODULES.map((m) => (
            <li key={m.title} className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-lime text-gray-950">
                <IconVideo className="size-6" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-semibold text-gray-950">{m.title}</h3>
                <p className={body}>{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2}>Lesson Content</h2>
        <p className={body}>
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive
          elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2}>Lesson Progress Tracking</h2>
        <p className={body}>
          Witness your growth as you complete lessons, with an intuitive progress tracking system that keeps you
          on track through your learning journey.
        </p>
        <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-gray-200 p-6">
          <p className="text-[14px] font-medium text-gray-950">Learning Progress</p>
          <p className="font-poppins text-[40px] font-bold leading-none text-gray-950">{PROGRESS}%</p>
          <div
            role="progressbar"
            aria-valuenow={PROGRESS}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
          >
            <div className="h-full rounded-full bg-lime" style={{ width: `${PROGRESS}%` }} />
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}
