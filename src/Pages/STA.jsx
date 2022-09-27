import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Assets from '../components/Assets/Assets'
import Top from '../components/Top/Top'
import SideMenu from '../components/SideMenu/SideMenu'
const STA = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <Assets />
            </div>
        </div>
    )
}

export default STA