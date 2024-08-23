import React, { useEffect, useState } from 'react'
import classes from './Filter.module.css'
import { AiFillFilter } from 'react-icons/ai'
import { MultiRange, SelectField } from '../../Resource'

export default function Filter(props) {
    const handleCategoryChange = (category) => {
        props.setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((e) => e !== category) : [...prev, category]
        )
    }

    const categoryCheckbox = (category) => {
        return (
            <label className={classes.checkBox}>
                <input
                    type="checkbox"
                    onChange={() => handleCategoryChange(category)}
                    checked={props.selectedCategories.includes(category)}
                />
                <span>{category}</span>
            </label>
        )
    }

    const handlePriceChange = (e) => {
        props.setMin(e.minValue)
        props.setMax(e.maxValue)
    }

    const handleStockFilterChange = (e) => {
        props.setStockFilter(e.target.value)
    }

    const stockFilterRadiobox = (value, label, productLength) => {
        return (
            <label className={classes.radioBox}>
                <input
                    type="radio"
                    value={value}
                    checked={props.stockFilter === value}
                    onChange={handleStockFilterChange}
                />
                <span>
                    {label} <span className={classes.lengthValue}>({productLength})</span>
                </span>
            </label>
        )
    }

    return (
        <div className={!props.close ? classes.wrapper : classes.wrapperClose}>
            <div className={classes.filter}>
                <div className={classes.iconFilter}>
                    <AiFillFilter />
                </div>
                <div>Filter</div>
            </div>
            <div className={classes.category}>
                <h3>Category</h3>
                <div className={classes.box}>
                    {categoryCheckbox(props.categories[0])}
                    {categoryCheckbox(props.categories[1])}
                    {categoryCheckbox(props.categories[2])}
                    {categoryCheckbox(props.categories[3])}
                </div>
            </div>
            <div className={classes.category}>
                <h3>Price</h3>
                <div className={classes.priceRange}>
                    <div>
                        ${props.min} - ${props.max}
                    </div>
                    {props.product.length !== 0 && (
                        <MultiRange
                            min={Math.min(...props.product.map((e) => e.price))}
                            max={Math.max(...props.product.map((e) => e.price))}
                            minValue={props.min}
                            maxValue={props.max}
                            handleInput={handlePriceChange}
                        />
                    )}
                </div>
            </div>

            <div className={classes.category}>
                <h3>Availablity</h3>
                <div className={classes.box}>
                    {stockFilterRadiobox('all', 'All Products', props.product.length)}
                    {stockFilterRadiobox('inStock', 'In Stock', props.inStockCount)}
                    {stockFilterRadiobox('outOfStock', 'Out of Stock', props.outOfStockCount)}
                </div>
            </div>
            <div
                onClick={() => (!props.close ? props.setClose(true) : props.setClose(false))}
                className={classes.close}>
                Close
            </div>
        </div>
    )
}
