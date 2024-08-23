import React from 'react'
import classes from './GridView.module.css'

export default function GridView(props) {
    return (
        <div key={props.index} className={classes.productCard}>
            <div className={classes.image}>
                <img src={props.data.image} alt="" />
            </div>
            <h2>{props.data.title}</h2>
            <div className={classes.description}>{props.data.description}</div>
            <div className={classes.price}>${props.data.price}</div>
        </div>
    )
}
