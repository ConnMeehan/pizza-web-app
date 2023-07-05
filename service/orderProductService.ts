import { OrderProductResponse } from "../model/orderProduct"

const axios = require('axios');

module.exports.getOrderById = async function (id: number): Promise<OrderProductResponse[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/order-product/' + id)

        return response.data
    } catch (e) {
        throw new Error('Could not get order')
    }
}

module.exports.getProducts = async function (): Promise<OrderProductResponse[]> {
    try {
        const response = await axios.get('http://localhost:8080/api/order-product')

        return response.data
    } catch (e) {
        throw new Error('Could not get products')
    }
}