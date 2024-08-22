import React, { useEffect, useState } from 'react'
import classes from './List.module.css'

export default function List(props) {
    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
        var date = new Date()
        let result = props.product

        // Search by title
        if (props.search) {
            result = result.filter((e) => e.title.toLowerCase().includes(props.search.toLowerCase()))
        }

        // Filter by multiple categories
        if (props.selectedCategories.length > 0) {
            result = result.filter((e) => props.selectedCategories.includes(e.category))
            console.log(result.map((e) => e.price))
            // props.setPriceDefault((prev) => {
            //     return {
            //         ...prev,
            //         min: Math.min(...result.map((e) => e.price)),
            //         max: Math.max(...result.map((e) => e.price)),
            //     }
            // })
        }
        // else {
        //     props.setPriceDefault((prev) => {
        //         return {
        //             ...prev,
        //             min: Math.min(...props.product.map((e) => e.price)),
        //             max: Math.max(...props.product.map((e) => e.price)),
        //         }
        //     })
        //     props.setPriceRange((prev) => {
        //         return {
        //             ...prev,
        //             min: Math.min(...props.product.map((e) => e.price)),
        //             max: Math.max(...props.product.map((e) => e.price)),
        //         }
        //     })
        // }

        // Filter by price range
        result = result.filter((e) => e.price >= props.priceRange.min && e.price <= props.priceRange.max)

        // Filter by availabily
        if (props.stockFilter === 'inStock') {
            result = result.filter((e) => e.rating.count > 0)
        } else if (props.stockFilter === 'outOfStock') {
            result = result.filter((e) => e.rating.count === 0)
        }

        // const result = props.product?.filter((data) => {
        //   const activeData = data.endtime > date.toISOString();
        //   const inactiveData = data.endtime < date.toISOString();
        //   const active = "Active";
        //   const inactive = "Inactive";
        // return (
        // data.name.toLowerCase().match(search.toLowerCase()) ||
        // data.email.toLowerCase().match(search.toLowerCase()) ||
        // data.company.toLowerCase().match(search.toLowerCase()) ||
        // data.designation.toLowerCase().match(search.toLowerCase()) ||
        // data.role.toLowerCase().match(search.toLowerCase()) ||
        // (active.toLowerCase().match(search.toLowerCase())
        //   ? activeData
        //   : inactive.toLowerCase().match(search.toLowerCase())
        //   ? inactiveData
        //   : null)
        // props.search !== '' && data.title.toLowerCase().match(props.search.toLowerCase())
        // (props.category.c1 !== '' && data.category.toLowerCase().match(props.category.c1.toLowerCase())) ||
        // (props.category.c2 !== '' && data.category.toLowerCase().match(props.category.c2.toLowerCase()))
        // )
        // })

        setfilteredData(result)
    }, [props.product, props.search, props.selectedCategories, props.priceRange, props.stockFilter])

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
