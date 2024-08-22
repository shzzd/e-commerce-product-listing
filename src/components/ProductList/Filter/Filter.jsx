import React, { useState } from 'react'
import classes from './Filter.module.css'
import { AiFillFilter } from 'react-icons/ai'
import { SelectField } from '../../Resource'

export default function Filter(props) {
    const [c1, setC1] = useState(false)
    const [c2, setC2] = useState(false)
    const [c3, setC3] = useState(false)
    const [c4, setC4] = useState(false)
    const checkList = (index, checked, setChecked, categoryValue) => {
        return (
            <div>
                <input
                    type="checkbox"
                    value={checked}
                    onChange={(e) => {
                        if (e && !checked) {
                            setChecked(true)
                            if (index === 0) {
                                props.setCategory((prev) => {
                                    return { ...prev, c1: categoryValue }
                                })
                            } else if (index === 1) {
                                props.setCategory((prev) => {
                                    return { ...prev, c2: categoryValue }
                                })
                            } else if (index === 2) {
                                props.setCategory((prev) => {
                                    return { ...prev, c3: categoryValue }
                                })
                            } else if (index === 3) {
                                props.setCategory((prev) => {
                                    return { ...prev, c4: categoryValue }
                                })
                            }
                        } else {
                            setChecked(false)
                            if (index === 0) {
                                props.setCategory((prev) => {
                                    return { ...prev, c1: '' }
                                })
                            } else if (index === 1) {
                                props.setCategory((prev) => {
                                    return { ...prev, c2: '' }
                                })
                            } else if (index === 2) {
                                props.setCategory((prev) => {
                                    return { ...prev, c3: '' }
                                })
                            } else if (index === 3) {
                                props.setCategory((prev) => {
                                    return { ...prev, c4: '' }
                                })
                            }
                        }
                    }}
                />
                {categoryValue}
            </div>
        )
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <div className={classes.iconFilter}>
                    <AiFillFilter />
                </div>
                <div>Filter</div>
            </div>
            <div className={classes.category}>
                <div>Category</div>
                {checkList(0, c1, setC1, props.categories[0])}
                {checkList(1, c2, setC2, props.categories[1])}
                {checkList(2, c3, setC3, props.categories[2])}
                {checkList(3, c4, setC4, props.categories[3])}
                {/* <input
                    type="checkbox"
                    name="category1"
                    value={c1}
                    onChange={(e) => {
                        if (e && !c1) {
                            setC1(true)
                            props.setCategory((prev) => {
                                return { ...prev, c1: 'electronics' }
                            })
                        } else {
                            setC1(false)
                            props.setCategory((prev) => {
                                return { ...prev, c1: '' }
                            })
                        }
                    }}
                /> */}
            </div>
        </div>
    )
}
