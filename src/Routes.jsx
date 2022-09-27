import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginSignUp from './components/Auth/Auth'
import STA from './Pages/STA'
import STD from './Pages/STD'

const RoutesX = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact={true} path={'/'} element={<LoginSignUp/>}/>
            <Route exact={true} path={'/STA'} element={<STA/>}/>
            <Route exact={true} path={'/STD'} element={<STD/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesX