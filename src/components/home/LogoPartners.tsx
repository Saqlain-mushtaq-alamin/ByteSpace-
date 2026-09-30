const partners = ["EduCore", "Skillnest", "Learnify", "BrightPath", "NovaEd"];

/** Frame 2 (1:1794) — 5 partner wordmarks under the hero */
export default function LogoPartners() {
  return (
    <div className="bg-brand pb-[80px]">
      <div className="mx-auto flex w-[1132px] max-w-full flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6">
        {partners.map((name) => (
          <span key={name} className="font-poppins text-[20px] font-semibold text-white/50">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
