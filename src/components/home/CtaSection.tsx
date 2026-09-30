import { Link } from "react-router-dom";
import { Ring3D, Cone1, Cone2 } from "@/components/shared/DesignAssets";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand bg-grid py-28 text-white" aria-labelledby="cta-creator-title">
      {/* 3D Floating Decorative Shapes from Figma / planning/homepage.md */}
      <div className="pointer-events-none absolute -bottom-16 -left-12 lg:left-12">
        <Ring3D className="size-[260px] lg:size-[320px] opacity-80 drop-shadow-2xl" />
      </div>
      <div className="pointer-events-none absolute -top-12 right-12">
        <Cone1 className="size-[220px] opacity-85 drop-shadow-2xl" />
      </div>
      <div className="pointer-events-none absolute -bottom-10 right-20">
        <Cone2 className="size-[240px] opacity-80 drop-shadow-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-[960px] max-w-full flex-col items-center gap-8 px-6 text-center">
        <h2 id="cta-creator-title" className="max-w-[760px] font-poppins text-[36px] font-semibold leading-[1.2] tracking-tight sm:text-[48px]">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>

        <p className="max-w-[780px] text-body-m leading-[1.7] text-gray-100 sm:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          to="/register"
          className="mt-2 rounded-pill bg-lime px-10 py-4 text-label-l font-bold text-gray-950 transition hover:bg-lime/90 hover:scale-105 shadow-2xl cursor-pointer"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
