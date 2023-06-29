const axios = require('axios');
const Order = require("../schemas/order");
const { v4: uuidv4 } = require('uuid');

//LIVE TOKEN 4533cba3d09c37162d06cd3d416c7c80db7fff35
//TEST TOKEN cac8f4b2dc2e10ecaf035b71827d8eedad616ce3

function processOrderStatus(dstatus,ostatus,statusType) {
    if(ostatus !== "Cancelled" && ostatus !== "Lost"){
        if(ostatus !== "Returned"){
   if(dstatus === "Manifested" || dstatus === "Not Picked" && statusType === "UD") {
    if(ostatus === "RTS"){
        return "RTS";
    } else {
        return "Pending";
    }
   } else if(dstatus === "In­ Transit" || dstatus === "Pending" || dstatus === "Dispatched" && statusType === "UD") {
    return "Shipped";
   } else if(dstatus === "Delivered" && statusType === "DL") {
    return "Delivered";
   }
 } else{ if(dstatus === "In­ Transit" || dstatus === "Pending" || dstatus === "Dispatched" && statusType === "RT") {
    return "RIT";
   } else if(dstatus === "RTO" && statusType === "DL") {
    return "RD";
   }
}
} else{
    return ostatus;
}
}

var functions = {
    checkPincodeServiceability: async function (req, res) {
        var obj = req.query;

        const url = `https://track.delhivery.com/c/api/pin-codes/json/?filter_codes=${obj.postalcodes}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            const resObj = response.data.delivery_codes;
            let resultObject = [];
            for (let i = 0; i < resObj.length; i++) {
                const newObj = {
                    postalcode: resObj[i]['postal_code']['pin'],
                    serviceable: resObj[i]['postal_code']['is_oda'] === "N" ? true : false,
                    cod: resObj[i]['postal_code']['cod'] === "Y" ? true : false
                }
                resultObject.push(newObj);
            }
            return res.json({
                success: true,
                msz: resultObject,
                err: null
            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    fetchWaybill: async function (req, res) {
        var obj = req.query;

        const url = `https://track.delhivery.com/waybill/api/bulk/json/?count=${obj.count}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            const resultArray = response.data.split(',');
            return res.json({
                success: true,
                msz: resultArray,
                err: null
            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    calculateShippingCost: async function (req, res) {
        var obj = req.query;

        const url = `https://track.delhivery.com/api/kinko/v1/invoice/charges/.json?md=${obj.md}&ss=${obj.ss}&d_pin=${obj.d_pin}&o_pin=${obj.o_pin}&cgm=${obj.cgm}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            return res.json({
                success: true,
                msz: response.data[0],
                total_amount: response.data[0].total_amount,
                err: null
            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    createWarehouse: async function (req, res) {
        var obj = req.body;

        const requestData = {
            "name": obj.store_name,
            "email": obj.email,
            "phone": obj.phone,
            "address": obj.pickup_address.address,
            "city": obj.pickup_address.city,
            "state": obj.pickup_address.state,
            "country": "India",
            "pin": obj.pickup_address.postalcode,
            "return_address": obj.return_address,
            "return_pin": obj.return_address.postalcode,
            "return_city": obj.return_address.city,
            "return_state": obj.return_address.state,
            "return_country": "India"
        }

        const url = 'https://track.delhivery.com/api/backend/clientwarehouse/create/';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };

        await axios.post(url, requestData, { headers }).then(response => {
            if (response.data.success) {
                return res.send({
                    success: true,
                    msz: 'Successfully Created Warehouse',
                    err: null,
                    response: response.data
                });
            } else {
                return res.json({
                    success: false,
                    msz: "Something Went Wrong (Delhivery)",
                    response: response.data,
                    err: null
                });
            }
        })
            .catch(error => {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: error
                });
            });
    },
    createPickupRequest: async function (req, res) {
        var obj = req.body;

        const requestData = {
            "pickup_location": obj.store_name,
            "expected_package_count": obj.expected_package_count,
            "pickup_date": obj.pickup_date,
            "pickup_time": obj.time
        }

        const url = 'https://track.delhivery.com/​fm/request/new/';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };

        await axios.post(url, requestData, { headers }).then(response => {
            Order.updateMany(
                { order_id: obj.order_ids },
                { order_status: "RTS" },
                function (err, oinfo) {
                    if (err) {
                        return res.json({
                            success: false,
                            msz: "Failed to Create",
                            err: err
                        });
                    } else {
                        return res.send({
                            success: true,
                            msz: 'Successfully Created Pickup Request',
                            err: null,
                            response: response.data
                        });
                    }
                });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    generateShippingLabel: async function (req, res) {
        var obj = req.body;

        const waybillString = obj.waybills.join(',');

        const url = `https://track.delhivery.com/api/p/packing_slip?wbns=${waybillString}&pdf=${obj.pdf}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            let wbnLinkArray = [];
            for (let i = 0; i < response.data.packages_found; i++) {
                wbnLinkArray.push({
                    wbn: response.data.packages[i]['wbn'],
                    label_pdf_link: response.data.packages[i]['pdf_download_link']
                })
            }

            const bulkOperations = wbnLinkArray.map(({ wbn, label_pdf_link }) => ({
                updateOne: {
                    filter: { wbn },
                    update: { $set: { label_pdf_link } }
                }
            }));

            Order.bulkWrite(bulkOperations, function (err, result) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occured",
                        err: err
                    });
                } else {
                    return res.send({
                        success: true,
                        msz: 'Successfully Generated And Savel Label',
                        err: null,
                        response: response.data,
                        labelArray: wbnLinkArray,
                        result: result
                    });
                }

            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    trackShipment: async function (req, res) {
        var obj = req.query;

        const url = `https://track.delhivery.com/api/v1/packages/json/?waybill${obj.waybill}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            return res.json({
                success: true,
                msz: response.data,
                err: null
            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    createShipment: async function (req, res) {
        var obj = req.body;

        var orderObj = {
            "shipments": [
              {
                "name": obj.name,
                "add": obj.add,
                "pin": obj.postalcode,
                "city": "",
                "state": "",
                "country": "",
                "phone": obj.phone,
                "order": obj.order_id,
                "payment_mode": obj.payment_mode,
                "return_pin": obj.return_pin,
                "return_city": obj.return_city,
                "return_phone": obj.return_phone,
                "return_add": obj.return_address,
                "return_state": "",
                "return_country": "",
                "products_desc": "",
                "hsn_code": "",
                "cod_amount": obj.cod_amount,
                "order_date": null,
                "total_amount": "",
                "seller_add": "",
                "seller_name": "",
                "seller_inv": "",
                "quantity": obj.qunatity,
                "waybill": "",
                "shipment_width": "",
                "shipment_height": "",
                "weight": "",
                "seller_gst_tin": "",
                "shipping_mode": obj.shipping_mode,
                "address_type": ""
              }
            ],
            "pickup_location": obj.pickup_location
            // {
            //   "name": "Apple",
            //   "add": "Apple Store",
            //   "city": "Delhi",
            //   "pin_code": 110078,
            //   "country": "India",
            //   "phone": "1234567890"
            // }
          }

        const formData = new URLSearchParams();
        formData.append('format', 'json');
        formData.append('data', JSON.stringify(orderObj));

        const url = 'https://track.delhivery.com/api/cmu/create.json';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };

        await axios.post(url, formData, { headers }).then(response => {
            if (response.data.success) {
                    // var orderinfo = new Order({
                    //     order_id: obj.order_id,
                    //     waybill: response.data.packages[0].waybill,
                    //     customer_id: obj.customer_id,
                    //     manufacturer_id: obj.manufacturer_id,
                    //     seller_id: obj.seller_id,
                    //     product: obj.product,
                    //     pickup_address: obj.pickup_address,
                    //     shipping_address: obj.shipping_address,
                    //     return_address: obj.return_address,
                    //     payment_method: obj.payment_method,
                    //     shipping_amount: obj.shipping_amount,
                    //     tax_info: obj.tax_info,
                    //     total_amount: obj.total_amount,
                    //     is_paid: obj.is_paid,
                    //     paid_at: obj.paid_at,
                    //     upload_wbn: response.data.upload_wbn
                    // });
                
                    // orderinfo.save(async
                    Order.findOneAndUpdate(
                        {order_id: obj.order_id},
                        {waybill: response.data.packages[0].waybill},
                         function (err, pinfo) {
                    if (err) {
                        return res.json({
                            success: false,
                            msz: "An Error Occured",
                            err: err,
                            response: response.data
                        });
                    }
                    else {
                        return res.json({
                            success: true,
                            msz: "Successfully Saved",
                            response: response.data
                        });
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msz: "Something Went Wrong (Delhivery)",
                    err: null,
                    response: response.data
                });
            }
        }).catch(error => {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: error
                });
            });
    },

    editShipment: async function (req, res) {
        var obj = req.body;

        const url = 'https://track.delhivery.com/api/p/edit';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        const requestData = {
            "waybill": obj.waybill,
            "tax_value": obj.tax_value,
            "name": obj.name,
            "add": obj.add,
            "product_details": obj.product_details,
            "shipment_length": obj.shipment_length,
            "shipment_width": obj.shipment_width,
            "shipment_height": obj.shipment_height,
            "weight": obj.weight,
            }
        await axios.post(url, requestData, { headers }).then(response => {
            if (response.data.success) {
                return res.json({
                    success: true,
                    msz: "Successfully Edited"
                });
            } else{
                return res.json({
                    success: false,
                    msz: "Something Went Wrong (Delhivery)",
                    err: null
                });
            }
        }).catch(error => {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: error
                });
            });
    },

    cancelShipment: async function (req, res) {
        var obj = req.body;

        const requestData = {
            "waybill": obj.waybill,
            "cancellation": true
            }

        const url = 'https://track.delhivery.com/api/p/edit';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };

        await axios.post(url, requestData, { headers }).then(response => {
            if (response.data.success) {
                Order.findOneAndUpdate(
                    {waybill: obj.waybill},
                    {
                        order_status: "Cancelled",
                        cancelled_at: Date.now()
                    },
                    function (err, oinfo) {
                        if (err) {
                            return res.json({
                                success: false,
                                msz: "An Error Occured",
                                err: err
                            });
                        }
                        else {
                            return res.json({
                                success: true,
                                msz: "Successfully Cancelled"
                            });
                        }
                    }
                )
            } else{
                return res.json({
                    success: false,
                    msz: "Something Went Wrong (Delhivery)",
                    err: null
                });
            }
        })
            .catch(error => {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: error
                });
            });
    },
    NDRAction: async function (req, res) {
        var obj = req.body;

        const url = 'https://track.delhivery.com/api/p/update';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        const requestData = obj;
        await axios.post(url, requestData, { headers }).then(response => {
                return res.json({
                    success: true,
                    msz: response.data,
                    err: null
                });
        }).catch(error => {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: error
                });
            });
    },
    NDRStatus: async function (req, res) {
        var obj = req.query;

        const url = `https://track.delhivery.com/api/cmu/get_bulk_upl/${obj.upl}?verbose=${obj.verbose}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            return res.json({
                success: true,
                msz: response.data,
                err: null
            });
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
    trackAndUpdateOrderStatus: async function (req, res) {
        var obj = req.body;
        const waybillString = obj.waybills.join(',');

        const url = `https://track.delhivery.com/api/v1/packages/json/?waybill${waybillString}`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 4533cba3d09c37162d06cd3d416c7c80db7fff35'
        };
        await axios.get(url, { headers }).then(response => {
            if(response.data['Success'] === false){
                return res.json({
                    success: false,
                    msz: "Something Went Wrong (Delhivery)",
                    err: response.data['Error'],
                    response: response.data
                });
            } else{
                let orderStatusArray = [];
                for (let i = 0; i < response.data.ShipmentData; i++) {
                    let cwbn = response.data.ShipmentData[i]['Shipment']['AWB'];
                    orderStatusArray.push({
                    wbn: cwbn,
                    order_status: processOrderStatus(response.data.ShipmentData[i]['Shipment']['Status']['Status'],obj.orderStatusObject[`${cwbn}`],response.data.ShipmentData[i]['Shipment']['Status']['StatusType']),
                    delhivery_status: response.data.ShipmentData[i]['Shipment'],
                    shipped_at: response.data.ShipmentData[i]['Shipment']['PickedupDate'],
                    delivered_at: response.data.ShipmentData[i]['Shipment']['DeliveryDate'],
                    returnpickedup_at: response.data.ShipmentData[i]['Shipment']['RTOStartedDate'],
                    returnreceived_at: response.data.ShipmentData[i]['Shipment']['ReturnedDate'],
                })
            }

            const bulkOperations = orderStatusArray.map(({ wbn, order_status, delhivery_status }) => ({
                updateOne: {
                    filter: { wbn },
                    update: { $set: { order_status, delhivery_status } }
                }
            }));

            Order.bulkWrite(bulkOperations, function (err, result) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occured",
                        err: err
                    });
                } else {
                    return res.send({
                        success: true,
                        msz: 'Successfully Generated And Savel Label',
                        err: null,
                        response: response.data,
                        result: result
                    });
                }

            });
            }
        }).catch(error => {
            return res.json({
                success: false,
                msz: "An Error Occured",
                err: error
            });
        });
    },
}

module.exports = functions;


const trackigDataBeforeLabel = {
    "ShipmentData": [
      {
        "Shipment": {
          "AWB": "6376110000291",
          "CODAmount": 0,
          "ChargedWeight": null,
          "Consignee": {
            "Address1": [],
            "Address2": [],
            "Address3": "",
            "City": "",
            "Country": "India",
            "Name": "AAA",
            "PinCode": 110078,
            "State": "Delhi",
            "Telephone1": "",
            "Telephone2": ""
          },
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
          "PickUpDate": "2023-05-21T14:53:30.631",
          "PickedupDate": null,
          "PickupLocation": "Apple",
          "PromisedDeliveryDate": null,
          "Quantity": "",
          "RTOStartedDate": null,
          "ReferenceNo": "190",
          "ReturnPromisedDeliveryDate": null,
          "ReturnedDate": null,
          "ReverseInTransit": false,
          "Scans": [
            {
              "ScanDetail": {
                "Instructions": "Manifest uploaded",
                "Scan": "Manifested",
                "ScanDateTime": "2023-05-21T14:53:30.912",
                "ScanType": "UD",
                "ScannedLocation": "Delhi_Gateway (Delhi)",
                "StatusCode": "X-UCI",
                "StatusDateTime": "2023-05-21T14:53:30.912"
              }
            }
          ],
          "SenderName": "e389cd-BEHERE-do",
          "Status": {
            "Instructions": "Manifest uploaded",
            "RecievedBy": "",
            "Status": "Manifested",
            "StatusCode": "X-UCI",
            "StatusDateTime": "2023-05-21T14:53:30.912",
            "StatusLocation": "Delhi_Gateway (Delhi)",
            "StatusType": "UD"
          }
        }
      }
    ]
  }