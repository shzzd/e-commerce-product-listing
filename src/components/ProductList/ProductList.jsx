import React from 'react'
import classes from './ProductList.module.css'

export default function ProductList(props) {
    console.log(props.product)
    return (
        <div className={classes.wrapper}>
            <div>filter</div>
            <div>
                <div className={classes.options}>
                    <h1>Product List ({props.length})</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Search products..."
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div>
                        Sort by <div></div>
                    </div>
                    <div>list view</div>
                </div>
                <div className={classes.list}>
                    {props.product.map((data, index) => (
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
            </div>
        </div>
    )
}
