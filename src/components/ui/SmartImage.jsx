import { useState } from 'react'
import { PawPrint } from 'lucide-react'

/**
 * Imagem com carregamento suave e fallback elegante.
 * Se a foto não carregar, exibe um bloco neutro na paleta da marca —
 * útil enquanto as fotos reais da Cativar não são adicionadas.
 */
export default function SmartImage({ src, alt, label, className = '', imgClassName = '', eager = false }) {
  const [status, setStatus] = useState('loading')

  return (
    <div className={`${/\babsolute\b/.test(className) ? '' : 'relative'} overflow-hidden bg-lilac-100 ${className}`}>
      {status !== 'error' ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-[var(--ease-soft)] ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="grain flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-lilac-200 via-cream-100 to-cream-200 text-plum-700/60"
        >
          <PawPrint className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          {label && <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase">{label}</span>}
        </div>
      )}
    </div>
  )
}
