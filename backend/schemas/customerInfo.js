const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerInfoSchema = new Schema({
    customer_id: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    profile_url: {
        type: String,
        require: false,
    },
    wishlist: [{
        wishlist_id: String,
        product_id: String,
        style_code: String
    }],
    cart: [{
        type: Object,
        require: false
    }],
    orders: [{
        type: String,
        require: false
    }],
    cancelled: [{
        type: String,
        require: false
    }],
    returns: [{
        type: String,
        require: false
    }],
    bought: [{
        type: String,
        require: false
    }],
    selected_address_id: {
        type: String,
        required: false,
    },
    addresses: [{
        address_id: { type: String, required: false },
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternate_phone_number: { type: String, required: false },
        address: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        pincode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false},
        country: {type: String, required: false, default: "India"}
    }],
});

module.exports = mongoose.model("Customer_Info", customerInfoSchema);