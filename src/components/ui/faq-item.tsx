type FaqItemProps = {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group rounded-[1.75rem] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold" style={{ color: 'var(--primary)' }}>
        <span>{question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-semibold transition group-open:rotate-45" style={{ background: 'var(--surface-muted)', color: 'var(--secondary)' }}>
          +
        </span>
      </summary>
      <div className="faq-content">
        <p className="body-md mt-4 max-w-3xl">{answer}</p>
      </div>
    </details>
  )
}
