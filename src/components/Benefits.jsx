import { HeartHandshake, Leaf, LayoutGrid, Star } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { site } from '../data/site'

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Atendimento',
    text: 'Uma experiência pensada para receber tutores e pets com atenção.',
  },
  {
    icon: Leaf,
    title: 'Cuidado',
    text: 'Um ambiente voltado ao bem-estar dos animais.',
  },
  {
    icon: LayoutGrid,
    title: 'Praticidade',
    text: 'Clínica, pet shop e banho e tosa em um só lugar.',
  },
  {
    icon: Star,
    title: 'Confiança',
    text: `Avaliação de ${site.rating.label} estrelas no Google, baseada em ${site.rating.count} avaliações.`,
  },
]

export default function Benefits() {
  return (
    <section id="cuidado" className="relative overflow-hidden bg-forest-800 py-24 text-cream-50 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-forest-600/40 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-sage-500/10 blur-3xl" />
      </div>

      <div className="container-site relative">
        <SectionHeading
          eyebrow="Nosso cuidado"
          title="Cuidar também é estar presente nos detalhes."
          tone="light"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-cream-50/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 110}
              className="group relative flex flex-col bg-forest-800 p-8 transition-colors duration-500 hover:bg-forest-700 sm:p-10"
            >
              <span className="font-serif text-sm text-sage-400">0{i + 1}</span>
              <span className="mt-10 grid h-14 w-14 place-items-center rounded-full border border-cream-50/15 text-honey-400 transition-all duration-500 ease-[var(--ease-soft)] group-hover:border-honey-400/60 group-hover:bg-cream-50/5">
                <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-2xl font-normal">{title}</h3>
              <p className="mt-3 leading-relaxed text-cream-100/70">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
