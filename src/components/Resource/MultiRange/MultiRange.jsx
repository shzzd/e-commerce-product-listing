import MultiRangeSlider from 'multi-range-slider-react'
import React from 'react'
import classes from './MultiRange.module.css'
import './MultiRangeSlider.css'

export default function MultiRange(props) {
    const { min, max, minValue, maxValue, handleInput } = props
    return (
        <div className={classes.rangeSlider}>
            <MultiRangeSlider
                min={min}
                max={max}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e)
                }}
                baseClassName="multi-range-slider"
                ruler={false}
                label={false}
                // labels={[labelA, labelB]}
                minCaption={`$${minValue}`}
                maxCaption={`$${maxValue}`}
                barInnerColor={'black'}
            />
        </div>
    )
}
