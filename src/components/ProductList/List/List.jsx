import React, { useEffect, useState } from 'react'
import classes from './List.module.css'

export default function List(props) {
    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
        var date = new Date()

        const result = props.product?.filter((data) => {
            return (
                props.search !== '' && data.title.toLowerCase().match(props.search.toLowerCase())
                // (props.category.c1 !== '' && data.category.toLowerCase().match(props.category.c1.toLowerCase())) ||
                // (props.category.c2 !== '' && data.category.toLowerCase().match(props.category.c2.toLowerCase()))
            )
        })

        setfilteredData(result)
    }, [props.product, props.search, props.category])

    return (
        <div className={classes.wrapper}>
            {filteredData.map((data, index) => (
                <div key={index} className={classes.productCard}>
                    <div className={classes.image}>
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    {/* <div className={classes.description}>{data.description}</div> */}
                    <div className={classes.price}>${data.price}</div>
                </div>
            ))}
        </div>
    )
}
