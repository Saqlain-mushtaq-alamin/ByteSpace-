import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Lime pill button — Label L (18/500) */
export default function Button({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-pill bg-lime px-6 py-3 text-[18px] font-medium leading-[1.2] text-gray-950",
        "transition hover:brightness-95 active:scale-[0.98] disabled:opacity-60",
        className
      )}
      {...rest}
    />
  );
}
