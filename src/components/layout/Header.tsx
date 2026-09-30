import { Link } from "react-router-dom";
import logoMark from "@/assets/icons/logo-mark.svg";

/** Header_Frame 47:501 — 120px tall, content starts at x=122 */
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 h-[120px]">
      <div className="mx-auto flex h-full max-w-[1196px] items-start px-6 pt-[35px] xl:px-0">
        <Link to="/" className="flex items-center gap-[9px] hover:opacity-90 transition">
          <img src={logoMark} alt="ByteSpace" className="h-[31.5px] w-[28.875px]" />
          <span className="font-clash text-[24px] font-bold text-white">ByteSpace</span>
        </Link>
      </div>
    </header>
  );
}
