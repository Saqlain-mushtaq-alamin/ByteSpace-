import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/** Label S (14/500) + 52px field, 12px radius, gray-100 border */
const Input = forwardRef<HTMLInputElement, Props>(({ label, error, className, id, ...rest }, ref) => {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-[14px] font-medium leading-[1.2] text-gray-950">
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        className={cn(
          "h-[52px] w-full rounded-input border bg-white px-6 py-3 text-[18px] leading-[1.6] text-gray-950",
          "placeholder:text-gray-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20",
          error ? "border-red-500" : "border-gray-100",
          className
        )}
        {...rest}
      />
      {error && <p className="text-[12px] text-red-600">{error}</p>}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
