import React from 'react'
import css from '../Pages/Pages.module.scss'
import DashBoard from '../components/Dashboard/Dashboard'
import Top from '../components/Top/Top'
import SideMenu from '../components/SideMenu/SideMenu'
const STD = () => {
    return (
        <div className={css.App}>
            <SideMenu />
            <div className={css.rest}>
                <Top />
                <DashBoard />
            </div>
        </div>
    )
}

export default STD