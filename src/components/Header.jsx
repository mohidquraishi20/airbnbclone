import { useEffect, useState } from "react";
import { Globe2, Menu, Search, SlidersHorizontal, UserRound, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    window.localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-airbnb-coral" aria-label="Airbnb clone home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-airbnb-coral text-lg font-black text-white">
            A
          </span>
          <span className="hidden text-xl font-bold sm:inline">airbnb</span>
        </a>

        <button
          className="icon-button inline-flex md:hidden"
          aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          {isNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          className={`items-center gap-8 text-sm font-semibold text-airbnb-ink dark:text-slate-100 md:flex ${isNavOpen ? "flex flex-col gap-4 bg-white p-4 shadow-lg dark:bg-slate-950 md:flex-row md:bg-transparent md:p-0 md:shadow-none" : "hidden"}`}
          aria-label="Primary"
        >
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
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold hover:bg-airbnb-soft lg:inline-flex dark:text-slate-100">
            Become a host
          </button>
          <button className="icon-button hidden sm:inline-flex" aria-label="Choose language and currency">
            <Globe2 size={18} />
          </button>
          <button
            onClick={toggleTheme}
            className="icon-button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
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
          isScrolled && !isSearchOpen ? "max-h-0 opacity-0 pb-0" : "max-h-[520px] md:max-h-[260px] opacity-100 pb-4"
        } ${isNavOpen ? "max-h-[520px]" : ""}`}
      >
        <form className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-search md:grid-cols-[1.4fr_1fr_1fr_auto] dark:border-slate-800 dark:bg-slate-900">
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r dark:border-slate-800">
            <span className="block text-xs font-bold text-airbnb-ink dark:text-slate-200">Where</span>
            <input
              className="mt-1 w-full bg-transparent text-sm text-airbnb-ink outline-none placeholder:text-neutral-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              placeholder="Search destinations"
            />
          </label>
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r dark:border-slate-800">
            <span className="block text-xs font-bold text-airbnb-ink dark:text-slate-200">Check in</span>
            <input
              className="mt-1 w-full bg-transparent text-sm text-airbnb-ink outline-none placeholder:text-neutral-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              placeholder="Add dates"
            />
          </label>
          <label className="border-b border-neutral-200 px-6 py-4 md:border-b-0 md:border-r dark:border-slate-800">
            <span className="block text-xs font-bold text-airbnb-ink dark:text-slate-200">Who</span>
            <input
              className="mt-1 w-full bg-transparent text-sm text-airbnb-ink outline-none placeholder:text-neutral-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              placeholder="Add guests"
            />
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
