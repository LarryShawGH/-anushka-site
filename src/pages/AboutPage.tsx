import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { aboutCopy } from '../data/site'

const base = import.meta.env.BASE_URL

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutCopy.title}
        subtitle="Performer, playwright, poet — building work at the intersection of stage, text, and community."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            {aboutCopy.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-ink/80">
                {p}
              </p>
            ))}
          </div>
          <div className="lg:col-span-2">
            <img
              src={`${base}images/portrait-about.jpg`}
              alt="Anushka Shah in theatrical production"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <dl className="mt-8 grid gap-4 rounded-2xl border border-ink/10 bg-parchment p-6">
              {aboutCopy.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="label-caps">{h.label}</dt>
                  <dd className="mt-1 font-medium text-ink">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-ink/5 bg-parchment">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="heading-display text-4xl lowercase">say hi!</h2>
            <p className="mt-4 text-lg text-ink/70">
              Let’s create together! Tell me a little about yourself and I will get in touch
              with you as soon as I can. Can’t wait {'<3'}
            </p>
            <p className="mt-6 text-sm text-ink/50">
              Or jump to the{' '}
              <Link to="/contact" className="font-medium text-wine underline-offset-2 hover:underline">
                contact page
              </Link>{' '}
              for booking inquiries.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
