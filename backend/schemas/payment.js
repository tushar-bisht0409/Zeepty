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
    payment_status: {
        type: String,
        default: 'Pending'
    },
    orders: [{
        sub_payment_id: String,
        order_id: String, 
        total_price: Number,    // Seller Price (S) + Delivery fee (D) + Tax Price (T)
        delivery_fee: Number,   // Delivery fee (D)
        tax_price: Number,  // Tax Price (T) If applicable
        seller_payout: Number,    // Seller Price (S) - Manufacturer Price (M) - Zeepty Commission (Z)  
        manufacturer_payout: Number,  // Manufacturer Price (M)
        zeepty_payout: Number,    // Zeepty Commission (Z) 
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