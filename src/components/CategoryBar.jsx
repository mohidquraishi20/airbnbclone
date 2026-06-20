import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { categories } from "../data/listings";

export default function CategoryBar() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="page-shell flex items-center gap-3 py-4">
        <button className="icon-button hidden sm:inline-flex" aria-label="Previous categories">
          <ChevronLeft size={18} />
        </button>
        <div className="flex flex-1 gap-3 overflow-x-auto pb-1" aria-label="Stay categories">
          {categories.map((category) => (
            <button
              key={category}
              className="shrink-0 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-airbnb-muted transition hover:border-airbnb-ink hover:text-airbnb-ink"
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <button className="icon-button hidden sm:inline-flex" aria-label="Next categories">
          <ChevronRight size={18} />
        </button>
        <button className="pill-button hidden md:inline-flex" type="button">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>
    </section>
  );
}
