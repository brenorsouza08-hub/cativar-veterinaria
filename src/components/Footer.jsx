import Logo from './ui/Logo'
import { InstagramIcon, WhatsAppIcon } from './ui/BrandIcons'
import { site, whatsappLink } from '../data/site'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
  { href: site.instagramUrl, label: 'Instagram', external: true },
]

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-cream-100/70">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Cativar"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/15 text-cream-50 transition-colors hover:border-cream-50/50"
            >
              <InstagramIcon className="h-[1.1rem] w-[1.1rem]" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Cativar"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-50/15 text-cream-50 transition-colors hover:border-cream-50/50"
            >
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-xs font-semibold tracking-[0.2em] text-lilac-400 uppercase">Navegação</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="transition-colors hover:text-cream-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-lilac-400 uppercase">Contato</p>
          <address className="mt-5 flex flex-col gap-3 text-sm leading-relaxed not-italic">
            <span>
              {site.address.street}
              <br />
              {site.address.city}
            </span>
            <a href={site.phoneHref} className="transition-colors hover:text-cream-50">
              {site.phone}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-site flex flex-col gap-2 py-7 pb-24 text-xs sm:flex-row sm:justify-between sm:pb-7">
          <p>© 2026 Cativar. Todos os direitos reservados.</p>
          <p className="text-cream-100/40">Clínica veterinária, pet shop e banho e tosa em Manaus.</p>
        </div>
      </div>
    </footer>
  )
}
