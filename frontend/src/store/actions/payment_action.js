export const createPaymentPhonepe = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/creatpaymentphonepe`, {
            method: 'POST', headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)});
    
        const json = await response.json();
        return json;
    } catch (error) {
      return {"msz": "Something went wrong", "success": false}
    }
  }

  export const checkPaymentStatusPhonepe = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/checkpaymentstatus?payment_id=${obj.payment_id}`, {
            method: 'GET', headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            });
    
        const json = await response.json();
        return json;
    } catch (error) {
      return {"msz": "Something went wrong", "success": false}
    }
  }


        //   "request": {
        //     "merchantId": "ZEEPTYONLINE",
        //     "merchantTransactionId": uuidv4(),
        //     "merchantUserId": uuidv4(),
        //     "amount": amnt,
        //     "redirectUrl": "http://zeepty.com",
        //     "redirectMode": "POST",
        //     "callbackUrl": "http://zeepty.com",
        //     "mobileNumber": "",
        //     "paymentInstrument": {
        //       "type": "PAY_PAGE"
        //     }
