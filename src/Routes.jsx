import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginSignUp from './components/Auth/Auth'
import STA from './Pages/STA'
import STD from './Pages/STD'
import BookingP from './Pages/BookingP'
const RoutesX = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact={true} path={'/'} element={<LoginSignUp/>}/>
            <Route exact={true} path={'/Assets'} element={<STA/>}/>
            <Route exact={true} path={'/Dashboard'} element={<STD/>}/>
            <Route exact={true} path={'/Booking'} element={<BookingP/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesX