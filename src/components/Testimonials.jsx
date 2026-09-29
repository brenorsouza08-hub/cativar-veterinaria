import { ArrowUpRight, Quote } from 'lucide-react'
import Reveal from './ui/Reveal'
import StarRating from './ui/StarRating'
import Button from './ui/Button'
import { GoogleIcon } from './ui/BrandIcons'
import { googleReviewsUrl, reviews, site } from '../data/site'

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-site grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Nota geral */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">Avaliações</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2.1rem] leading-[1.08] font-light text-plum-900 sm:text-5xl lg:text-[3.4rem]">
              O que os tutores dizem
            </h2>
          </Reveal>

          <Reveal delay={160} className="mt-10 flex items-end gap-5">
            <span className="font-serif text-7xl leading-none font-light text-plum-900 sm:text-8xl">
              {site.rating.label}
            </span>
            <span className="pb-2 text-lg text-ink-500">/ 5</span>
          </Reveal>
          <Reveal delay={220} className="mt-5 flex flex-col gap-2">
            <StarRating value={site.rating.value} className="h-5 w-5" />
            <span className="inline-flex items-center gap-2 text-sm text-ink-500">
              <GoogleIcon className="h-4 w-4" />
              Google · {site.rating.count} avaliações
            </span>
          </Reveal>

          <Reveal delay={280} className="mt-10">
            <Button href={googleReviewsUrl} external variant="outline">
              Ver avaliações no Google
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Reveal>
        </div>

        {/* Depoimentos */}
        <ul className="flex flex-col gap-5">
          {reviews.map((text, i) => (
            <Reveal
              as="li"
              key={text}
              delay={i * 120}
              className={`rounded-[1.75rem] border border-plum-800/[0.08] bg-white/70 p-8 transition-all duration-500 ease-[var(--ease-soft)] hover:border-plum-800/15 hover:shadow-[0_30px_60px_-40px_rgba(58,39,96,0.4)] sm:p-10 ${
                i === 1 ? 'lg:ml-12' : ''
              }`}
            >
              <figure>
                <Quote className="h-7 w-7 text-lilac-300" strokeWidth={1.4} aria-hidden="true" />
                <blockquote className="mt-5 font-serif text-xl leading-snug font-light text-plum-900 sm:text-2xl">
                  “{text}”
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-center gap-3 text-sm text-ink-500">
                  <GoogleIcon className="h-4 w-4" />
                  <span>Avaliação no Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
