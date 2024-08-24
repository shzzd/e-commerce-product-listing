import React, { useEffect, useState } from 'react'
import classes from './Filter.module.css'
import { AiFillFilter } from 'react-icons/ai'
import { MultiRange, SelectField } from '../../Resource'

export default function Filter(props) {
    // Check if the category is included or not in selected categories to set
    const handleCategoryChange = (category) => {
        props.setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((e) => e !== category) : [...prev, category]
        )
    }

    // Checkbox template for category filter
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

    // Set the price tansition to min and max in every change
    const handlePriceChange = (e) => {
        props.setMin(e.minValue)
        props.setMax(e.maxValue)
    }

    // Set stock state for filter
    const handleStockFilterChange = (e) => {
        props.setStockFilter(e.target.value)
    }

    // Radiobox template for product availability filter
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
            {/* Filter by Category */}
            <div className={classes.category}>
                <h3>Category</h3>
                <div className={classes.box}>
                    {categoryCheckbox(props.categories[0])}
                    {categoryCheckbox(props.categories[1])}
                    {categoryCheckbox(props.categories[2])}
                    {categoryCheckbox(props.categories[3])}
                </div>
            </div>
            {/* Filter by Price Range */}
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
            {/* Filter by Availability */}
            <div className={classes.category}>
                <h3>Availablity</h3>
                <div className={classes.box}>
                    {stockFilterRadiobox('all', 'All Products', props.product.length)}
                    {stockFilterRadiobox('inStock', 'In Stock', props.inStockCount)}
                    {stockFilterRadiobox('outOfStock', 'Out of Stock', props.outOfStockCount)}
                </div>
            </div>
            {/* Close button using only for mobile screen */}
            <div
                onClick={() => (!props.close ? props.setClose(true) : props.setClose(false))}
                className={classes.close}>
                Close
            </div>
        </div>
    )
}
