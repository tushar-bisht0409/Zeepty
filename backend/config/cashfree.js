const { CFConfig, CFEnvironment } = require('cashfree-pg-sdk-nodejs')
const cashfreeConfig = require("./cashfreeConfig");

let cfConfig;
const connectCashFree = async() =>{
    try{
        console.log("Cashfree");
        cfConfig = new CFConfig(CFEnvironment.SANDBOX, "2022-01-01", cashfreeConfig.api_id, cashfreeConfig.secret_key);
        console.log("Cashfree Connected");
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = {
    cfConfig: cfConfig,
};