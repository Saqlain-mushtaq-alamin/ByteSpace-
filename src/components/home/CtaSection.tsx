import { Link } from "react-router-dom";

/**
 * Images live in: src/assets/images/hero/
 * Reused from the hero: shape-squiggle-lime.png, shape-squiggle-white.png, shape-cone-white.png
 * New: shape-cone-lime.png, shape-cylinder-white.png
 */
const hero = (name: string) =>
  new URL(`../../assets/images/hero/${name}`, import.meta.url).href;

const IMG = {
  squiggleLime: hero("shape-squiggle-lime.png"),
  squiggleWhite: hero("shape-squiggle-white.png"),
  coneWhite: hero("shape-cone-white.png"),
  coneLime: hero("shape-cone-lime.png"),
  cylinderWhite: hero("shape-cylinder-white.png"),
};

const LIME = "#c9ff00";

export default function CtaSection() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-brand bg-grid py-[120px] text-white"
      aria-labelledby="cta-creator-title"
    >
      {/* Decorative shapes on a 1440px frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 select-none md:block"
      >
        <img src={IMG.squiggleLime} alt="" className="absolute -left-8 -top-2 w-[190px]" />
        <img src={IMG.squiggleWhite} alt="" className="absolute left-[205px] top-[28px] w-[150px]" />
        <img src={IMG.coneWhite} alt="" className="absolute -left-2 top-[258px] w-[130px]" />
        <img src={IMG.squiggleLime} alt="" className="absolute left-[70px] top-[370px] w-[180px]" />

        <img src={IMG.coneLime} alt="" className="absolute left-[1096px] top-[19px] w-[130px]" />
        <img src={IMG.cylinderWhite} alt="" className="absolute -right-10 top-[123px] w-[200px]" />
        <img src={IMG.squiggleLime} alt="" className="absolute left-[1213px] top-[328px] w-[170px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[950px] flex-col items-center gap-6 px-6 text-center">
        <h2
          id="cta-creator-title"
          className="font-poppins text-[34px] font-semibold leading-[1.2] tracking-tight sm:text-[40px]"
        >
          Unlock Your Potential as a <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        <p className="text-[16px] leading-[1.7] text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link
          to="/register"
          className="mt-2 rounded-full px-8 py-3 text-[16px] font-medium text-gray-950 transition hover:brightness-95 active:scale-[0.98]"
          style={{ backgroundColor: LIME }}
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
