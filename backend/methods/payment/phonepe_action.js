const axios = require('axios');
const crypto = require('crypto');
const phonepe = require('../../config/phonepeConfig');

var functions = { makePayment: async function (req,res) {

    var obj = req.body;

    const payObj = {
            "merchantId": "ZEEPTYONLINE",
            "merchantTransactionId": obj.payment_id,
            "merchantUserId": obj.customer_id,
            "amount": obj.amount,
            "redirectUrl": "http://localhost:3001",
            "redirectMode": "GET",
            "callbackUrl": "http://192.168.71.244:3000/savetest",
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
    data: {request: data}
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
checkPaymentStatus: async function(req,res) {
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
}

module.exports = functions
