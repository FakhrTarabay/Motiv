import React from 'react'
import Style from './ChartBtns.module.scss'
const ChartBtns = ({ btns }) => {
    return (
        <span className={Style.chartBtnRow}>
            {btns.map(btn => {
                return <button className={Style.chartBtn}>{btn}</button>
            })}
        </span>
    )
}

export default ChartBtns