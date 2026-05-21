import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Collaboration inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:hello@anushkashahactor.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-parchment p-8 text-center">
        <p className="font-display text-2xl lowercase text-ink">thank you!</p>
        <p className="mt-2 text-ink/70">
          Your email client should open — send the message to complete your inquiry.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="label-caps mb-2 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="label-caps mb-2 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="label-caps mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
        <Send size={16} />
      </button>
      <p className="text-xs text-ink/50">
        Opens your email app — we can wire Formspree later for in-browser submit.
      </p>
    </form>
  )
}
