import React, { useEffect, useState } from 'react'
import classes from './ProductList.module.css'
import Filter from './Filter/Filter'
import Header from './Header/Header'
import List from './List/List'

export default function ProductList(props) {
    const [search, setSearch] = useState('')
    const [selectedCategories, setSelectedCategories] = useState([])
    const [priceDefault, setPriceDefault] = useState({ min: 0, max: 1000 })
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
    const [stockFilter, setStockFilter] = useState('all') // 'all', 'inStock', 'outOfStock'

    // Count the number of in-stock and out-of-stock products
    const inStockCount = props.product.filter((e) => e.rating.count > 0).length
    const outOfStockCount = props.product.filter((e) => e.rating.count === 0).length

    useEffect(() => {
        const getRange = () => {
            setPriceDefault((prev) => {
                return {
                    ...prev,
                    min: Math.min(...props.product.map((e) => e.price)),
                    max: Math.max(...props.product.map((e) => e.price)),
                }
            })
        }
        getRange()
    }, [props.product])

    useEffect(() => {
        const getRange = () => {
            setPriceRange((prev) => {
                return {
                    ...prev,
                    max: Math.max(...props.product.map((e) => e.price)),
                }
            })
        }
        getRange()
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
                priceDefault={priceDefault}
                stockFilter={stockFilter}
                setStockFilter={setStockFilter}
                inStockCount={inStockCount}
                outOfStockCount={outOfStockCount}
            />
            <div>
                <Header search={search} setSearch={setSearch} length={props.length} />
                <List
                    search={search}
                    product={props.product}
                    selectedCategories={selectedCategories}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    priceDefault={priceDefault}
                    setPriceDefault={setPriceDefault}
                    stockFilter={stockFilter}
                    setStockFilter={setStockFilter}
                />
            </div>
        </div>
    )
}
