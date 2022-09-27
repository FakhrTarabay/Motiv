import React from 'react'
import Style from './Logo.module.scss'
import motiv from "../svg/motiv.svg";

const Logo = () => {
    return (
        <div className={Style.logo}>
            <img alt="ico" src={motiv} />
            <span className={Style.title}>Motiv.</span>
        </div>
    )
}

export default Logo