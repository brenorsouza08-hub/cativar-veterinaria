import { ArrowUpRight, Stethoscope, ShoppingBag, Scissors } from 'lucide-react'
import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'
import SectionHeading from './ui/SectionHeading'
import { WhatsAppIcon } from './ui/BrandIcons'
import { images } from '../data/images'
import { whatsappLink } from '../data/site'

const services = [
  {
    number: '01',
    icon: Stethoscope,
    title: 'Clínica Veterinária',
    text: 'Atendimento e cuidado veterinário para a saúde e o bem-estar do seu pet.',
    cta: 'Saiba mais',
    message: 'Olá! Gostaria de saber mais sobre o atendimento da Clínica Veterinária Cativar.',
    image: images.services.clinica,
  },
  {
    number: '02',
    icon: ShoppingBag,
    title: 'Pet Shop',
    text: 'Produtos e itens para tornar a rotina do seu pet mais completa e confortável.',
    cta: 'Falar com a Cativar',
    message: 'Olá! Gostaria de saber mais sobre o Pet Shop da Cativar.',
    image: images.services.petshop,
  },
  {
    number: '03',
    icon: Scissors,
    title: 'Banho e Tosa',
    text: 'Cuidados de higiene e estética para deixar seu pet ainda mais confortável.',
    cta: 'Agendar pelo WhatsApp',
    message: 'Olá! Gostaria de agendar um horário de banho e tosa na Cativar.',
    image: images.services.banho,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative bg-cream-100 py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Serviços" title="Tudo para o cuidado do seu pet." />
          <Reveal delay={200} className="max-w-sm">
            <p className="text-base leading-relaxed text-ink-500">
              Clínica veterinária, pet shop e banho e tosa em Manaus, reunidos em um só lugar. Para detalhes e
              agendamentos, fale diretamente com a equipe.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              as="article"
              delay={i * 120}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 ring-1 ring-forest-800/[0.06] transition-[box-shadow,transform] duration-500 ease-[var(--ease-soft)] hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-40px_rgba(29,58,47,0.45)]"
            >
              <div className="relative p-2.5 pb-0">
                <SmartImage
                  {...service.image}
                  className="aspect-[4/3] rounded-[1.35rem]"
                  imgClassName="group-hover:scale-[1.04]"
                />
                <span className="absolute top-6 left-6 rounded-full bg-cream-50/90 px-3 py-1 font-serif text-sm text-forest-800 backdrop-blur">
                  {service.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-sage-500" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-2xl font-normal text-forest-900 sm:text-[1.7rem]">{service.title}</h3>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-ink-500">{service.text}</p>

                <a
                  href={whatsappLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex min-h-12 items-center justify-between gap-4 border-t border-forest-800/10 pt-6 text-[0.95rem] font-semibold text-forest-800"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <WhatsAppIcon className="h-4 w-4 text-sage-500" />
                    {service.cta}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-forest-800/15 transition-all duration-500 ease-[var(--ease-soft)] group-hover:rotate-45 group-hover:border-forest-800 group-hover:bg-forest-800 group-hover:text-cream-50">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
