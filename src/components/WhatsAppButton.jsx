import { WhatsAppIcon } from './ui/BrandIcons'
import { whatsappLink } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

export default function WhatsAppButton() {
  const visible = useScrolled(240)

  return (
    <a
      href={whatsappLink('Olá! Gostaria de saber mais sobre os serviços da Cativar.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Cativar pelo WhatsApp"
      className={`group fixed right-4 bottom-4 z-40 flex items-center gap-3 transition-all duration-500 ease-[var(--ease-soft)] sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="hidden rounded-full bg-cream-50 px-4 py-2.5 text-sm font-semibold text-plum-900 opacity-0 shadow-[0_12px_30px_-12px_rgba(58,39,96,0.4)] ring-1 ring-plum-800/5 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block sm:translate-x-2">
        Fale com a Cativar
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-lilac-500 text-white shadow-[0_16px_40px_-12px_rgba(58,39,96,0.7)] transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        <span aria-hidden="true" className="animate-soft-ping absolute inset-0 rounded-full bg-lilac-400" />
        <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </span>
    </a>
  )
}
