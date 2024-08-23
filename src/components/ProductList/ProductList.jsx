import React, { useEffect, useState } from 'react'
import classes from './ProductList.module.css'
import Filter from './Filter/Filter'
import Header from './Header/Header'
import List from './List/List'

export default function ProductList(props) {
    const [search, setSearch] = useState('')
    const [sortOption, setSortOption] = useState('0') // 'select', 'Name: A to Z' ...
    const [selectedCategories, setSelectedCategories] = useState([])
    // const [priceDefault, setPriceDefault] = useState({ min: 0, max: 1000 })
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)
    const [stockFilter, setStockFilter] = useState('all') // 'all', 'inStock', 'outOfStock'
    // console.log(max)

    // Count the number of in-stock and out-of-stock products
    const inStockCount = props.product.filter((e) => e.rating.count > 0).length
    const outOfStockCount = props.product.filter((e) => e.rating.count === 0).length

    // useEffect(() => {
    //     console.log('useEffect triggered111111111111')
    //     const getRange = () => {
    //         setPriceDefault((prev) => {
    //             return {
    //                 ...prev,
    //                 min: Math.min(...props.product.map((e) => e.price)),
    //                 max: Math.max(...props.product.map((e) => e.price)),
    //             }
    //         })
    //     }
    //     getRange()
    // }, [props.product])

    // useEffect(() => {
    //     console.log('useEffect triggered2222222222')
    //     const getRange = () => {
    //         setPriceRange((prev) => {
    //             return {
    //                 ...prev,
    //                 max: Math.max(...props.product.map((e) => e.price)),
    //             }
    //         })
    //     }
    //     getRange()
    // }, [props.product])

    useEffect(() => {
        setMax(
            Math.max(...props.product.map((e) => e.price)) > 0 ? Math.max(...props.product.map((e) => e.price)) : 100
        )
    }, [props.product])

    return (
        <div className={classes.wrapper}>
            <Filter
                product={props.product}
                categories={props.categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                // priceDefault={priceDefault}
                min={min}
                max={max}
                setMin={setMin}
                setMax={setMax}
                stockFilter={stockFilter}
                setStockFilter={setStockFilter}
                inStockCount={inStockCount}
                outOfStockCount={outOfStockCount}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <div>
                <Header
                    search={search}
                    setSearch={setSearch}
                    length={props.length}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
                <List
                    search={search}
                    product={props.product}
                    selectedCategories={selectedCategories}
                    priceRange={priceRange}
                    // setPriceRange={setPriceRange}
                    // priceDefault={priceDefault}
                    // setPriceDefault={setPriceDefault}
                    min={min}
                    max={max}
                    setMin={setMin}
                    setMax={setMax}
                    stockFilter={stockFilter}
                    setStockFilter={setStockFilter}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
            </div>
        </div>
    )
}
