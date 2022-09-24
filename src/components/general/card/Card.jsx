import React from 'react'
import css from './Card.module.css'
const Card = ({children}) => {
  return (
    <div className={css.card2}>
        {children}
    </div>
  )
}

export default Card