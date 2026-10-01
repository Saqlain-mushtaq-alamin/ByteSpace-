import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/icons/logo-mark.svg";

const browseLinks = [
  { label: "Featured Courses", to: "/search" },
  { label: "Featured Categories", to: "/search" },
  { label: "Business", to: "/search?category=Business" },
  { label: "IT & Software", to: "/search?category=IT%20%26%20Software" },
  { label: "Design", to: "/search?category=Design" },
];

const categoryLinks = [
  { label: "Development", to: "/search?category=Development" },
  { label: "Marketing", to: "/search?category=Marketing" },
  { label: "Photography", to: "/search?category=Photography" },
  { label: "Course Reviews", to: "/reviews" },
  { label: "Top Creators", to: "/creator/purepearl-studio" },
];

const platformLinks = [
  { label: "Become a Creator", to: "/register" },
  { label: "Affiliate Program", to: "/register" },
  { label: "Contact", to: "/" },
  { label: "Help & FAQ", to: "/" },
  { label: "About", to: "/" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/" },
  { label: "Terms of Service", to: "/" },
  { label: "Cookies Settings", to: "/" },
];

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-12 text-gray-950" aria-label="Site footer">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-16 px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[520px_1fr]">
          {/* Newsletter Column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link to="/" className="inline-flex items-center gap-2 transition hover:opacity-90">
                <img className="h-8 w-[29px]" alt="ByteSpace" src={logoMark} />
                <span className="font-clash text-2xl font-bold text-gray-950">ByteSpace</span>
              </Link>
              <p className="max-w-[500px] text-body-s text-gray-700">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <form className="flex max-w-[480px] flex-col gap-3 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
                <div className="relative flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Enter your email"
                    required
                    className="h-[52px] w-full rounded-pill border border-gray-200 bg-white px-6 text-body-m text-gray-950 placeholder:text-gray-400 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <button
                  type="submit"
                  className="h-[52px] shrink-0 rounded-pill bg-lime px-8 text-label-l font-semibold text-gray-950 transition hover:bg-lime/90 hover:shadow-md cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-body-xs text-gray-500" aria-live="polite">
                {submitted
                  ? "Thank you for subscribing to our newsletter! Check your inbox soon."
                  : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer navigation">
            <div className="flex flex-col gap-4">
              <h2 className="text-body-m font-semibold text-gray-950">Browse</h2>
              <ul className="flex flex-col gap-3">
                {browseLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-body-s text-gray-700 transition hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-body-m font-semibold text-gray-950">Categories</h2>
              <ul className="flex flex-col gap-3">
                {categoryLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-body-s text-gray-700 transition hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-body-m font-semibold text-gray-950">Platform</h2>
              <ul className="flex flex-col gap-3">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-body-s text-gray-700 transition hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-xs text-gray-500">@ 2024 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.to} className="text-body-xs text-gray-500 transition hover:text-brand">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
