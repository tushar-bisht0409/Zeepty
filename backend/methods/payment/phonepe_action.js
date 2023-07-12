const axios = require('axios');
const crypto = require('crypto');
const phonepe = require('../../config/phonepeConfig');
const Payment = require("../../schemas/payment");
const Order = require("../../schemas/order");
const { elasticClient } = require("../../config/elastic");
const { v4: uuidv4 } = require('uuid');
const Product = require('../../schemas/product');
const Listing = require('../../schemas/listing');
const ManufacturerInfo = require("../../schemas/manufacturerInfo");

var functions = {
    makePayment: async function (req, res) {

        var obj = req.body;

        const payObj = {
            "merchantId": "ZEEPTYONLINE",
            "merchantTransactionId": obj.payment_id,
            "merchantUserId": obj.customer_id,
            "amount": obj.amount,
            "redirectUrl": "http://zeepty.com",
            "redirectMode": "GET",
            "callbackUrl": "",
            "mobileNumber": "",
            "paymentInstrument": {
                "type": "PAY_PAGE"
            }
        }

        var data = Buffer.from(JSON.stringify(payObj), 'utf-8').toString('base64');

        const sha256Hash = crypto.createHash('sha256').update(`${data}/pg/v1/pay${phonepe.salt_key}`).digest('hex');

        const options = {
            method: 'POST',
            url: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': `${sha256Hash}###${phonepe.key_index}`
            },
            data: { request: data }
        };

        axios.request(options)
            .then(function (response) {
                res.send({
                    success: true,
                    err: null,
                    msz: response.data
                })
            })
            .catch(function (error) {
                res.send({
                    success: false,
                    err: error,
                })
            });
    },
    checkPaymentStatus: async function (req, res) {
        const sha256Hash = crypto.createHash('sha256').update(`/pg/v1/status/ZEEPTYONLINE/${req.query.payment_id}${phonepe.salt_key}`).digest('hex');

        const options = {
            method: 'GET',
            url: `https://api.phonepe.com/apis/hermes/pg/v1/status/ZEEPTYONLINE/${req.query.payment_id}`,
            headers: {
                'Content-Type': 'application/json',
                'X-VERIFY': `${sha256Hash}###${phonepe.key_index}`,
                'X-MERCHANT-ID': 'ZEEPTYONLINE'
            },
        };

        axios.request(options)
            .then(function (response) {
                res.send({
                    success: true,
                    err: null,
                    msz: response.data
                })
            })
            .catch(function (error) {
                res.send({
                    success: false,
                    err: error,
                })
            });

    },

    createPaymentAndOrder: async function (req, res) {

        try {
            var obj = req.body;
            var pay_id = uuidv4()
            const payObj = {
                "merchantId": "ZEEPTYONLINE",
                "merchantTransactionId": pay_id,
                "merchantUserId": obj.customer_id,
                "amount": obj.amount,
                "redirectUrl": "http://zeepty.com",
                "redirectMode": "GET",
                "callbackUrl": "",
                "mobileNumber": "",
                "paymentInstrument": {
                    "type": "PAY_PAGE"
                }
            }
            var data = Buffer.from(JSON.stringify(payObj), 'utf-8').toString('base64');
            const sha256Hash = crypto.createHash('sha256').update(`${data}/pg/v1/pay${phonepe.salt_key}`).digest('hex');
            const options = {
                method: 'POST',
                url: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-VERIFY': `${sha256Hash}###${phonepe.key_index}`
                },
                data: { request: data }
            };

            let zPayout = 50;
            let allOrders = [];
            let pay_orders = [];
            
            for(let i =0; i<obj.orders.length; i++){

                let o_id = uuidv4();
                let spay_id = uuidv4();
                let pInfo = await Product.findOne({
                    product_id: obj.orders[i].product_id,
                    sku_id: obj.orders[i].sku_id,
                    style_code: obj.orders[i].style_code
                },)

                let lInfo = await Listing.findOne({
                    listing_id: pInfo.listing_id,
                    sku_id: obj.orders[i].sku_id,
                    style_code: obj.orders[i].style_code
                },)

                let mInfo = await ManufacturerInfo.findOne({
                    manufacturer_id: pInfo.manufacturer_id
                },)

                pay_orders.push({
                    sub_payment_id: spay_id,
                    order_id: o_id, 
                    total_price: obj.orders[i].price,  
                    delivery_fee: 80, 
                    tax_price: 0,
                    seller_payout: 1,
                    manufacturer_payout: 1,
                    zeepty_payout: 1,
                    // seller_payout: pInfo.price - lInfo.price - zCommission,
                    // manufacturer_payout: lInfo.price,
                    // zeepty_payout: zPayout,
                })


                let newOrder ={
                    order_id: o_id,
                    waybill: "",
                    upload_wbn: "",
                    customer_id: obj.customer_id,
                    manufacturer_id: pInfo.manufacturer_id,
                    seller_id: pInfo.seller_id,
                    product: {
                        product_id: pInfo.product_id,
                        listing_id: pInfo.listing_id,
                        sku_id: pInfo.sku_id,
                        style_code: pInfo.style_code,
                        price: obj.orders[i].price,
                        quantity: obj.orders[i].quantity,
                    },
                    payout: {},
                    pickup_address: mInfo.pickup_address,
                    shipping_address: obj.shipping_address,
                    return_address: mInfo.return_address,
                    shipping_mode: "Express",
                    payment_method: "Online",
                    shipping_amount: 80,
                    tax_info: [],
                    total_amount: obj.orders[i].price,
                    is_paid: false,
                    order_status: "Payment Pending",
                }
                allOrders.push(newOrder)
            }
            const paySchema = Payment({
                payment_id: pay_id,
                payment_type: obj.payment_type,
                orders: pay_orders,
                customer_id: obj.customer_id,
                amount: obj.amount,
            });

            let ordersSaved = await Order.insertMany(allOrders);

            paySchema.save(function (err, pinfo) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occured",
                        err: err
                    });
                }
                else {
                    axios.request(options)
                        .then(function (response) {
                            res.send({
                                success: true,
                                err: null,
                                msz: response.data
                            })
                        })
                        .catch(function (error) {
                            res.send({
                                success: false,
                                err: error,
                            })
                        });
                }
            });
        } catch (error) {
            return res.send({ success: false, msz: 'An Error Occurred', err: error });
        }
    },
    updateOrderAfterPayment: async function (req, res) {
        try {
            const headers = req.headers;
            const obj = req.body;

            const encodedString = headers['x-verify'];
            const [encodedResponse, saltIndex] = encodedString.split('###');

            if (saltIndex === phonepe.key_index) {
                const sha256Hash = crypto.createHash('sha256').update(`${obj.response}${phonepe.salt_key}`).digest('hex');
                if (sha256Hash === encodedResponse) {
                    const decodedResponse = JSON.parse(Buffer.from(obj.response, 'base64').toString('utf-8'));
                    if (decodedResponse.success) {
                        if (decodedResponse.code === "PAYMENT_SUCCESS") {
                            let payInfo = await Payment.findOneAndUpdate(
                                { payment_id: decodedResponse.data.transactionId },
                                { payment_status: "Success", payment_instrument: decodedResponse.data.paymentInstrument });
                            if (payInfo.length === 0) {
                                //No Payement
                                return res.send({ success: false, msz: 'No Payment Found', err: null });
                            } else {

                                if (payInfo.amount === decodedResponse.data.amount) {
                                    let allOrders = [];
                                    for (let i = 0; i < payInfo.orders.length; i++) {
                                        allOrders.push(payInfo.orders[i].order_id);
                                    }

                                    let newOrders = await Order.updateMany(
                                        {
                                            order_id: allOrders,
                                        },
                                        {
                                            is_paid: true,
                                            order_status: "Pending",
                                            paid_at: Date.now()
                                        });

                                    for (let i = 0; i < payInfo.orders.length; i++) {

                                        let oInfo = await Order.findOne({
                                            order_id: payInfo.orders[i].order_id
                                        })

                                        if(oInfo !== null){

                                        let lInfo = await Listing.findOneAndUpdate(
                                            {
                                                listing_id: oInfo.product.listing_id,
                                                sku_id: oInfo.product.sku_id,
                                                style_code: oInfo.product.style_code
                                            },
                                            {
                                                $inc: {
                                                    'product_size.inventory': -oInfo.product.quantity,
                                                    'sold_count': oInfo.product.quantity

                                                }
                                            },
                                            { new: true }
                                        );

                                        if (lInfo.length !== 0) {
                                            const searchResults = await elasticClient.search({
                                                index: 'listing',
                                                body: {
                                                    query: {
                                                      bool: {
                                                        must: [
                                                          { term: { listing_id:  lInfo.listing_id } },
                                                          { term: { sku_id:  lInfo.sku_id } },
                                                          { term: { style_code:  lInfo.style_code } }
                                                        ]
                                                      }
                                                    }
                                                  }
                                            });

                                            const productsToUpdate = searchResults.hits.hits;
                                            const bulkUpdateBody = productsToUpdate.flatMap(listing => [
                                                { update: { _index: 'listing', _id: listing._id } },
                                                { doc: { inventory: lInfo.product_size.inventory, sold_count: lInfo.sold_count } }
                                            ]);
                                            const bulkUpdateResponse = await elasticClient.bulk({ body: bulkUpdateBody });
                                        }

                                        let prodInfo = await Product.findOneAndUpdate(
                                            {
                                                product_id: oInfo.product.product_id,
                                                sku_id: oInfo.product.sku_id,
                                                style_code: oInfo.product.style_code
                                            },
                                            {
                                                $inc: {
                                                    'product_size.inventory': -oInfo.product.quantity,
                                                    'sold_count': oInfo.product.quantity

                                                }
                                            },
                                            { new: true }
                                        );
                                        if (prodInfo.length !== 0) {
                                            const searchResults = await elasticClient.search({
                                                index: 'product',
                                                body: {
                                                    query: {
                                                        bool: {
                                                            must: [
                                                                { term: { product_id: prodInfo.product_id } },
                                                                { term: { style_code: prodInfo.style_code } },
                                                                { term: { sku_id: prodInfo.sku_id } }
                                                            ]
                                                        }
                                                    }
                                                }
                                            });


                                            const productsToUpdate = searchResults.hits.hits;
                                            const bulkUpdateBody = productsToUpdate.flatMap(product => [
                                                { update: { _index: 'product', _id: product._id } },
                                                { doc: { inventory: prodInfo.product_size.inventory, sold_count: prodInfo.sold_count } }
                                            ]);
                                            const bulkUpdateResponse = await elasticClient.bulk({ body: bulkUpdateBody });
                                        }
                                    }
                                }
                                return res.send({ success: true, msz: 'Updated Successfully', err: null });
                                } else {
                                    //Amount not same , Something Went Wrong
                                    return res.send({ success: false, msz: 'Amount Not Same, Contact Support', err: null });
                                }
                            }

                        } else if (decodedResponse.code === "PAYMENT_ERROR") {
                            let payInfo = await Payment.findOneAndUpdate(
                                { payment_id: decodedResponse.data.transactionId },
                                { payment_status: "Success" });

                            for (let i = 0; i < payInfo.orders.length; i++) {
                                allOrders.push(payInfo.orders[i].order_id);
                            }
                            Order.findAndDelete(
                                {
                                    order_id: allOrders,
                                });
                            return res.send({ success: false, msz: 'Payment was not successfull', err: null });
                        } else {
                            //Something went wrong
                            return res.send({ success: false, msz: 'Payment Status Unknown', err: null });
                        }
                    } else {
                        return res.send({ success: false, msz: 'Success False', err: null });
                    }
                } else {
                    //Not Verified
                    return res.send({ success: false, msz: 'Payment Not Verified because response doesnot match', err: null });
                }
            } else {
                //Not Verified
                return res.send({ success: false, msz: 'Payment Not Verified because of salt key index', err: null });
            }
        } catch (error) {
            return res.send({ success: false, msz: 'An Error Occurred', err: error });
        }
    }
}

module.exports = functions
