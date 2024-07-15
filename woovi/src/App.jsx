import Router from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { ColorTheme } from './GlobalStyle/MuiTheme'

function App() {

  return (
    <ThemeProvider theme={ColorTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
