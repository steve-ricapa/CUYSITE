import type { ReactNode } from 'react'

export function SectionShell({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <section className="section-shell" style={muted ? { background: 'var(--surface)' } : undefined}>
      <div className="container-shell">{children}</div>
    </section>
  )
}
