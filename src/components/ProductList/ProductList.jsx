import React, { useState } from 'react'
import { IoIosArrowDown, IoIosList } from 'react-icons/io'
import classes from './ProductList.module.css'
import { CiSearch } from 'react-icons/ci'
import { TbLayoutGridFilled } from 'react-icons/tb'
import { AiFillFilter } from 'react-icons/ai'
import Filter from './Filter/Filter'
import Header from './Header/Header'
import List from './List/List'

export default function ProductList(props) {
    console.log(props.product)
    console.log(props.categories)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState({
        c1: '',
        c2: '',
        c3: '',
        c4: '',
    })

    console.log(category)
    return (
        <div className={classes.wrapper}>
            <Filter categories={props.categories} setCategory={setCategory} />
            <div>
                <Header search={search} setSearch={setSearch} length={props.length} />
                <List search={search} product={props.product} category={category} />
            </div>
        </div>
    )
}
