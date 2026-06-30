import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '../../../components/ui/button-link'

function SectionChip({ label, index = 0 }: { label: string; index?: number }) {
  const chips = [
    { rest: 'border-blue-200 bg-blue-50 text-blue-700', dark: 'dark:border-blue-800/50 dark:bg-blue-950/40 dark:text-blue-300' },
    { rest: 'border-sky-200 bg-sky-50 text-sky-700', dark: 'dark:border-sky-800/50 dark:bg-sky-950/40 dark:text-sky-300' },
    { rest: 'border-indigo-200 bg-indigo-50 text-indigo-700', dark: 'dark:border-indigo-800/50 dark:bg-indigo-950/40 dark:text-indigo-300' },
  ]
  const c = chips[index % chips.length]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${c.rest} ${c.dark}`}>
      {label}
    </span>
  )
}

export function ServicesProcessHero() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionChip label="El proceso" index={1} />
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Así convertimos una idea en una página web profesional
          </h2>
          <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            Cada proyecto sigue un proceso claro y colaborativo. Desde la primera conversación hasta la publicación de tu sitio, trabajamos contigo para que el resultado refleje exactamente lo que buscas.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/contacto" className="btn-loading">
              Comenzar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
