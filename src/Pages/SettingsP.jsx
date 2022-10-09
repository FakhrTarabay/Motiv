import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Settings from '../Components/Settings/Settings'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const SettingsP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <Settings />
            </div>
        </div>
    )
}

export default SettingsP