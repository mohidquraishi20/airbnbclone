import { listings } from "../data/listings";
import ListingCard from "./ListingCard";

export default function ListingGrid() {
  return (
    <section id="stays" className="page-shell py-12">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-airbnb-coral">Popular homes</p>
          <h2 className="section-title mt-2">Fresh places to stay</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-airbnb-muted">
          Each card is rendered from reusable listing data, making the homepage easy to extend with API results later.
        </p>
      </div>
      <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
