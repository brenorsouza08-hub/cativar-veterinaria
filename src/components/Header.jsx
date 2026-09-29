import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './ui/Logo'
import { WhatsAppIcon, InstagramIcon } from './ui/BrandIcons'
import { navLinks, site, whatsappLink } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Header() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-[var(--ease-soft)] ${
          scrolled || open
            ? 'border-b border-forest-800/[0.07] bg-cream-50/85 shadow-[0_8px_30px_-20px_rgba(29,58,47,0.35)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`container-site flex items-center justify-between gap-6 transition-all duration-500 ease-[var(--ease-soft)] ${
            scrolled ? 'h-[4.25rem]' : 'h-[4.75rem] lg:h-24'
          }`}
        >
          <a href="#inicio" aria-label="Cativar — voltar ao início" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors duration-300 ${
                      active === link.id ? 'text-forest-900' : 'text-ink-500 hover:text-forest-900'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-honey-500 transition-transform duration-500 ease-[var(--ease-soft)] ${
                        active === link.id ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="grid h-11 w-11 place-items-center rounded-full border border-forest-800/15 text-forest-900 transition-colors hover:bg-forest-800/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 bg-cream-50 transition-all duration-500 ease-[var(--ease-soft)] lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        } ${scrolled ? 'top-[4.25rem]' : 'top-[4.75rem]'}`}
      >
        <nav aria-label="Navegação mobile" className="container-site flex h-full flex-col pt-6 pb-10">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className="border-b border-forest-800/[0.08] transition-all duration-500 ease-[var(--ease-soft)]"
                style={{
                  transitionDelay: open ? `${80 + i * 40}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(10px)',
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-serif text-[1.7rem] font-light text-forest-900"
                >
                  {link.label}
                  <ArrowUpRight className="h-5 w-5 text-sage-500" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-forest-800 text-base font-semibold text-cream-50"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com a Cativar
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-forest-800/20 text-base font-semibold text-forest-900"
            >
              <InstagramIcon className="h-5 w-5" />
              {site.instagramHandle}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
