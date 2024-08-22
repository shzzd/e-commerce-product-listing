// import { IoIosArrowDown } from 'react-icons/io'
import Select from 'react-select'

export default function SelectField({
    value,
    options,
    selectOnChange,
    search_by,
    selectInputRef,
    searchable,
    clearable,
    borderColor,
    borderHover,
}) {
    const style = {
        // option: (provided, state) => ({
        //     ...provided,
        //     color: state.isSelected ? 'blue' : 'blue',
        //     backgroundColor: state.isSelected ? 'skyblue' : 'white',
        // }),
        control: (base) => ({
            ...base,
            border: `1px ${borderColor} solid`,
            // This line disable the blue border
            boxShadow: 'none',
            '&:hover': {
                border: `1px ${borderHover} solid`,
            },
        }),
    }

    return (
        <>
            <Select
                ref={selectInputRef}
                options={options}
                value={value}
                onChange={selectOnChange}
                isClearable={clearable ? true : false}
                isSearchable={searchable ? true : false}
                placeholder={search_by}
                maxMenuHeight={'10rem'}
                styles={style}
            />
            <br></br>
        </>
    )
}
