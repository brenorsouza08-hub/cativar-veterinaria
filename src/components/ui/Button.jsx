const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.95rem] font-semibold tracking-[0.01em] transition-all duration-300 ease-[var(--ease-soft)] active:scale-[0.98] min-h-12 px-6 sm:px-7'

const variants = {
  primary:
    'bg-lilac-500 text-white shadow-[0_10px_30px_-12px_rgba(58,39,96,0.55)] hover:bg-plum-700 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(58,39,96,0.6)]',
  light:
    'bg-cream-50 text-plum-900 hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)]',
  outline:
    'border border-plum-800/20 text-plum-800 hover:border-plum-800/50 hover:bg-plum-800/[0.04]',
  outlineLight: 'border border-cream-50/30 text-cream-50 hover:border-cream-50/70 hover:bg-cream-50/[0.06]',
  link: 'min-h-0 px-0 sm:px-0 text-plum-800 hover:text-plum-600 rounded-none',
}

export default function Button({ href, variant = 'primary', external = false, className = '', children, ...props }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...props}>
      {children}
    </a>
  )
}
