import React from 'react'
import classes from './Header.module.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDown, IoIosList } from 'react-icons/io'
import { TbLayoutGridFilled } from 'react-icons/tb'

export default function Header(props) {
    return (
        <div className={classes.wrapper}>
            <h1>Product List ({props.length})</h1>
            <div className={classes.options}>
                <div className={classes.searchBar}>
                    <CiSearch className={classes.iconSearch} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                    />
                </div>
                <div className={classes.sort}>
                    <div>Sort By:</div>
                    <div className={classes.sortSelect}>
                        {props.sortOption === 'asc' ? (
                            <>
                                Ascending <IoIosArrowDown className={classes.icon} />
                            </>
                        ) : (
                            <>
                                Descending <IoIosArrowDown className={classes.icon} />
                            </>
                        )}{' '}
                        <div className={classes.sortOption}>
                            <span onClick={() => props.setSortOption('asc')}>Ascending</span>
                            <span onClick={() => props.setSortOption('desc')}>Descending</span>
                        </div>
                    </div>
                </div>
                <div className={classes.view}>
                    <div>
                        <IoIosList />
                    </div>
                    <div>
                        <TbLayoutGridFilled />
                    </div>
                </div>
            </div>
        </div>
    )
}
