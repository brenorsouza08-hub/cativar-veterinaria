import { ArrowUpRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import SmartImage from './ui/SmartImage'
import Button from './ui/Button'
import { InstagramIcon } from './ui/BrandIcons'
import { images } from '../data/images'
import { site } from '../data/site'

export default function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-titulo" className="py-24 sm:py-32 lg:py-40">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Instagram</span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="instagram-titulo"
              className="mt-5 text-[2.1rem] leading-[1.08] font-light text-plum-900 sm:text-5xl lg:text-[3.4rem]"
            >
              Acompanhe a Cativar
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
              Conheça mais do nosso dia a dia e acompanhe a Cativar pelo Instagram.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10">
            <Button href={site.instagramUrl} external>
              <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
              {site.instagramHandle}
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {images.instagram.map((src, i) => (
            <Reveal key={src} delay={i * 70}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o Instagram ${site.instagramHandle}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <SmartImage
                  src={src}
                  alt=""
                  className="h-full w-full"
                  imgClassName="group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-plum-900/0 text-cream-50 opacity-0 transition-all duration-500 group-hover:bg-plum-900/45 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wide">
                    <InstagramIcon className="h-5 w-5" />
                    <span className="hidden sm:inline">Ver no Instagram</span>
                  </span>
                </span>
                <span className="absolute top-2.5 right-2.5 grid h-7 w-7 place-items-center rounded-full bg-cream-50/85 text-plum-900 backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
          <p className="col-span-3 mt-2 flex items-center justify-end gap-1.5 text-xs text-ink-500/80">
            Imagens ilustrativas · cada imagem abre o perfil no Instagram
            <ArrowUpRight className="h-3.5 w-3.5" />
          </p>
        </div>
      </div>
    </section>
  )
}
