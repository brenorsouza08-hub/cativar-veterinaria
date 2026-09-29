import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', className = '' }) {
  const centered = align === 'center'
  const titleColor = tone === 'light' ? 'text-cream-50' : 'text-forest-900'
  const textColor = tone === 'light' ? 'text-cream-100/70' : 'text-ink-500'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${tone === 'light' ? 'text-sage-300' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`mt-5 text-[2.1rem] leading-[1.08] font-light sm:text-5xl lg:text-[3.4rem] ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={`mt-6 text-base leading-relaxed sm:text-lg ${textColor}`}>{description}</p>
        </Reveal>
      )}
    </div>
  )
}
