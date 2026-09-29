import { Stethoscope, ShoppingBag, Scissors } from 'lucide-react'
import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'
import Button from './ui/Button'
import { WhatsAppIcon } from './ui/BrandIcons'
import { images } from '../data/images'
import { whatsappLink } from '../data/site'

const pillars = [
  { icon: Stethoscope, label: 'Clínica Veterinária' },
  { icon: ShoppingBag, label: 'Pet Shop' },
  { icon: Scissors, label: 'Banho e Tosa' },
]

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Composição visual */}
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="relative pr-10 pb-16 sm:pr-16 sm:pb-20">
            <SmartImage
              {...images.aboutMain}
              className="aspect-[4/5] rounded-[1.75rem] shadow-[0_40px_80px_-45px_rgba(58,39,96,0.6)]"
              imgClassName="hover:scale-[1.03]"
            />
            <div className="absolute right-0 bottom-0 w-[46%] rounded-[1.5rem] bg-cream-50 p-2 shadow-[0_30px_60px_-30px_rgba(58,39,96,0.5)]">
              <SmartImage {...images.aboutDetail} className="arch aspect-[3/4]" />
            </div>
            <div
              aria-hidden="true"
              className="grain absolute -top-8 -left-8 -z-10 h-40 w-40 rounded-full bg-lilac-100 sm:h-56 sm:w-56"
            />
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Sobre a Cativar</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2.1rem] leading-[1.08] font-light text-plum-900 sm:text-5xl lg:text-[3.4rem]">
              Um cuidado que vai <em className="italic">além</em> do atendimento.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-base leading-relaxed text-ink-700 sm:text-lg">
              Na Cativar, o cuidado com os pets está no centro de cada experiência. Reunindo atendimento
              veterinário, pet shop e cuidados de banho e tosa, a proposta é oferecer praticidade e atenção para
              tutores que querem cuidar bem de seus animais.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-plum-800/10 bg-white/60 px-4 py-4 sm:flex-col sm:items-start sm:gap-4 sm:px-5 sm:py-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lilac-100 text-plum-800">
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-plum-900">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320} className="mt-10">
            <Button href={whatsappLink()} external variant="link" className="text-base">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              <span className="border-b border-plum-800/30 pb-0.5 transition-colors group-hover:border-plum-800">
                Fale com a Cativar
              </span>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
