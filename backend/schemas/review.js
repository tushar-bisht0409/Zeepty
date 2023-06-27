const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review_id: {
        type: String,
        require: false
    },
    product_id: {
        type: String,
        require: false
    },
    listing_id: {
        type: String,
        require: false
    },
    order_id: {
        type: String,
        require: false
    },
    customer_id: {
        type: String,
        require: false
    },
    rating: {
        type: Number,
        require: false
    },
    text: {
        type: String,
        require: false
    },
    media_urls: [{
        type: String,
        require: false
    }],
},{
    timestamps: true,
});

module.exports = mongoose.model("Reviews", reviewSchema);