const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: {
        type: String,
        require: false
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
        require: false,
    },
    style_code: {
        type: String,
        require: false,
    },
    manufacturer_id: {
        type: String,
        require: false
    },
    active: {
        type: Boolean,
        default: false
    },
    new_title: {
        type: String,
        default: false
    },
    new_description: {
        type: String,
        default: false
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
    upper_price: {
        type: Number,
        require: false
    },
    mrp: {
        type: Number,
        require: false
    },
    product_size: Schema.Types.Mixed,
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
    rating_count: {
        type: Number,
        require: false,
        default: 0,
    },
    rating_total: {
        type: Number,
        require: false,
        default: 0,
    },
    sold_count: {
        type: Number,
        require: false,
        default: 0,
    },
    return_count: {
        type: Number,
        require: false,
        default: 0,
    },
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
    rating_score: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    rating_score_at: {
        type: Date,
        default: Date.now()
    }
},{timestamps: true,strict: false});

module.exports = mongoose.model("Products", productSchema);