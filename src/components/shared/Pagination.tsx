interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="grid size-10 place-items-center rounded-pill border border-gray-100 text-gray-700 disabled:opacity-40"
      >
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`grid size-10 place-items-center rounded-pill text-[14px] font-medium ${
            p === page ? "bg-brand text-white" : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="grid size-10 place-items-center rounded-pill border border-gray-100 text-gray-700 disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
