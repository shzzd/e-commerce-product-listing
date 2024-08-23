import React, { useEffect, useState } from 'react'
import classes from './ProductList.module.css'
import Filter from './Filter/Filter'
import Header from './Header/Header'
import List from './List/List'

export default function ProductList(props) {
    const [close, setClose] = useState(false) // close state for filter on mobile
    const [view, setView] = useState(false) // grid/list view
    const [search, setSearch] = useState('') // search input
    const [sortOption, setSortOption] = useState('0') // 'select', 'Name: A to Z' ...
    const [selectedCategories, setSelectedCategories] = useState([])
    const [min, setMin] = useState(0) // price max range
    const [max, setMax] = useState(100) // price max range
    const [stockFilter, setStockFilter] = useState('all') // 'all', 'inStock', 'outOfStock'

    // Count the number of in-stock and out-of-stock products
    const inStockCount = props.product.filter((e) => e.rating.count > 0).length
    const outOfStockCount = props.product.filter((e) => e.rating.count === 0).length

    // set max range price once the data get fetch
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
                close={close}
                setClose={setClose}
            />
            <div>
                <Header
                    search={search}
                    setSearch={setSearch}
                    length={props.length}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    close={close}
                    setClose={setClose}
                    view={view}
                    setView={setView}
                />
                <List
                    search={search}
                    product={props.product}
                    selectedCategories={selectedCategories}
                    min={min}
                    max={max}
                    setMin={setMin}
                    setMax={setMax}
                    stockFilter={stockFilter}
                    setStockFilter={setStockFilter}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    view={view}
                    setView={setView}
                />
            </div>
            {!close && <div className={classes.cover}></div>}
        </div>
    )
}
