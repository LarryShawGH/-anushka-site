import { cn } from '../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && <p className="label-caps mb-3">{eyebrow}</p>}
      <h2 className="heading-display text-4xl lowercase md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink/70">{description}</p>
      )}
    </div>
  )
}
