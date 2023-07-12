const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
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
    blacklisted: {
        type: Boolean,
        default: false
    },
    blacklisted_for: {
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
        default: 0,
    },
    rating_total: {
        type: Number,
        default: 0,
    },
    sold_count: {
        type: Number,
        default: 0,
    },
    return_count: {
        type: Number,
        default: 0,
    },
    pickup_address: {
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternative_phone_number: { type: String, required: false },
        address: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        pincode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false}
    },
    return_address: {
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternative_phone_number: { type: String, required: false },
        address: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        pincode: { type: String, required: false },
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
},{timestamps: true, strict: false});

module.exports = mongoose.model("Listings", listingSchema);