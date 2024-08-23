import React from 'react'
import classes from './Header.module.css'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDown, IoIosList, IoMdArrowDropdown } from 'react-icons/io'
import { TbLayoutGridFilled } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'

export default function Header(props) {
    return (
        <div className={classes.wrapper}>
            <h1>
                Product List <span>({props.length})</span>
            </h1>
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
                <div>
                    <div
                        onClick={() => (!props.close ? props.setClose(true) : props.setClose(false))}
                        className={classes.filter}>
                        <span>Filters</span> <IoMdArrowDropdown className={classes.icon} />
                    </div>
                    <div className={classes.sort}>
                        <div>Sort by</div>
                        <div className={classes.sortSelect}>
                            {props.sortOption === '1' ? (
                                <>
                                    <span>Name: A to Z</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : props.sortOption === '2' ? (
                                <>
                                    <span>Name: Z to A</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : props.sortOption === '3' ? (
                                <>
                                    <span>Price: Low to High</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : props.sortOption === '4' ? (
                                <>
                                    <span>Price: High to Low</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : props.sortOption === '5' ? (
                                <>
                                    <span>Rating: Low to High</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : props.sortOption === '6' ? (
                                <>
                                    <span>Rating: High to Low</span> <IoMdArrowDropdown className={classes.icon} />
                                </>
                            ) : (
                                <>
                                    <IoMdArrowDropdown className={classes.icon} />
                                </>
                            )}
                            <span id={classes.cover}></span>
                            <div className={classes.sortOption}>
                                <span onClick={() => props.setSortOption('0')}>Default</span>
                                <span onClick={() => props.setSortOption('1')}>
                                    Name: A to Z {props.sortOption === '1' && <TiTick />}
                                </span>
                                <span onClick={() => props.setSortOption('2')}>
                                    Name: Z to A {props.sortOption === '2' && <TiTick />}
                                </span>
                                <span onClick={() => props.setSortOption('3')}>
                                    Price: Low to High {props.sortOption === '3' && <TiTick />}
                                </span>
                                <span onClick={() => props.setSortOption('4')}>
                                    Price: High to Low {props.sortOption === '4' && <TiTick />}
                                </span>
                                <span onClick={() => props.setSortOption('5')}>
                                    Rating: Low to High {props.sortOption === '5' && <TiTick />}
                                </span>
                                <span onClick={() => props.setSortOption('6')}>
                                    Rating: High to Low {props.sortOption === '6' && <TiTick />}
                                </span>
                            </div>
                        </div>
                    </div>
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
