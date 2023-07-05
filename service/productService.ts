import { Product } from "../model/product"
import { validateProduct } from "../validator/productValidator";

const axios = require('axios');

module.exports.getProducts = async function (): Promise<Product[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/products')

        return response.data
    } catch (e) {
        throw new Error('Could not get products')
    }
}

module.exports.getProductById = async function (id: number): Promise<Product> {
    try {
        const response = await axios.get('http://localhost:8080/api/products/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get product')
    }
}

module.exports.createProduct = async function (product: Product): Promise<number> {
    const error: string = validateProduct(product)

    if (error) {
        throw new Error(error)
    }

    try {
        const response = await axios.post('http://localhost:8080/api/products/', product)

        return response.data
    } catch (e) {
        throw new Error('Could not create product')
    }
}