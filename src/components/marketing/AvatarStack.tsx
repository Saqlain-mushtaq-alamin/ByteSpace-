interface Props {
  images: string[];
  extra: string; // "26+" / "2K+"
  size?: number; // 32 (course card) or 43 (happy students)
  overlap?: number; // 8 or 16
  extraClass?: string;
}

export default function AvatarStack({
  images,
  extra,
  size = 32,
  extraClass = "bg-gray-950 text-white font-bold",
}: Props) {
  return (
    <div className="flex items-center -space-x-2">
      {images.slice(0, 4).map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Student ${i + 1}`}
          style={{ width: `${size}px`, height: `${size}px` }}
          className="rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
        />
      ))}
      <span
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`relative z-10 grid place-items-center rounded-full text-[11px] font-bold ring-2 ring-white shadow-sm shrink-0 ${extraClass}`}
      >
        {extra}
      </span>
    </div>
  );
}
