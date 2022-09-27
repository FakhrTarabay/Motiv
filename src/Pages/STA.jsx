import React from 'react'
import css from '../Pages/Pages.module.scss'
import Assets from '../components/Assets/Assets'
import Top from '../components/Top/Top'
import SideMenu from '../components/SideMenu/SideMenu'
const STA = () => {
    return (
        <div className={css.App}>
            <SideMenu />
            <div className={css.rest}>
                <Top />
                <Assets />
            </div>
        </div>
    )
}

export default STA