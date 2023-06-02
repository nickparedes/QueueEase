import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/ThemeContext'
import Login from './pages/Login'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/Routes'
// import './App.css'

function App() {
 

  return (
    <>  
    
      <ThemeProvider >
          <BrowserRouter>
            <MyRoutes/>
          </BrowserRouter>
      </ThemeProvider>
   
    </>

  )
}

export default App
