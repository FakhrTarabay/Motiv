import React from 'react'
import Style from './SideMenuBtn.module.scss'

const SideMenuBtn = ({imgSrc,text}) => {
    return (
        <div className={Style.menuItem}>
            <img alt="ico" src={imgSrc} />
            <button className={Style.btn}>{text}</button>
        </div>
    )
}

export default SideMenuBtn