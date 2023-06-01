import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import GlobalStyle from './styles/GlobalStyles.js'
import Rota from './pages/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rota />
    <GlobalStyle />
    
  </React.StrictMode>,
)

