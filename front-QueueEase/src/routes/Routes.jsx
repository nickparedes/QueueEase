import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const MyRoutes = () => {
  return (
    <Routes>        
        
        <Route exact path="/login" element = {<Login/>}/>
        

        
    </Routes>
  )
}

export default MyRoutes



//npm install react-router-dom