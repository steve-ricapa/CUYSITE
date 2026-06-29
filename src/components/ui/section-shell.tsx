import type { ReactNode } from 'react'

export function SectionShell({ children, muted = false, style }: { children: ReactNode; muted?: boolean; style?: React.CSSProperties }) {
  return (
    <section className="section-shell" style={style ?? (muted ? { background: 'var(--surface)' } : undefined)}>
      <div className="container-shell">{children}</div>
    </section>
  )
}
