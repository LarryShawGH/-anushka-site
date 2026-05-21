import { Film, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { reels } from '../data/site'

export default function ReelPage() {
  return (
    <>
      <PageHero
        title="reel"
        subtitle="Performance highlights for casting, creative teams, and festival submissions."
        dark
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-parchment">
            <div className="flex aspect-video flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink text-cream">
                <Play size={36} className="ml-1" />
              </div>
              <p className="font-display text-3xl lowercase text-ink">Main reel — coming soon</p>
              <p className="max-w-md text-ink/60">
                Add Vimeo or YouTube embed URLs in <code className="text-sm">src/data/site.ts</code>{' '}
                when your reel is ready. Request a private link anytime via contact.
              </p>
              <Link to="/contact" className="btn-primary mt-2">
                Request reel link
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="rounded-2xl border border-ink/10 bg-cream p-6"
              >
                <Film className="text-wine" size={28} />
                <h3 className="mt-4 font-display text-xl lowercase text-ink">{reel.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{reel.description}</p>
                {reel.duration && (
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-ink/40">
                    {reel.duration}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
