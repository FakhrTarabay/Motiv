import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Booking from '../components/Booking/Booking'
import Top from '../components/Top/Top'
import SideMenu from '../components/SideMenu/SideMenu'
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