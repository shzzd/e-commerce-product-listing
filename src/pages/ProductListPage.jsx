import React, { useEffect, useState } from 'react'
import { ProductList } from '../components'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'

export default function ProductListPage() {
    const [categories, setCategories] = useState([]) // State for category data
    const [product, setProduct] = useState([]) // State for product data
    const [length, setLength] = useState('') // State for product length

    // Fetch all product
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/`)
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
    }, [])

    // Fetch all category
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
    }, [])

    return <ProductList product={product} length={length} categories={categories} />
}
