import React from 'react'
import Style from '../Pages/Pages.module.scss'
import Messages from '../Components/Messages/Messages'
import Top from '../Components/Top/Top'
import SideMenu from '../Components/SideMenu/SideMenu'
const MessagesP = () => {
    return (
        <div className={Style.App}>
            <SideMenu />
            <div className={Style.rest}>
                <Top />
                <Messages />
            </div>
        </div>
    )
}

export default MessagesP