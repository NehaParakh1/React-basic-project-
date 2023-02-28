import React from 'react'

import classses from './Button.module.css'

const Button =props =>{
    return (
        <button className={classses.button} type={props.type || 'button'} onClick={props.onClick}> {props.children}</button>  )
}

export default Button