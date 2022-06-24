import Order from "../models/orderModel.js";

export const createOrder = (req, res) => {
    console.log("in the create order conteoller")
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