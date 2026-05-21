import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { type ProjectCategory, projects } from '../data/site'
import { cn } from '../lib/cn'

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'theater', label: 'Theater' },
  { id: 'festival', label: 'Festivals' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'playwriting', label: 'Playwriting' },
]

const base = import.meta.env.BASE_URL

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        title="portfolio"
        subtitle="Selected credits, festivals, and creative collaborations — theater, education, and new work."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Credits"
            title="Recent work"
            description="Replace or extend project cards as new productions and contracts are added."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition',
                  filter === f.id
                    ? 'bg-ink text-cream'
                    : 'bg-parchment text-ink/70 hover:bg-ink/5',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-sm transition hover:shadow-xl"
              >
                {project.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={`${base}${project.image.replace(/^\//, '')}`}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="label-caps">{project.venue}</p>
                      <h3 className="mt-1 font-display text-2xl lowercase text-ink">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-parchment px-3 py-1 text-xs font-medium text-ink/60">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-wine">{project.role}</p>
                  <p className="mt-3 text-ink/70">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
