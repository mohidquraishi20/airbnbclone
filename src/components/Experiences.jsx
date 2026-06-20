import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/listings";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-airbnb-soft py-12">
      <div className="page-shell">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-airbnb-coral">Beyond stays</p>
            <h2 className="section-title mt-2">Plan the whole trip</h2>
          </div>
          <a href="#" className="pill-button w-fit">
            See all
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {experiences.map((experience) => (
            <article key={experience.id} className="overflow-hidden rounded-2xl bg-white shadow-card">
              <img className="h-56 w-full object-cover" src={experience.image} alt={experience.title} loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-airbnb-muted">{experience.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
