import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from './contexts'
import { Router } from './routes/routes'
import { DefaultThemes } from './styles/theme/default'
import { GlobalStyled } from './styles/theme/globalStyles'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider theme={DefaultThemes}>
            <GlobalStyled />
            <ToastContainer />
            <Router />
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
