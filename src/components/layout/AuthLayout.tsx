import type { ReactNode } from "react";
import Header from "./Header";
import HeroShowcase from "@/components/marketing/HeroShowcase";

interface Props {
  heroTitle: string;
  heroText: string;
  children: ReactNode;
}

/**
 * ByteSpace AuthLayout matching planning/homepage.md (1440x1024):
 * - Persian Blue background with subtle 120px grid
 * - Left column: Hero Title & description + HeroShowcase (floating cards, 3D shapes, Happy Students)
 * - Right column: 579px rounded-card white container with shadow
 */
export default function AuthLayout({ heroTitle, heroText, children }: Props) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-brand bg-grid text-white">
      <Header />

      <div className="relative mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center px-4 pb-16 pt-[120px] lg:grid-cols-2 lg:px-[120px]">
        {/* Left Column (Desktop) */}
        <section className="relative hidden lg:flex lg:flex-col lg:pr-12">
          <div className="flex max-w-[475px] flex-col gap-3 text-white">
            <h2 className="font-poppins text-[22px] font-semibold leading-tight tracking-[-0.2px]">
              {heroTitle}
            </h2>
            <p className="text-[17px] leading-[1.6] text-gray-100">
              {heroText}
            </p>
          </div>
          <HeroShowcase />
        </section>

        {/* Right Column — Form Card (579px wide, 24px radius) */}
        <section className="mx-auto w-full max-w-[579px] rounded-[24px] bg-white px-6 py-10 shadow-2xl sm:px-[54px] sm:py-[50px] lg:justify-self-end text-gray-950 border border-white/20">
          {children}
        </section>
      </div>
    </main>
  );
}
