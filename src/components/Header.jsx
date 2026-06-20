import { useEffect, useState } from "react";
import { Globe2, Menu, Search, SlidersHorizontal, UserRound, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-airbnb-coral" aria-label="Airbnb clone home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-airbnb-coral text-lg font-black text-white">
            A
          </span>
          <span className="hidden text-xl font-bold sm:inline">airbnb</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-airbnb-ink md:flex" aria-label="Primary">
          <a href="#stays" className="hover:text-airbnb-coral">
            Stays
          </a>
          <a href="#experiences" className="hover:text-airbnb-coral">
            Experiences
          </a>
          <a href="#hosting" className="hover:text-airbnb-coral">
            Airbnb your home
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold hover:bg-airbnb-soft lg:inline-flex">
            Become a host
          </button>
          <button className="icon-button hidden sm:inline-flex" aria-label="Choose language and currency">
            <Globe2 size={18} />
          </button>
          {isScrolled && (
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="icon-button transition-all"
              aria-label={isSearchOpen ? "Close search" : "Open search"}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          )}
          <button className="pill-button" aria-label="Open account menu">
            <Menu size={18} />
            <UserRound size={18} />
          </button>
        </div>
      </div>

      <div
        className={`page-shell overflow-hidden transition-all duration-300 ${
          isScrolled && !isSearchOpen ? "max-h-0 opacity-0 pb-0" : "max-h-[260px] opacity-100 pb-4"
        }`}
      >
        <form className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-search md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r">
            <span className="block text-xs font-bold">Where</span>
            <input className="mt-1 w-full bg-transparent text-sm outline-none" placeholder="Search destinations" />
          </label>
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r">
            <span className="block text-xs font-bold">Check in</span>
            <input className="mt-1 w-full bg-transparent text-sm outline-none" placeholder="Add dates" />
          </label>
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r">
            <span className="block text-xs font-bold">Who</span>
            <input className="mt-1 w-full bg-transparent text-sm outline-none" placeholder="Add guests" />
          </label>
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <button className="pill-button md:hidden" type="button" aria-label="Open filters">
              <SlidersHorizontal size={18} />
              Filters
            </button>
            <button
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-airbnb-coral text-white transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-airbnb-coral focus:ring-offset-2"
              type="submit"
              aria-label="Search stays"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
