import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold lowercase">{site.name}</p>
          <p className="mt-2 text-sm text-cream/60">{site.tagline}</p>
          <p className="mt-1 text-sm text-cream/50">
            {site.locations.join(' · ')}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link to="/portfolio" className="text-cream/70 transition hover:text-cream">
            Portfolio
          </Link>
          <Link to="/reel" className="text-cream/70 transition hover:text-cream">
            Reel
          </Link>
          <Link to="/contact" className="text-cream/70 transition hover:text-cream">
            Contact
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-cream/70 transition hover:text-cream"
          >
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-6 text-center text-xs text-cream/40 sm:px-8">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
