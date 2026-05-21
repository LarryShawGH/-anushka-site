import { Mail, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

const base = import.meta.env.BASE_URL

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="contact"
        subtitle="Interested in working together? Send a message — I don't bite, I promise :)"
        dark
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <img
              src={`${base}images/portrait-contact.jpg`}
              alt="Anushka Shah"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-ink/80">
                <Mail size={20} className="text-wine" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium hover:text-wine"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink/80">
                <MapPin size={20} className="mt-0.5 shrink-0 text-wine" />
                <span>{site.locations.join(' · ')}</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-ink/50">
              Typical inquiries: auditions, workshops, teaching residencies, play development,
              and collaborative projects.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-parchment p-8">
            <h2 className="heading-display text-3xl lowercase">Send a message</h2>
            <p className="mt-2 text-ink/60">I’ll respond as soon as I can.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
