import Order from "../models/orderModel.js";

export const createOrder = (req, res) => {
    const orderData = req.body;
    const {orderItems, shippingAddress, paymentMethod, shippingPrice, totalPrice, } = orderData;

    if(orderItems && orderItems.length === 0){
        throw new Error("bad request");
    }
    else {
        const order  = new Order({
            orderItems, 
            user : req.id,
            shippingAddress,
            paymentMethod,
            shippingPrice,
            totalPrice
        })

        order.save();

        res.status(201).send(order)
    }

}

export const getOrderById = (req, res) => {
    const orderId = req.params.orderId;
    Order.findById({_id : orderId}, (err, order) => {
        if(err){
            res.status(404)
            throw new Error("Order not found")
        }
        else {
            res.send(order)
        }
    })
}