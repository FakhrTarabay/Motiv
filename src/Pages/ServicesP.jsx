import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Services from '../Components/Services/Services'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const ServicesP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <Services />
            </div>
        </div>
    )
}

export default ServicesP