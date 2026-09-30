import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/icons/logo-mark.svg";
import cartIcon from "@/assets/icons/cart.svg";

/** Header_Frame 1:1778 — transparent over hero, 120px tall */
export default function HomeHeader() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[120px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 xl:px-[120px]">
        <Link to="/" className="flex items-center gap-[9px] hover:opacity-90 transition">
          <img src={logoMark} alt="ByteSpace" className="h-[31.5px] w-[28.875px]" />
          <span className="font-clash text-[24px] font-bold text-gray-50">ByteSpace</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[16px] text-gray-50 md:flex">
          <Link
            to="/"
            className={`font-medium transition hover:text-lime ${isActive("/") ? "text-lime font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`transition hover:text-lime ${isActive("/search") ? "text-lime font-semibold" : ""}`}
          >
            Courses
          </Link>
          <Link
            to="/creator/purepearl-studio"
            className={`transition hover:text-lime ${location.pathname.startsWith("/creator") ? "text-lime font-semibold" : ""}`}
          >
            Creators
          </Link>
          <Link
            to="/reviews"
            className={`transition hover:text-lime ${isActive("/reviews") ? "text-lime font-semibold" : ""}`}
          >
            Reviews
          </Link>
        </nav>

        <div className="flex items-center gap-6 text-[16px] text-gray-50">
          <Link to="/login" className="hover:text-lime transition font-medium">
            Sign In
          </Link>
          <Link
            to="/register"
            className="rounded-pill bg-lime px-5 py-2.5 text-[15px] font-semibold text-gray-950 transition hover:bg-lime/90 hover:shadow-lg"
          >
            Join Us
          </Link>
          <Link to="/search" title="View Cart / Courses" className="relative p-1 hover:opacity-80 transition">
            <img src={cartIcon} alt="Cart" className="size-6" />
            <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-lime text-[10px] font-bold text-gray-950">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
