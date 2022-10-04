import React from 'react'
import Style from '../Pages/Pages.module.scss'
import SellCars from '../Components/SellCars/SellCars'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const SellingP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <SellCars />
            </div>
        </div>
    )
}

export default SellingP