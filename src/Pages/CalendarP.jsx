import React from 'react'
import Style from '../Pages/Pages.module.scss'
import CalendarS from '../Components/Calendar/Calendar'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const CalendarP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <CalendarS />
            </div>
        </div>
    )
}

export default CalendarP