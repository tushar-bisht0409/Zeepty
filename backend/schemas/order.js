const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_id: {
        type: String,
        required: true
    },
    waybill: {
        type: String,
        required: true
    },
    upload_wbn: {
        type: String,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    manufacturer_id: {
        type: String,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    },
    product: {
        product_id: String,
        listing_id: String,
        sku_id: String,
        style_code: String,
        price: Number,
        quantity: Number,
    },
    payout: Schema.Types.Mixed,
    pickup_address: {
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternative_phone_number: { type: String, required: false },
        address_line: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        postalcode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false}
    },
    shipping_address: {
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternative_phone_number: { type: String, required: false },
        address_line: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        postalcode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false}
    },
    return_address: {
        full_name: { type: String, required: false },
        phone_number: { type: String, required: false },
        alternative_phone_number: { type: String, required: false },
        address_line: { type: String, required: false },
        landmark: { type: String, required: false },
        city: { type: String, required: false },
        postalcode: { type: String, required: false },
        country: { type: String, required: false },
        mode: {type: String, required: false}
    },
    payment_method: {
        type: String,
        required: true,
    },
    shipping_amount: {
        type: Number,
        required: true
    },
    tax_info: [{
        tax: String,
        amount: Number,
    }],
    total_amount: {
        type: Number,
        required: true
    },
    is_paid: {
        type: Boolean,
        required: true
    },
    is_delivered: {
        type: Boolean,
        default: false
    },
    is_returned: {
        type: Boolean,
        default: false
    },
    order_status: {
        type: String,
        default: "Pending" // RTS , Shipped, Cancelled, Delivered
    },
    paid_at: {
        type: Date,
        required: false
    },
    pickedup_at: {
        type: Date,
        required: false
    },
    delivered_at: {
        type: Date,
        required: false
    },
    shipped_at: {
        type: Date,
        required: false
    },
    cancelled_at: {
        type: Date,
        required: false
    },
    returned_at: {
        type: Date,
        required: false
    },
    returnpickedup_at: {
        type: Date,
        required: false
    },
    returnreceived_at: {
        type: Date,
        required: false
    },
    return_waybill: {
        type: String,
        required: false
    },
    return_upload_wbn: {
        type: String,
        required: false
    },
    label_pdf_link: {
        type: String,
        required: false
    },
    estimated_delivery_at: {
        type: String,
        required: false
    },
    estimated_returnpickup_at: {
        type: String,
        required: false
    },
    delhivery_status: {
        type: Schema.Types.Mixed,
        required: false
    },
    return_duration: {
        type: Number,
        required: false,
        default: 0
    },
    replacement_duration: {
        type: Number,
        required: false,
        default: 0
    }
},
{
    timestamps: true,
}
);


module.exports = mongoose.model("Orders", orderSchema);

const dat = {
    "ShipmentData": [
      {
        "Shipment": {
          "AWB": "6376110000195",
          // "CODAmount": 0,
          // "ChargedWeight": null,
          // "Consignee": {
          //   "Address1": [],
          //   "Address2": [],
          //   "Address3": "",
          //   "City": "",
          //   "Country": "India",
          //   "Name": "ASas",
          //   "PinCode": 110078,
          //   "State": "Delhi",
          //   "Telephone1": "",
          //   "Telephone2": ""
          // },
          "DeliveryDate": null,
          "DestRecieveDate": null,
          "Destination": "",
          "DispatchCount": 0,
          "Ewaybill": [],
          "ExpectedDeliveryDate": null,
          "Extras": "",
          "FirstAttemptDate": null,
          "InvoiceAmount": 0,
          "OrderType": "Pre-paid",
          "Origin": "Delhi_Gateway (Delhi)",
          "OriginRecieveDate": null,
          "OutDestinationDate": null,
          "PickUpDate": "2023-05-17T13:15:15.032",
          "PickedupDate": null,
          "PickupLocation": "Ball",
          "PromisedDeliveryDate": null,
          "Quantity": "",
          "RTOStartedDate": null,
          "ReferenceNo": "8",
          "ReturnPromisedDeliveryDate": null,
          "ReturnedDate": null,
          "ReverseInTransit": false,
          // "Scans": [
          //   {
          //     "ScanDetail": {
          //       "Instructions": "Manifest uploaded",
          //       "Scan": "Manifested",
          //       "ScanDateTime": "2023-05-17T13:15:15.299",
          //       "ScanType": "UD",
          //       "ScannedLocation": "Delhi_Gateway (Delhi)",
          //       "StatusCode": "X-UCI",
          //       "StatusDateTime": "2023-05-17T13:15:15.299"
          //     }
          //   }
          // ],
          // "SenderName": "e389cd-BEHERE-do",
          "Status": {
            "Instructions": "Manifest uploaded",
            "RecievedBy": "",
            "Status": "Manifested",
            "StatusCode": "X-UCI",
            "StatusDateTime": "2023-05-17T13:15:15.299",
            "StatusLocation": "Delhi_Gateway (Delhi)",
            "StatusType": "UD"
          }
        }
      }
    ]
  }