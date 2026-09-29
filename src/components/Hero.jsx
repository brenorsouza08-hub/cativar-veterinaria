import { ArrowDown, Stethoscope, ShoppingBag, Scissors } from 'lucide-react'
import Button from './ui/Button'
import SmartImage from './ui/SmartImage'
import StarRating from './ui/StarRating'
import { WhatsAppIcon } from './ui/BrandIcons'
import { images } from '../data/images'
import { site, whatsappLink } from '../data/site'

const segments = [
  { icon: Stethoscope, label: 'Clínica Veterinária' },
  { icon: ShoppingBag, label: 'Pet Shop' },
  { icon: Scissors, label: 'Banho e Tosa' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Fundo sutil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-sage-100 blur-3xl" />
        <div className="absolute top-1/2 -left-48 h-[28rem] w-[28rem] rounded-full bg-cream-200/70 blur-3xl" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="hero-in eyebrow">Manaus · Monte das Oliveiras</p>

          <h1 style={{ '--d': '100ms' }} className="hero-in mt-6 text-[2.6rem] leading-[1.04] font-light text-forest-900 sm:text-6xl lg:text-[4.4rem]">
            Cuidado, saúde e carinho para quem faz parte da{' '}
            <em className="font-normal text-forest-700 italic">sua família.</em>
          </h1>

          <p style={{ '--d': '220ms' }} className="hero-in mt-7 max-w-md text-lg leading-relaxed text-ink-500">
            Clínica Veterinária, Pet Shop, Banho e Tosa em Manaus.
          </p>

          <div style={{ '--d': '320ms' }} className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={whatsappLink()} external>
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              Falar pelo WhatsApp
            </Button>
            <Button href="#sobre" variant="outline">
              Conhecer a Cativar
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Button>
          </div>

          <ul
            style={{ '--d': '420ms' }}
            className="hero-in mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-forest-800/10 pt-7 text-sm text-ink-500"
          >
            {segments.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-sage-500" strokeWidth={1.6} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Composição de imagem */}
        <div style={{ '--d': '200ms' }} className="hero-in relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
            <SmartImage
              {...images.hero}
              eager
              className="arch absolute inset-0 shadow-[0_40px_80px_-40px_rgba(29,58,47,0.55)]"
            />
            <div
              aria-hidden="true"
              className="arch absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-forest-800/15 sm:translate-x-6 sm:translate-y-6"
            />
          </div>

          <div className="absolute -bottom-6 left-3 flex items-center gap-4 rounded-2xl bg-cream-50/95 p-4 pr-6 shadow-[0_20px_50px_-20px_rgba(29,58,47,0.45)] ring-1 ring-forest-800/5 backdrop-blur sm:-left-8 sm:p-5 sm:pr-7">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 font-serif text-lg text-cream-50">
              {site.rating.label}
            </span>
            <span className="flex flex-col gap-1">
              <StarRating value={site.rating.value} className="h-3.5 w-3.5" />
              <span className="text-xs font-medium text-ink-500">Google · {site.rating.count} avaliações</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
