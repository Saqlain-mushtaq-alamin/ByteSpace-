import { Link } from "react-router-dom";
import HomeHeader from "@/components/home/HomeHeader";
import NewsletterFooter from "@/components/shared/NewsletterFooter";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-950">
      {/* 404 Hero Section matching Page 8 of ByteSpace New Check website.pdf */}
      <section className="relative flex flex-1 flex-col items-center justify-center bg-brand bg-grid px-6 pb-24 pt-[140px] text-center text-white overflow-hidden">
        <HomeHeader />

        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6">
          <h1 className="font-poppins text-[32px] font-semibold leading-[1.2] sm:text-[44px]">
            The page you are looking for doesn't exist
          </h1>

          <p className="font-poppins text-[100px] font-extrabold leading-none tracking-tight text-lime sm:text-[160px] drop-shadow-lg">
            404
          </p>

          <p className="max-w-[480px] text-body-l text-gray-100">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            to="/"
            className="mt-4 rounded-pill bg-lime px-8 py-3.5 text-label-l font-bold text-gray-950 transition hover:bg-lime/90 hover:scale-102 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer matching Page 8 */}
      <NewsletterFooter />
    </div>
  );
}
