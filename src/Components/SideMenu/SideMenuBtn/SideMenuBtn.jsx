import React from 'react'
import Style from './SideMenuBtn.module.scss'
import { Link } from "react-router-dom";

const SideMenuBtn = ({ imgSrc, text, link }) => {
    return (
        <Link className={Style.btn} to={link}>
            <img alt="ico" src={imgSrc} />
            {text}
        </Link>
    )
}

export default SideMenuBtn