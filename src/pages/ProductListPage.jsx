import React, { useEffect, useState } from 'react'
import { ProductList } from '../components'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'

export default function ProductListPage() {
    // const fetchAPI = async () => {
    //     // try {
    //     const response = await axios.get(`https://fakestoreapi.com/products`)
    //     const productList = await response.data
    //     console.log(productList)
    //     // return response.data
    //     // } catch (error) {
    //     //     console.error('Error fetching products:', error)
    //     //     return []
    //     // }
    // }
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState([])
    const [length, setLength] = useState('')
    const [sortOption, setSortOption] = useState('asc')
    const [limit, setLimit] = useState('100')
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products?sort=${sortOption}&limit=${limit}`)
                const productList = await response.data
                setProduct(productList)
                setLength(productList.length)
                return response.data
            } catch (error) {
                console.error('Error fetching products:', error)
                return []
            }
        }
        fetchAPI()
    }, [sortOption, limit])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/categories`)
                const categoryAll = await response.data
                setCategories(categoryAll)
                return response.data
            } catch (error) {
                console.error('Error fetching category:', error)
                return []
            }
        }
        fetchCategories()
    }, [categories])

    return (
        <ProductList
            product={product}
            length={length}
            sortOption={sortOption}
            setSortOption={setSortOption}
            categories={categories}
            setLimit={setLimit}
        />
    )
}
