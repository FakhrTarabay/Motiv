import React from 'react'
import Style from '../Pages/Pages.module.scss'
import DashBoard from '../Components/Dashboard/Dashboard'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const STD = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <DashBoard />
            </div>
        </div>
    )
}

export default STD