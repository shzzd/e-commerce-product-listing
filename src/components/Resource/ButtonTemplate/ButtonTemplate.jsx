import React from 'react'
import classes from './ButtonTemplate.module.css'

export default function ButtonTemplate(props) {
    return (
        <div
            className={classes.addToCart}
            style={{
                borderColor: `${props.borderColor}`,
                backgroundColor: `${props.bgColor}`,
                color: `${props.color}`,
            }}>
            {props.name}
        </div>
    )
}
