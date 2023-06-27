
const Payment = require("../schemas/payment");

var functions = {
    postPayment: function (req, res) {
        var obj = req.body;
        var pay_info = new Payment({
            payment_id: obj.payment_id,
            payment_type: obj.payment_type,
            orders: obj.orders,
            customer_id: obj.customer_id,
            amount: obj.amount,
            payment_instrument: obj.payment_instrument 
        });
        pay_info.save(function (err, pinfo) {
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
    getPayment: function (req, res) {
        var obj = req.query;
        if(obj.type === "manufacturer_id"){
        Payment.find({
            manufacturer_id: obj.manufacturer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "seller_id"){
        Payment.find({
            'seller_id': obj.seller_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "customer_id"){
        Payment.find({
            customer_id: obj.customer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "order_id"){
        Payment.find({
            'order_id': obj.order_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "product_id"){
        Payment.find({
            'product_id': obj.product_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id"){
        Payment.find({
            'listing_id': obj.listing_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else {
        Payment.findOne({
            payment_id: obj.payment_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
},
getOrderByDuration: function(req,res){
    var obj = req.query;
    var timeNow = Date.now();
    Payment.find({
        manufacturerID: obj.manufacturerID,
     //Case1   //timeNow-Payment's timeStamp {If duration 1}
    }, function (err, oinfo) {
        if (err) {
            return res.send({ success: false, msz: 'An Error Occured', err: err});
        }
        else if (!oinfo) {
            return res.send({ success: false, msz: 'Not Product Found', err: null});
        }
        else {
            if (oinfo.length === 0) {
                return res.send({ success: false, msz: 'No Product Found', err: null});
            }
            else {
                let i =0;
                let finalOinfo = [];
                const currentDate = new Date();
                for(i=0;i<oinfo.length;i++){
                    const diff = currentDate - Date(oinfo.createdAt);
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    if(days<req.query.days){
                        finalOinfo.push(oinfo[i]);
                    }
                }
                return res.send({ success: true, msz: finalOinfo, err: null});
            }
        }
    });
},
    cancelOrder: function (req, res) {
        var obj = req.body;
        Payment.findOneAndDelete({
            orderID: obj.orderID
        }, function (err, oInfo) {
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
                    msz: oInfo
                });
            }
        });
    },
    changeOrderStatus: function (req, res) {
        var obj = req.body;
        Payment.updateMany(
            {
                orderID: obj.orderIDArray,
            },
            {
                orderStatus: obj.orderStatus
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