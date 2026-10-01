import { Link } from "react-router-dom";
import logoMark from "@/assets/icons/logo-mark.svg";

/** Auth header: logo mark only, content starts at x=122 */
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[72px] sm:h-[90px] lg:h-[120px]">
      <div className="mx-auto flex h-full max-w-[1196px] items-center px-6 pt-0 lg:items-start lg:pt-[30px] xl:px-0">
        <Link to="/" aria-label="ByteSpace home" className="transition hover:opacity-90">
          <img src={logoMark} alt="ByteSpace" className="h-[31.5px] w-[28.875px]" />
        </Link>
      </div>
    </header>
  );
}
