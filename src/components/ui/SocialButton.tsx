import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string; // path to svg or icon
  label: string;
}

/** 72x72 rounded-[24px] outlined square with a 32px icon (matching Figma & homepage.md) */
export default function SocialButton({ icon, label, className, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "grid size-[72px] place-items-center rounded-[24px] border border-gray-200 bg-white shadow-sm transition hover:border-brand/50 hover:bg-gray-50 hover:shadow-md active:scale-95 cursor-pointer",
        className
      )}
      {...rest}
    >
      <img src={icon} alt="" className="size-8" />
    </button>
  );
}
