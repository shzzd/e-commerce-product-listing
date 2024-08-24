import React from 'react'
import classes from './ListView.module.css'
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate'

export default function ListView(props) {
    return (
        <div key={props.index} className={classes.productCard}>
            <div className={classes.image}>
                <img src={props.data.image} alt="" />
            </div>
            <div className={classes.details}>
                <h2>{props.data.title}</h2>
                <div className={classes.description}>{props.data.description}</div>
                <div className={classes.priceInner}>${props.data.price}</div>
                <div className={classes.category}>Category: {props.data.category}</div>
                <div className={classes.count}>In Stock: {props.data.rating.count} pcs</div>
                <div className={classes.rateInner}>{props.data.rating.rate}/5</div>
            </div>
            <div className={classes.addToCart}>
                <div className={classes.price}>${props.data.price}</div>
                <div className={classes.rate}>{props.data.rating.rate}/5</div>
                <ButtonTemplate name={'Add to Cart'} borderColor={'#000'} bgColor={'#000'} color={'#fff'} />
                <ButtonTemplate name={'Details'} borderColor={'#000'} bgColor={'#fff'} color={'#000'} />
            </div>
        </div>
    )
}
