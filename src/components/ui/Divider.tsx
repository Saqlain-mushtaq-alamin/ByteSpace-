export default function Divider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex w-full items-center gap-[11px]">
      <span className="h-px flex-1 bg-black-200" />
      <span className="text-[18px] leading-[1.6] text-black-400">{label}</span>
      <span className="h-px flex-1 bg-black-200" />
    </div>
  );
}
