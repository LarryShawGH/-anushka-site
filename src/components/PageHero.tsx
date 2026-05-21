import { cn } from '../lib/cn'

interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
  dark?: boolean
  className?: string
}

export default function PageHero({
  title,
  subtitle,
  eyebrow = 'Anushka Shah',
  dark,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'section-pad border-b',
        dark ? 'border-cream/10 bg-ink text-cream' : 'border-ink/5 bg-parchment',
        className,
      )}
    >
      <div className="mx-auto max-w-4xl">
        <p className={cn('label-caps mb-4', dark && 'text-cream/50')}>{eyebrow}</p>
        <h1 className="heading-display text-5xl lowercase sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'mt-6 max-w-2xl text-lg leading-relaxed',
              dark ? 'text-cream/70' : 'text-ink/70',
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
