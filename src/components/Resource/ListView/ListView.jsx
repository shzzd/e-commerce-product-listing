import React from 'react'
import classes from './ListView.module.css'

export default function ListView(props) {
    return (
        <div key={props.index} className={classes.productCard}>
            <div className={classes.image}>
                <img src={props.data.image} alt="" />
            </div>
            <div className={classes.details}>
                <h2>{props.data.title}</h2>
                <div className={classes.description}>{props.data.description}</div>
                <div className={classes.price}>${props.data.price}</div>
                <div className={classes.category}>Category: {props.data.category}</div>
                <div className={classes.category}>Rating: {props.data.rating.rate}/5</div>
                <div className={classes.category}>In Stock: {props.data.rating.count}</div>
            </div>
        </div>
    )
}
