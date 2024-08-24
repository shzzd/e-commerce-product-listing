import React from 'react'
import classes from './GridView.module.css'
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate'

export default function GridView(props) {
    return (
        <div key={props.index} className={classes.productCard}>
            <div className={classes.image}>
                <img src={props.data.image} alt="" />
            </div>
            <h2>{props.data.title}</h2>
            <div className={classes.description}>{props.data.description}</div>
            <div className={classes.price}>${props.data.price}</div>
            <ButtonTemplate name={'Add to Cart'} borderColor={'#000'} bgColor={'#000'} color={'#fff'} />
        </div>
    )
}
