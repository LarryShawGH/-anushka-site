import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeCopy, site, skills } from '../data/site'

const base = import.meta.env.BASE_URL

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src={`${base}images/hero.jpg`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
          <p className="label-caps mb-4 text-cream/60">{site.tagline}</p>
          <h1 className="heading-display max-w-3xl text-5xl lowercase text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            {site.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
            {homeCopy.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/portfolio" className="btn-primary">
              {homeCopy.cta}
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-ink">
              Book / collaborate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="label-caps mb-4">Introduction</p>
            <h2 className="heading-display text-4xl lowercase md:text-5xl">
              {homeCopy.greeting}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Available for theater, film, new work development, teaching residencies, and
              collaborative creation. Based in {site.locations.join(' and ')} — open to
              travel for the right project.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-medium text-wine transition hover:gap-3"
            >
              Learn more about me
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={`${base}images/portrait-home.jpg`}
                alt="Anushka Shah portrait"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-wine px-5 py-4 text-cream shadow-lg">
                <p className="font-display text-xl lowercase">BFA Acting</p>
                <p className="text-xs text-cream/70">CalArts · 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/5 bg-parchment">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 shrink-0 text-wine" size={22} />
            <div>
              <h2 className="heading-display text-3xl lowercase md:text-4xl">
                For casting & creative teams
              </h2>
              <p className="mt-3 max-w-2xl text-ink/70">
                Headshots, resume materials, and reel requests — everything in one place for
                auditions, workshops, and contract inquiries.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: '/headshots', label: 'Headshots + Resume', desc: 'Download-ready materials' },
              { to: '/reel', label: 'Reel', desc: 'Performance highlights' },
              { to: '/portfolio', label: 'Portfolio', desc: 'Credits & projects' },
              { to: '/contact', label: 'Contact', desc: 'Say hi — let’s create' },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group rounded-2xl border border-ink/10 bg-cream p-6 transition hover:border-wine/30 hover:shadow-lg"
              >
                <p className="font-display text-xl lowercase text-ink group-hover:text-wine">
                  {card.label}
                </p>
                <p className="mt-2 text-sm text-ink/60">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-cream">
        <div className="mx-auto max-w-7xl">
          <p className="label-caps text-cream/50">Core skills</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/90"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
