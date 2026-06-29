import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AppRouter } from './app/router'
import { ThemeProvider } from './theme/theme-provider'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
