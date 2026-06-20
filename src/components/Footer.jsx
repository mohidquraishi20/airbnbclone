const columns = [
  ["Support", "Help Center", "AirCover", "Cancellation options"],
  ["Hosting", "Airbnb your home", "Hosting resources", "Community forum"],
  ["Airbnb", "Newsroom", "Careers", "Investors"]
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-airbnb-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="page-shell grid gap-8 py-10 sm:grid-cols-3">
        {columns.map(([heading, ...links]) => (
          <div key={heading}>
            <h2 className="text-sm font-bold text-airbnb-ink dark:text-slate-100">{heading}</h2>
            <ul className="mt-3 space-y-2 text-sm text-airbnb-muted dark:text-slate-400">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-airbnb-coral dark:hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="page-shell border-t border-neutral-200 py-5 text-sm text-airbnb-muted dark:border-slate-800 dark:text-slate-400">
        <p>© 2026 Airbnb homepage clone. Educational project only.</p>
      </div>
    </footer>
  );
}
