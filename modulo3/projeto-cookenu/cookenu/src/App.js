import React, {useState} from "react"
import Router from "./routes/routes/Router"
import theme from './constants/constants/theme'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/headres/Headers"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App