const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturerInfoSchema = new Schema({
    manufacturer_id: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    signature_url: {
        type: String,
        required: false
    },
    store_name: {
        type: String,
        require: false,
        // unique: true
    },
    gst_details: {
        gstin: String,
        bussiness_name: String,
        pan_number: String,
        registered_bussiness_address: String,
        registered_mobile_number: String,
        registered_email_address: String
    },
    pickup_address: {
        address: { type: String, required: false },
        landmark: { type: String, required: false },
        pincode: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        country: {type: String, required: false, default: "India"}
    },
    return_address: {
        address: { type: String, required: false },
        landmark: { type: String, required: false },
        pincode: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        country: {type: String, required: false, default: "India"}
    },
    bank_details: {
        beneficiary_name: { type: String, required: false },
        account_number: { type: String, required: false },
        bank_name: { type: String, required: false },
        ifsc_code: { type: String, required: false },
    },
    gst_api_data: Schema.Types.Mixed
});

module.exports = mongoose.model("Manufacturer_Info", manufacturerInfoSchema);