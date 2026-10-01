import { Link } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";

/** Giant "404" in lime that fades out behind the heading */
const fadeText = {
  backgroundImage: "linear-gradient(180deg, #d4fb20 20%, rgba(212,251,32,0) 85%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-950">
      <section className="relative flex flex-1 flex-col items-center overflow-hidden bg-brand bg-grid px-6 pb-24 pt-[120px] text-center text-white lg:pb-[128px] lg:pt-[144px]">
        <HomeHeader />

        <p
          aria-hidden
          style={fadeText}
          className="select-none font-poppins text-[160px] font-bold leading-none sm:text-[300px] lg:text-[480px]"
        >
          404
        </p>

        <h1 className="relative -mt-12 max-w-[920px] font-poppins text-[32px] font-semibold leading-[1.3] sm:-mt-20 sm:text-[48px] lg:-mt-[100px] lg:text-[64px]">
          The page you are looking <br className="hidden sm:block" /> for doesn’t exist
        </h1>

        <p className="mt-8 max-w-[480px] text-[16px] leading-[1.6] text-white/80 lg:mt-10">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          to="/"
          className="mt-8 rounded-full bg-lime px-8 py-3 text-[16px] font-medium text-gray-950 transition hover:brightness-95 active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </section>

      <NewsletterFooter />
    </div>
  );
}
