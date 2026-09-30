import { STUDENT_AVATARS } from "@/components/shared/DesignAssets";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: STUDENT_AVATARS[0],
    rating: 5,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: STUDENT_AVATARS[1],
    rating: 5,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: STUDENT_AVATARS[2],
    rating: 5,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-lime/5 to-white py-28" aria-labelledby="testimonials-heading">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-40 top-0 size-[600px] rounded-full bg-lime/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[600px] rounded-full bg-brand/10 blur-[140px]" />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-16 px-6">
        {/* Header 2-column layout matching Figma & homepage.md */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <h2 id="testimonials-heading" className="font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight text-gray-950 sm:text-[44px]">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="text-body-m leading-[1.7] text-gray-700">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards matching Figma */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="size-16 rounded-full object-cover shadow-sm ring-2 ring-brand/10 shrink-0"
                />
                <div className="flex flex-col">
                  <p className="font-poppins text-lg font-semibold text-gray-950">{t.name}</p>
                  <p className="text-body-s font-semibold text-brand">{t.role}</p>
                  <div className="flex items-center gap-0.5 mt-0.5 text-amber-400 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
              <p className="text-body-m leading-[1.7] text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
