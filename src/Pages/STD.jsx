import React from 'react'
import Style from '../Pages/Pages.module.scss'
import DashBoard from '../components/Dashboard/Dashboard'
import Top from '../components/Top/Top'
import SideMenu from '../components/SideMenu/SideMenu'
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