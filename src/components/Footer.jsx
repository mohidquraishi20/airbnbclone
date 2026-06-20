const columns = [
  ["Support", "Help Center", "AirCover", "Cancellation options"],
  ["Hosting", "Airbnb your home", "Hosting resources", "Community forum"],
  ["Airbnb", "Newsroom", "Careers", "Investors"]
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-airbnb-soft">
      <div className="page-shell grid gap-8 py-10 sm:grid-cols-3">
        {columns.map(([heading, ...links]) => (
          <div key={heading}>
            <h2 className="text-sm font-bold">{heading}</h2>
            <ul className="mt-3 space-y-2 text-sm text-airbnb-muted">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-airbnb-coral">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="page-shell border-t border-neutral-200 py-5 text-sm text-airbnb-muted">
        <p>© 2026 Airbnb homepage clone. Educational project only.</p>
      </div>
    </footer>
  );
}
