import { Home, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  { icon: Home, title: "Flexible hosting", copy: "Choose dates, pricing, and availability around your schedule." },
  { icon: ShieldCheck, title: "Trust focused", copy: "Clear profiles, reviews, and support help hosts feel confident." },
  { icon: Sparkles, title: "Standout presentation", copy: "Photography-first cards make homes feel premium and easy to compare." }
];

export default function HostCTA() {
  return (
    <section id="hosting" className="page-shell py-14">
      <div className="grid overflow-hidden rounded-[2rem] bg-airbnb-ink text-white lg:grid-cols-[0.9fr_1.1fr] dark:bg-slate-900">
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-normal text-rose-200">Host preview</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">Airbnb your home with confidence.</h2>
          <p className="mt-4 max-w-xl leading-7 text-neutral-300 dark:text-slate-400">
            This creative section adds an internship-project enhancement beyond the original homepage: a concise host
            value area that still fits the Airbnb-inspired visual language.
          </p>
          <button className="mt-7 rounded-full bg-white px-5 py-3 text-sm font-bold text-airbnb-ink transition hover:bg-neutral-100 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-300">
            Start hosting
          </button>
        </div>
        <div className="grid gap-4 bg-white/5 p-5 sm:grid-cols-3 lg:p-6 dark:bg-slate-950">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-2xl bg-white p-5 text-airbnb-ink dark:bg-slate-900 dark:text-slate-100">
                <Icon size={24} className="text-airbnb-coral" />
                <h3 className="mt-4 font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-airbnb-muted dark:text-slate-400">{benefit.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
