import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Assets from '../Components/Assets/Assets'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
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