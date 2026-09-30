import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[14px] text-gray-400">
      {items.map((c, i) => (
        <span key={c.label} className="flex items-center gap-2">
          {c.to ? (
            <Link to={c.to} className="hover:text-brand">{c.label}</Link>
          ) : (
            <span className="text-gray-950">{c.label}</span>
          )}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
