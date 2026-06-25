import { useTheme } from '../../theme/theme-provider'
import logoForDarkBg from '../../../logo-principal-tema-oscuro.png'
import logoForLightBg from '../../../logo-principal-tema-blanco.png'

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
