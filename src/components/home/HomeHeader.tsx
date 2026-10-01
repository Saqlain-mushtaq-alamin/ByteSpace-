import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/icons/logo-mark.svg";
import cartIcon from "@/assets/icons/cart.svg";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/search" },
  { label: "Creators", to: "/creator/purepearl-studio" },
];

/** Transparent header over the blue hero, 120px tall */
export default function HomeHeader() {
  const { pathname } = useLocation();
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(`/${to.split("/")[1]}`));

  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[120px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 xl:px-[120px]">
        <Link to="/" className="flex items-center gap-[9px] transition hover:opacity-90">
          <img src={logoMark} alt="" className="h-[31.5px] w-[28.875px]" />
          <span className="font-clash text-[24px] font-bold text-white">ByteSpace</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[16px] text-white md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className={`transition hover:opacity-80 ${isActive(n.to) ? "font-semibold" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6 text-[16px] text-white">
          <Link to="/login" className="transition hover:opacity-80">Sign In</Link>
          <Link to="/register" className="transition hover:opacity-80">Join Us</Link>
          <Link to="/search" aria-label="Cart" className="p-1 transition hover:opacity-80">
            <img src={cartIcon} alt="" className="size-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
