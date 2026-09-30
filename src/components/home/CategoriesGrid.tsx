import { Link } from "react-router-dom";

export interface CategoryItem {
  label: string;
  icon: (props: { className?: string }) => JSX.Element;
}

function IconDraftingCompass({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m14 10 4 4" />
      <path d="m6 18 4-4" />
      <circle cx="12" cy="7" r="3" />
      <path d="M12 10v4" />
      <path d="m4.93 19.07 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
    </svg>
  );
}

function IconCodeBrackets({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconLaptop({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IconBusinessBuilding({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" strokeWidth="2.5" />
    </svg>
  );
}

function IconMegaphone({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 11 18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function IconCamera({ className = "size-6" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#242528" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

export const HOME_CATEGORIES: CategoryItem[] = [
  { label: "Design", icon: IconDraftingCompass },
  { label: "Development", icon: IconCodeBrackets },
  { label: "IT & Software", icon: IconLaptop },
  { label: "Business", icon: IconBusinessBuilding },
  { label: "Marketing", icon: IconMegaphone },
  { label: "Photography", icon: IconCamera },
];

export default function CategoriesGrid() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
      {HOME_CATEGORIES.map(({ label, icon: Icon }) => (
        <Link
          key={label}
          to={`/search?category=${encodeURIComponent(label)}`}
          className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl shadow-xs"
        >
          <div className="flex size-16 items-center justify-center rounded-full bg-lime text-gray-950 transition duration-300 group-hover:scale-110 shadow-sm">
            <Icon className="size-7" />
          </div>
          <span className="font-poppins text-base font-semibold text-gray-950 transition group-hover:text-brand">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
