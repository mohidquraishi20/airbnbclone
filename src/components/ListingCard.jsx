import { Heart, Star } from "lucide-react";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

export default function ListingCard({ listing }) {
  return (
    <article className="group">
      <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-slate-900">
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={listing.image}
          alt={listing.title}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold shadow dark:bg-slate-950 dark:text-slate-100">
          {listing.badge}
        </span>
        <button
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-airbnb-ink transition hover:scale-105 dark:bg-slate-900/90 dark:text-slate-100"
          type="button"
          aria-label={`Save ${listing.title}`}
        >
          <Heart size={18} />
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-airbnb-ink dark:text-slate-100">{listing.location}</h3>
          <p className="mt-1 text-sm text-airbnb-muted dark:text-slate-400">{listing.distance}</p>
          <p className="text-sm text-airbnb-muted dark:text-slate-400">{listing.dates}</p>
          <p className="mt-1 text-sm">
            <span className="font-bold text-airbnb-ink dark:text-slate-100">{currencyFormatter.format(listing.price)}</span> night
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm text-airbnb-ink dark:text-slate-200">
          <Star size={15} className="fill-airbnb-ink text-airbnb-ink dark:fill-slate-200 dark:text-slate-200" />
          {listing.rating}
        </div>
      </div>
    </article>
  );
}
