import { AppRouter } from './app/router'
import { ThemeProvider } from './theme/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
