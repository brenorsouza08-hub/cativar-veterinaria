import { MapPin, Phone, Navigation } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { WhatsAppIcon, InstagramIcon } from './ui/BrandIcons'
import { mapsEmbedUrl, mapsSearchUrl, site, whatsappLink } from '../data/site'

const items = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: (
      <>
        {site.address.street}
        <br />
        {site.address.city}, {site.address.zip}
      </>
    ),
    href: mapsSearchUrl,
    external: true,
  },
  { icon: Phone, label: 'WhatsApp / Telefone', value: site.phone, href: whatsappLink(), external: true },
  { icon: InstagramIcon, label: 'Instagram', value: site.instagramHandle, href: site.instagramUrl, external: true },
]

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-plum-900 py-24 text-cream-50 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-plum-700/60 blur-3xl" />
      </div>

      <div className="container-site relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <Reveal>
            <span className="eyebrow text-lilac-300">Contato</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2.3rem] leading-[1.06] font-light sm:text-5xl lg:text-[3.6rem]">
              Seu pet merece cuidado. <em className="text-gold-400 italic">A Cativar está aqui.</em>
            </h2>
          </Reveal>

          <Reveal delay={160} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink()} external variant="light">
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              Falar no WhatsApp
            </Button>
            <Button href={site.instagramUrl} external variant="outlineLight">
              <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
              Instagram
            </Button>
          </Reveal>

          <ul className="mt-14 flex flex-col divide-y divide-cream-50/10 border-y border-cream-50/10">
            {items.map(({ icon: Icon, label, value, href, external }, i) => (
              <Reveal as="li" key={label} delay={200 + i * 80}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-start gap-5 py-6 transition-colors"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream-50/15 text-gold-400 transition-colors duration-300 group-hover:border-gold-400/60">
                    <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-[0.18em] text-lilac-400 uppercase">{label}</span>
                    <span className="text-base leading-relaxed text-cream-50 transition-colors group-hover:text-white sm:text-lg">
                      {value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="flex flex-col">
          <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-[1.75rem] bg-plum-800 ring-1 ring-cream-50/10 lg:min-h-[32rem]">
            <iframe
              title="Mapa de localização da Cativar"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
              allowFullScreen
            />
          </div>
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-lilac-300 transition-colors hover:text-cream-50"
          >
            <Navigation className="h-4 w-4" strokeWidth={1.75} />
            Abrir no Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  )
}
