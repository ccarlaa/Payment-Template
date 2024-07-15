import Router from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from './themes/index.theme'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
