const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerInfoSchema = new Schema({
    seller_id: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: false
    },
    user_name: {
        type: String,
        require: false,
        unique: true
    },
    display_name: {
        type: String,
        require: false
    },
    store_name: {
        type: String,
        require: false
    },
    store_url: {
        type: String,
        require: false,
    },
    profile_image: {
        type: String,
        require: false
    },
    cover_image: {
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
    wishlist: [{
        wishlist_id: String,
        listing_id: String,
        sku_id: String
    }],
    accounts: [Schema.Types.Mixed], //{ account_type: String, user_name: String, is_verified: Boolean}
    domains: [{
        type: String,
        require: false
    }],
    fav_categories: [{
        type: String,
        require: false
    }],
    gender: {
        type: String,
        require: false
    },
    followers: [{
        type: String,
        require: false
    }],
    following: [{
        type: String,
        require: false
    }],
    collections: [Schema.Types.Mixed] //[{collection_id: String, name: String, products: [Array of {product_id,style_code}]}]
});

module.exports = mongoose.model("Seller_Info", sellerInfoSchema);