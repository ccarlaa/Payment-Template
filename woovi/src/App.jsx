import Router from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from './Themes/index.theme'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
