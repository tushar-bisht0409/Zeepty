const Order = require("../schemas/order");
const { v4: uuidv4 } = require('uuid');

var functions = {
    postOrder: function (req, res) {
        var obj = req.body;
        const o_id = uuidv4();
        var orderinfo = new Order({
            order_id: o_id,
            waybill: obj.waybill,
            upload_wbn: obj.upload_wbn,
            customer_id: obj.customer_id,
            manufacturer_id: obj.manufacturer_id,
            seller_id: obj.seller_id,
            product: obj.product,
            pickup_address: obj.pickup_address,
            shipping_address: obj.shipping_address,
            return_address: obj.return_address,
            payment_method: obj.payment_method,
            shipping_amount: obj.shipping_amount,
            tax_info: obj.tax_info,
            total_amount: obj.total_amount,
            is_paid: obj.is_paid,
            paid_at: obj.paid_at,
            payout: obj.payout,
            return_duration: obj.return_duration,
            replacement_duration: obj.replacement_duration
        });
        orderinfo.save(function (err, uinfo) {
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
                    msz: "Successfully Saved"
                });
            }
        });
    },

    getOrder: function (req, res) {
        var obj = req.query;
        if (obj.type === "manufacturer_id") {
            Order.find({
                manufacturer_id: obj.manufacturer_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "seller_id") {
            Order.find({

                'seller_id': obj.seller_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "customer_id") {
            Order.find({
                customer_id: obj.customer_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "product_id") {
            Order.find({
                'product.product_id': obj.product_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "waybill") {
            Order.findOne({
                'waybill': obj.waybill
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else {
            Order.findOne({
                order_id: obj.order_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Product Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Product Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        }
    },
    getOrderByDuration: function (req, res) {
        var obj = req.query;
        var timeNow = Date.now();
        Order.find({
            manufacturer_id: obj.manufacturer_id,
            //Case1   //timeNow-Order's timeStamp {If duration 1}
        }, function (err, oinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err });
            }
            else if (!oinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null });
            }
            else {
                if (oinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null });
                }
                else {
                    let i = 0;
                    let finalOinfo = [];
                    const currentDate = new Date();
                    for (i = 0; i < oinfo.length; i++) {
                        const diff = currentDate - Date(oinfo.createdAt);
                        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                        if (days < req.query.days) {
                            finalOinfo.push(oinfo[i]);
                        }
                    }
                    return res.send({ success: true, msz: finalOinfo, err: null });
                }
            }
        });
    },
    changeOrderStatus: function (req, res) {
        var obj = req.body;
        Order.updateMany(
            {
                order_id: obj.order_ids,
            },
            {
                order_status: obj.order_status
            },
            function (err, oInfo) {
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
                        msz: "Successfully Done"
                    });
                }
            });
    },
}

module.exports = functions;