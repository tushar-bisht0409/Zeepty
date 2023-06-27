const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productRequestSchema = new Schema({
    product_request_id: {
        type: String,
        require: false,
    },
    product_status: {
        type: String,           // Approved, Pending, Denied, Draft
        default: 'Draft'
    },
    request_type: {
        type: String,           //Edit, Create
    },
    product_id: {
        type: String,
        require: false
    },
    active: {
        type: Boolean,
        default: true
    },
    seller_id: {
        type: String,
        require: false
    },
    listing_id: {
        type: String,
        require: false
    },
    sku_id: {
        type: String,
        require: false
    },
    style_code: {
        type: String,
        require: false,
    },
    weight: {
        type: Number,
        require: false,
    },
    media_urls: [{
        type: String,
    }],
    brand: {
        type: String,
        require: false
    },
    product_name: {
        type: String,
        require: false
    },
    product_size: [Schema.Types.Mixed],
    vertical: {
        type: String,
        require: false,
    },
    category: {
        type: String,
        require: false
    },
    sub_category: {
        type: String,
        require: false
    },
    sub_category2: {
        type: String,
        require: false
    },
    price: {
        type: Number,
        require: false
    },
    mrp: {
        type: Number,
        require: false
    },
    hsn_code: {
        type: String,
        require: false
    },
    gst_percent: {
        type: String,
        require: false
    },
    product_details: [Schema.Types.Mixed],
    other_details: [Schema.Types.Mixed],
    pickup_address: {
        manufacturerID: { type: String, required: false },
        fullName: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        alternativePhoneNumber: { type: String, required: false },
        addressLine: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        postalcode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false}
    },
    error_array: [Schema.Types.Mixed]
},{timestamps: true,strict: false});

module.exports = mongoose.model("Product_Requests", productRequestSchema);