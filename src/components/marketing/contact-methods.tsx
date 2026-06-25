import type { LucideIcon } from 'lucide-react'

type ContactMethod = {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export function ContactMethods({ items }: { items: ContactMethod[] }) {
  return (
    <div className="grid gap-4">
      {items.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          className="feature-card flex items-center gap-4"
        >
          <div className="icon-chip">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
              {label}
            </p>
            <p className="text-base font-semibold" style={{ color: 'var(--primary)' }}>
              {value}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
