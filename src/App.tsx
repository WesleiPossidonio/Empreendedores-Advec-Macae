import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from './contexts'
import { Router } from './routes/routes'
import { DefaultThemes } from './styles/theme/default'
import { GlobalStyled } from './styles/theme/globalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={DefaultThemes}>
            <ToastContainer />
            <GlobalStyled />
            <Router />
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
