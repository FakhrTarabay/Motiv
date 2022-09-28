import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Booking from '../Components/Booking/Booking'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const BookingP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <Booking />
            </div>
        </div>
    )
}

export default BookingP