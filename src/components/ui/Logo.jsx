export default function Logo({ tone = 'dark', compact = false }) {
  const light = tone === 'light'
  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ${
          light ? 'ring-white/20' : 'ring-forest-800/10'
        }`}
      >
        <img src="/logo-cativar.png" alt="" className="h-full w-full origin-[50%_20%] scale-[1.75] object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.35rem] font-medium tracking-[0.2em] ${light ? 'text-cream-50' : 'text-forest-900'}`}
        >
          CATIVAR
        </span>
        {!compact && (
          <span
            className={`mt-1.5 hidden text-[0.58rem] font-semibold sm:block tracking-[0.14em] uppercase ${
              light ? 'text-sage-300' : 'text-sage-500'
            }`}
          >
            Clínica Veterinária • Pet Shop • Banho e Tosa
          </span>
        )}
      </span>
    </span>
  )
}
