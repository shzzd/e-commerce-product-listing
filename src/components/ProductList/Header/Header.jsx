import React, { useState } from 'react'
import classes from './Header.module.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosList, IoMdArrowDropdown } from 'react-icons/io'
import { TbLayoutGridFilled } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'

export default function Header(props) {
    const [options] = useState([
        'Default',
        'Name: A to Z',
        'Name: Z to A',
        'Price: Low to High',
        'Price: High to Low',
        'Rating: Low to High',
        'Rating: High to Low',
    ])

    // Sort option template
    const sortOptionTemplate = (name) => {
        return (
            <>
                <span>{name}</span> <IoMdArrowDropdown className={classes.icon} />
            </>
        )
    }

    const optionsTemplate = (length) => {
        return [...Array(length)].map((_, index) => (
            <span onClick={() => props.setSortOption(`${index}`)}>
                {options[index]} {props.sortOption === `${index}` && <TiTick />}
            </span>
        ))
    }
    return (
        <div className={classes.wrapper}>
            <h1>
                Product List <span>({props.length})</span>
            </h1>
            <div className={classes.options}>
                {/* Search bar */}
                <div className={classes.searchBar}>
                    <CiSearch className={classes.iconSearch} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                    />
                </div>
                <div>
                    {/* Filter Pop Up for Mobile Screen */}
                    <div
                        onClick={() => (!props.close ? props.setClose(true) : props.setClose(false))}
                        className={classes.filter}>
                        <span>Filters</span> <IoMdArrowDropdown className={classes.icon} />
                    </div>
                    {/* Sort by */}
                    <div className={classes.sort}>
                        <div>Sort by</div>
                        <div className={classes.sortSelect}>
                            {props.sortOption === '1'
                                ? sortOptionTemplate('Name: A to Z')
                                : props.sortOption === '2'
                                ? sortOptionTemplate('Name: Z to A')
                                : props.sortOption === '3'
                                ? sortOptionTemplate('Price: Low to High')
                                : props.sortOption === '4'
                                ? sortOptionTemplate('Price: Low to High')
                                : props.sortOption === '5'
                                ? sortOptionTemplate('Rating: Low to High')
                                : props.sortOption === '6'
                                ? sortOptionTemplate('Rating: High to Low')
                                : sortOptionTemplate('')}
                            <span id={classes.cover}></span>
                            <div className={classes.sortOption}>{optionsTemplate(7)}</div>
                        </div>
                    </div>
                    {/* List or Grid View */}
                    <div className={classes.view}>
                        <div onClick={() => !props.view && props.setView(true)}>
                            <IoIosList />
                        </div>
                        <div onClick={() => props.view && props.setView(false)}>
                            <TbLayoutGridFilled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
