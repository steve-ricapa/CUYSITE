import { useTheme } from '../../theme/theme-provider'

const logoForDarkBg = '/assets/logo-principal-tema-oscuro.png'
const logoForLightBg = '/assets/logo-principal-tema-blanco.png'

type BrandLogoProps = {
  variant?: 'light' | 'dark' | 'auto'
  className?: string
  alt?: string
}

export function BrandLogo({ variant = 'auto', className, alt = 'Cuysite' }: BrandLogoProps) {
  const { theme } = useTheme()

  const src = variant === 'light' ? logoForDarkBg
    : variant === 'dark' ? logoForLightBg
    : theme === 'dark' ? logoForDarkBg : logoForLightBg

  return <img src={src} alt={alt} className={className} />
}
