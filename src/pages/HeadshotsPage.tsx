import { Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { headshots } from '../data/site'

const base = import.meta.env.BASE_URL

export default function HeadshotsPage() {
  return (
    <>
      <PageHero
        title="headshots + resumes"
        subtitle="Professional materials for agents, casting directors, and creative collaborators."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Acting resume',
                desc: 'Theater, film, and training credits',
                status: 'PDF — add file to public/downloads/',
              },
              {
                title: 'Theater resume',
                desc: 'Stage credits and education',
                status: 'PDF — add file to public/downloads/',
              },
              {
                title: 'Skills sheet',
                desc: 'Languages, movement, special skills',
                status: 'PDF — add file to public/downloads/',
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="rounded-2xl border border-ink/10 bg-parchment p-6"
              >
                <h3 className="font-display text-xl lowercase text-ink">{doc.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{doc.desc}</p>
                <p className="mt-4 text-xs text-ink/40">{doc.status}</p>
                <button
                  type="button"
                  className="btn-outline mt-6 w-full opacity-60"
                  disabled
                  title="Upload resume PDFs to enable downloads"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            ))}
          </div>

          <h2 className="heading-display mt-20 text-4xl lowercase">Headshots</h2>
          <p className="mt-3 text-ink/60">
            Images sourced from{' '}
            <a
              href="https://www.anushkashahactor.com/"
              className="text-wine underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              anushkashahactor.com
            </a>
            . High-res originals available on request.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {headshots.map((shot) => (
              <figure
                key={shot.id}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-cream"
              >
                <a
                  href={`${base}${shot.src.replace(/^\//, '')}`}
                  download
                  className="block"
                >
                  <img
                    src={`${base}${shot.src.replace(/^\//, '')}`}
                    alt={shot.alt}
                    className="aspect-[3/4] w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </a>
                <figcaption className="p-4">
                  <p className="label-caps">{shot.type}</p>
                  <p className="mt-1 font-medium text-ink">{shot.title}</p>
                  <a
                    href={`${base}${shot.src.replace(/^\//, '')}`}
                    download
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-wine"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-12 text-center text-ink/60">
            Need a specific crop or composite?{' '}
            <Link to="/contact" className="font-medium text-wine hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
