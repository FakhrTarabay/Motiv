import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import STA from './Pages/STA'
import STD from './Pages/STD'
import BookingP from './Pages/BookingP'
import SellingP from './Pages/SellingP'
const RoutesX = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact={true} path={'/'} element={<SignUp/>}/>
            <Route exact={true} path={'/Assets'} element={<STA/>}/>
            <Route exact={true} path={'/Dashboard'} element={<STD/>}/>
            <Route exact={true} path={'/Booking'} element={<BookingP/>}/>
            <Route exact={true} path={'/Login'} element={<SignIn/>}/>
            <Route exact={true} path={'/Selling'} element={<SellingP/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesX