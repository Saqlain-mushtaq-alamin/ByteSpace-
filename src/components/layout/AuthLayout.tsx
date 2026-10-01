
import type { ReactNode } from "react";
import Header from "./Header";
import HeroShowcase from "@/components/marketing/HeroShowcase";

interface Props {
  heroTitle: string;
  heroText: string;
  children: ReactNode;
}

/**
 * Auth layout
 *
 * Desktop:
 * - Left side: hero title, description and decorative showcase
 * - Right side: authentication form card
 *
 * Mobile:
 * - Form card is shown
 * - Hero showcase is hidden
 */
export default function AuthLayout({
  heroTitle,
  heroText,
  children,
}: Props) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-brand bg-grid text-white">
      <Header />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-4 pb-12 pt-[90px] sm:px-6 sm:pb-16 sm:pt-[110px] lg:grid lg:min-h-[1024px] lg:grid-cols-2 lg:px-[120px] lg:pb-5 lg:pt-0">
        {/* Desktop Left column (100% exact Figma specs) */}
        <section className="relative hidden lg:block">
          {/* Hero text */}
          <div className="absolute left-0 top-[115px] z-20 flex w-[475px] flex-col gap-3">
            <h2 className="font-poppins text-[20px] font-semibold leading-[1.3]">
              {heroTitle}
            </h2>

            <p className="text-[16px] leading-[1.6] text-white">
              {heroText}
            </p>
          </div>

          {/* Decorative artwork + course cards */}
          <HeroShowcase />
        </section>

        {/* Mobile & Tablet: Hero branding + responsive showcase */}
        <section className="mx-auto flex w-full max-w-[579px] flex-col items-center gap-4 pb-8 text-center lg:hidden">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-[22px] font-semibold leading-[1.3] text-white sm:text-[28px]">
              {heroTitle}
            </h2>
            <p className="text-[14px] leading-[1.6] text-blue-100 sm:text-[16px]">
              {heroText}
            </p>
          </div>

          <div className="w-full">
            <HeroShowcase />
          </div>
        </section>

        {/* Right column: Form Card */}
        <section className="flex items-center lg:justify-end">
          <div className="mx-auto w-full max-w-[579px] rounded-[24px] bg-white px-5 py-8 text-gray-950 shadow-2xl sm:px-[63px] sm:py-[56px] lg:mx-0">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

