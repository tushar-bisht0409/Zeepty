const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verticalSchema = new Schema({
    vertical_id: {
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
    all_options: [Schema.Types.Mixed],
    hsn_code: [Schema.Types.Mixed],
    gst_percent: [Schema.Types.Mixed],
    size: [Schema.Types.Mixed],
    size_fields: [Schema.Types.Mixed],
}
);

module.exports = mongoose.model("Verticals", verticalSchema);