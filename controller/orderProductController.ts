import { Application, Request, Response } from "express"
import { OrderProductResponse } from "../model/orderProduct"
const orderProductService = require('../service/orderProductService')

module.exports = function(app: Application) {
    app.get('/order-product/:id', async (req: Request, res: Response) => {
        let data: OrderProductResponse[];

        try {
            data = await orderProductService.getOrderById(req.params.id)
        } catch (e) {
            console.error(e);
        }

        res.render('view-order-product', { order: data})
    })

    app.get('/order-product', async (req: Request, res: Response) => {
        let data = [];

        try {
            data = await orderProductService.getProducts()
        } catch (e) {
            console.error(e);
        }

        res.render('view-order-product', { products: data})
    })
}