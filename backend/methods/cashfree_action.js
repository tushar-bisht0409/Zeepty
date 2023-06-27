const axios = require('axios');
const { CFCustomerDetails, CFOrderRequest, CFPaymentGateway, CFConfig, CFEnvironment } = require('cashfree-pg-sdk-nodejs');
const { v4: uuidv4 } = require('uuid');
const cashfreeConfig = require('../config/cashfreeConfig');

var functions = {
  creatPaymentOrder: async function (req, res) {
    var obj = req.body;
    var customerDetails = new CFCustomerDetails();
    customerDetails.customerId = "some_random_id"//obj.customer_id;
    customerDetails.customerPhone = "9999999999" //obj.customer_phone;
    customerDetails.customerEmail = "b.a@cashfree.com"//obj.customer_email;

    var cFOrderRequest = new CFOrderRequest();
    cFOrderRequest.orderAmount = 1;
    cFOrderRequest.orderCurrency = "INR";
    cFOrderRequest.customerDetails = customerDetails;
    cFOrderRequest.orderTags = obj.order_tags;
    try {
      var apiInstance = new CFPaymentGateway();

      var cfConfig = new CFConfig(CFEnvironment.SANDBOX, "2022-01-01", cashfreeConfig.api_id, cashfreeConfig.secret_key);

      var result = await apiInstance.orderCreate(
        cfConfig,
        cFOrderRequest
      );
      if (result != null) {
        // console.log(result.cfOrder.paymentSessionId);
        // console.log(result.cfOrder.orderId);
        // console.log(result.cfHeaders);
        return res.send({
                success: true,
                msz: "Successfully Created Payment Order",
                result: result,
                err: null
            })
      }
    } 
    catch (error) {
        return res.send({
      success: false,
      msz: "Something Went Wrong (Cashfree)",
      err: error
  })
    }

  }
}

module.exports = functions;


// try {
//   // const o_id = uuidv4();
//   var requestData = {
//       customer_details: {
//         customer_id: obj.customer_id,
//         customer_email: obj.customer_email,
//         customer_phone: obj.customer_phone,
//       },
//       // order_id: o_id,
//       order_amount: obj.order_amount,
//       order_currency: obj.order_currency,
//       order_note: obj.order_note,
//     };
//   const response = await axios.post('https://sandbox.cashfree.com/pg/orders',
//   requestData,
//   {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'x-api-version': '2022-01-01',
//       'x-client-id': api_id,
//       'x-client-secret': secret_key,
//     },
//   });
//   const orderToken = response.data.order_token;
//   return res.send({
//       success: true,
//       msz: "Successfully Created Payment Order",
//       order_token: orderToken,
//       err: null
//   })
// } catch (error) {
//   return res.send({
//       success: false,
//       msz: "Something Went Wrong (Cashfree)",
//       err: error
//   })
// }