interface Props {
  value: number; // e.g. 4.5
  count?: number; // review count
  size?: number;
}

/** Filled/half/empty star row + numeric value, matches the "4.5 (240) ⭐" pattern used across cards */
export default function RatingStars({ value, count, size = 16 }: Props) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-1 text-[14px] text-gray-950">
      <span className="font-medium">{value.toFixed(1)}</span>
      <span className="flex" style={{ fontSize: size }} aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < full ? "text-lime-700" : i === full && half ? "text-lime-600/60" : "text-gray-200"}>
            ★
          </span>
        ))}
      </span>
      {count !== undefined && <span className="text-gray-400">({count})</span>}
    </span>
  );
}
