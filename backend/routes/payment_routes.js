const express = require("express");
const router = express.Router();

const payment_action = require('../methods/payment_action');

// POST / Save New Payment
router.post('/savepayment', payment_action.postPayment);

module.exports = router;