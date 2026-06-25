import { Link, type LinkProps } from 'react-router-dom'

type ButtonLinkProps = LinkProps & {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function ButtonLink({ variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  const classes = variant === 'secondary' ? 'btn-secondary' : variant === 'ghost' ? 'btn-ghost' : 'btn-primary'

  return <Link {...props} className={`${classes} ${className}`.trim()} />
}
