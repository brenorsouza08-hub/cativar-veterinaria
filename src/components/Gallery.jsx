import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'
import SectionHeading from './ui/SectionHeading'
import { images } from '../data/images'

// Posições editoriais (mobile: 2 colunas · desktop: 4 colunas)
const layout = [
  'row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2',
  'col-span-2 lg:col-start-2 lg:row-start-1 lg:col-span-2',
  'lg:col-start-2 lg:row-start-2',
  'lg:col-start-3 lg:row-start-2',
  'col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2',
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-cream-100 py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Galeria" title="Momentos de cuidado." />
          <Reveal delay={200}>
            <p className="max-w-xs text-sm leading-relaxed text-ink-500">
              Pets, atendimento, cuidados, ambiente e pet shop — um olhar sobre o dia a dia da Cativar.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-flow-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-5 lg:mt-20 lg:auto-rows-[17rem] lg:grid-cols-4 lg:gap-6">
          {images.gallery.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} className={`group relative ${layout[i]}`}>
              <SmartImage
                src={item.src}
                alt={item.alt}
                className="h-full w-full rounded-[1.5rem]"
                imgClassName="group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-forest-950/45 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 rounded-full bg-cream-50/90 px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.18em] text-forest-900 uppercase backdrop-blur sm:bottom-5 sm:left-5">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-ink-500/80">
          Imagens ilustrativas — espaço preparado para as fotos reais da Cativar.
        </p>
      </div>
    </section>
  )
}
