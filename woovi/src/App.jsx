import Router from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { ColorTheme } from './themes/index.theme'

function App() {

  return (
    <ThemeProvider theme={ColorTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
