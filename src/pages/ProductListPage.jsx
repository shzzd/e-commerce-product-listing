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
    const [product, setProduct] = useState([])
    const [length, setLength] = useState('')
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
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

    return <ProductList product={product} length={length} />
}
