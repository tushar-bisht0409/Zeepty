const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const looksSchema = new Schema({
    looks_id: {
        type: String,
        require: false
    },
    seller_id: { 
        type: String,
        require: false
    },
    media_url: {
        type: String,
        require: false
    },
    caption: {
        type: String,
        require: false
    },
    products: [{
        product_id: String,
        style_code: String
    }],
},{
    timestamps: true,
});

module.exports = mongoose.model("Looks", looksSchema);