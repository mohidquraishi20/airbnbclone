import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-airbnb-soft dark:bg-slate-950">
      <div className="page-shell grid min-h-[560px] items-center gap-10 py-10 lg:grid-cols-[1fr_1.05fr] lg:py-14">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-normal text-airbnb-coral">Airbnb</p>
          <h1 className="text-4xl font-bold tracking-normal text-airbnb-ink dark:text-slate-100 sm:text-5xl lg:text-6xl">
            Find stays that feel made for the trip.
          </h1>
          <p className="mt-5 text-lg leading-8 text-airbnb-muted dark:text-slate-400">
            Explore hand-picked homes and unforgettable experiences worldwide. Connect with local hosts and discover amazing places to stay for every adventure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#stays" className="pill-button bg-airbnb-coral text-white hover:bg-rose-600">
              Explore homes
              <ArrowRight size={18} />
            </a>
            <a href="#experiences" className="pill-button">
              View experiences
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-card">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85"
            alt="Bright modern vacation home interior"
          />
          <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur dark:bg-slate-900/95">
              <div className="flex items-center gap-2 text-sm font-bold text-airbnb-ink dark:text-slate-100">
                <MapPin size={18} className="text-airbnb-coral" />
                Goa, India
              </div>
              <p className="mt-1 text-sm text-airbnb-muted dark:text-slate-400">Beach homes, private villas, and breezy stays.</p>
            </div>
            <div className="rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur dark:bg-slate-900/95">
              <div className="flex items-center gap-2 text-sm font-bold text-airbnb-ink dark:text-slate-100">
                <CalendarDays size={18} className="text-airbnb-coral" />
                Flexible dates
              </div>
              <p className="mt-1 text-sm text-airbnb-muted dark:text-slate-400">Weekend escapes and week-long retreats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
