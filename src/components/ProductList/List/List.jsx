import React, { useEffect, useState } from 'react'
import classes from './List.module.css'
import { GridView, ListView } from '../../Resource'

export default function List(props) {
    const [currentPage, setCurrentPage] = useState(1) // Pagination
    const [productsPerPage] = useState(8) // Number of products per page (adjustable)
    const [filteredData, setfilteredData] = useState([]) // filtered data

    useEffect(() => {
        let result = props.product

        // Search by title
        if (props.search) {
            result = result.filter((e) => e.title.toLowerCase().includes(props.search.toLowerCase()))
        }

        // Filter by multiple categories
        if (props.selectedCategories.length > 0) {
            result = result.filter((e) => props.selectedCategories.includes(e.category))
        }

        // Filter by price range
        result = result.filter((e) => e.price >= props.min && e.price <= props.max)

        // Filter by availabily
        if (props.stockFilter === 'inStock') {
            result = result.filter((e) => e.rating.count > 0)
        } else if (props.stockFilter === 'outOfStock') {
            result = result.filter((e) => e.rating.count === 0)
        }

        // Sort by selected option
        if (props.sortOption === '1') {
            result = result.sort((x, y) => x.title.localeCompare(y.title))
        } else if (props.sortOption === '2') {
            result = result.sort((x, y) => -1 * x.title.localeCompare(y.title))
        } else if (props.sortOption === '3') {
            result = result.sort((x, y) => x.price - y.price)
        } else if (props.sortOption === '4') {
            result = result.sort((x, y) => y.price - x.price)
        } else if (props.sortOption === '5') {
            result = result.sort((x, y) => x.rating.rate - y.rating.rate)
        } else if (props.sortOption === '6') {
            result = result.sort((x, y) => y.rating.rate - x.rating.rate)
        }

        setfilteredData(result)
    }, [
        props.product,
        props.search,
        props.selectedCategories,
        props.stockFilter,
        props.sortOption,
        props.min,
        props.max,
    ])

    // Calculate pagination details
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredData.length / productsPerPage)

    return (
        <>
            {/* Grid and List product view */}
            <div className={!props.view ? classes.wrapper : classes.wrapperList}>
                {currentProducts.map((data, index) => (
                    <>{!props.view ? <GridView index={index} data={data} /> : <ListView index={index} data={data} />}</>
                ))}
            </div>
            {/* Pagination */}
            <div className={classes.pagination}>
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                            window.scrollTo(0, 0)
                        }
                    }}
                    disabled={currentPage > 1 ? false : true}
                    className={currentPage === currentPage ? 'active' : ''}>
                    « Previouse
                </button>
                <div>{currentPage}</div>
                <button
                    onClick={() => {
                        if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1)
                            window.scrollTo(0, 0)
                        }
                    }}
                    disabled={currentPage < totalPages ? false : true}
                    className={currentPage === currentPage ? 'active' : ''}>
                    Next »
                </button>
            </div>
        </>
    )
}
