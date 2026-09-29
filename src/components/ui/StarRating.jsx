import { Star } from 'lucide-react'

// Estrelas com preenchimento proporcional (ex.: 4,7 → 4 cheias + 70% da quinta)
export default function StarRating({ value, className = 'h-4 w-4', color = 'text-honey-500' }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`${String(value).replace('.', ',')} de 5 estrelas`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <span key={i} className="relative inline-block">
            <Star className={`${className} text-current opacity-25 ${color}`} strokeWidth={1.5} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={`${className} ${color} fill-current`} strokeWidth={1.5} />
            </span>
          </span>
        )
      })}
    </span>
  )
}
