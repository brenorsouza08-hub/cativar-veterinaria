const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.95rem] font-semibold tracking-[0.01em] transition-all duration-300 ease-[var(--ease-soft)] active:scale-[0.98] min-h-12 px-6 sm:px-7'

const variants = {
  primary:
    'bg-forest-800 text-cream-50 shadow-[0_10px_30px_-12px_rgba(29,58,47,0.55)] hover:bg-forest-700 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(29,58,47,0.6)]',
  light:
    'bg-cream-50 text-forest-900 hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)]',
  outline:
    'border border-forest-800/20 text-forest-800 hover:border-forest-800/50 hover:bg-forest-800/[0.04]',
  outlineLight: 'border border-cream-50/30 text-cream-50 hover:border-cream-50/70 hover:bg-cream-50/[0.06]',
  link: 'min-h-0 px-0 sm:px-0 text-forest-800 hover:text-forest-600 rounded-none',
}

export default function Button({ href, variant = 'primary', external = false, className = '', children, ...props }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...props}>
      {children}
    </a>
  )
}
