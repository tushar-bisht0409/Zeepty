const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    payment_id: {
        type: String,
        required: true
    },
    payment_type: {
        type: String,
        required: false
    },
    orders: [{
        order_id: String, 
        product_id: String,
        listing_id: String,
        seller_id: String,
        manufacturer_id: String,
        total_price: Number,
        delivery_fee: Number,
        tax_price: Number,
        seller_commission_price: Number,
        manufacturer_commission_price: Number,
        zeepty_commission_price: Number,
    }],
    customer_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payment_instrument: Schema.Types.Mixed
    // order_id: {
    //     type: String,
    //     required: true
    // },
    // product_id: {
    //     type: String,
    //     required: true
    // },
    // listing_id: {
    //     type: String,
    //     required: true
    // },
    
    // seller_id: {
    //     type: String,
    //     required: true
    // },
    // manufacturer_id: {
    //     type: String,
    //     required: true
    // },
    // payment_method: {
    //     type: String,
    //     required: true,
    // },
    // total_price: {
    //     type: Number,
    //     required: true
    // },
    // delivery_fee: {
    //     type: Number,
    //     required: true
    // },
    // tax_price: {
    //     type: Number,
    //     required: true
    // },
    // seller_commission_price: {
    //     type: Number,
    //     required: true
    // },
    // manufacturer_commission_price: {
    //     type: Number,
    //     required: true
    // },
    // zeepty_commission_price: {
    //     type: Number,
    //     required: true
    // },
},
{
    timestamps: true,
}
);


module.exports = mongoose.model("Payments", paymentSchema);