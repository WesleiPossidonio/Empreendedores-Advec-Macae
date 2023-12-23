import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './routes/routes'
import { DefaultThemes } from './styles/theme/default'
import { GlobalStyled } from './styles/theme/globalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={DefaultThemes}>
          <GlobalStyled />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
