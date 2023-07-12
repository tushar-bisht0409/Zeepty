const Listing = require("../schemas/listing");
const ManufacturerInfo = require("../schemas/manufacturerInfo");
const User = require("../schemas/user");
const Order = require("../schemas/order");
const ListingRequest = require("../schemas/listingRequest");
const { default: axios } = require("axios");
const { delhivery_authorization } = require("../config/delhiveryConfig");


var functions = {
    postManufacturerInfo: function (req, res) {
        var obj = req.body;
        var maninfo = new ManufacturerInfo({
            manufacturer_id: obj.manufacturer_id,
            name: obj.name,
            email: obj.email,
            phone: obj.phone,
            store_name: obj.store_name,
            gst_details: obj.gst_details,
            gst_api_data: obj.gst_api_data,
            pickup_address: obj.pickup_address,
            return_address: obj.return_address,
            bank_details: obj.bank_details,
            signature_url: obj.signature_url
        });
        maninfo.save(function (err, minfo) {
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
    editManufacturerInfoAndDelhiveryWarehouse: async function (req, res) {
       try {
        var obj = req.body;
        const minfo = await ManufacturerInfo.findOneAndUpdate(
            {
                manufacturer_id: obj.manufacturer_id
            },
            {
                pickup_address: obj.pickup_address,
                return_address: obj.return_address,
                bank_details: obj.bank_details,
                name: obj.name,
                store_name: obj.store_name,
                signature_url: obj.signature_url
            },
            { new: true });
        if(minfo !== null) {
            const requestData = {
                "name": obj.store_name,
                "email": obj.email,
                "phone": obj.phone,
                "address": obj.pickup_address.address,
                "city": obj.pickup_address.city,
                "state": obj.pickup_address.state,
                "country": "India",
                "pin": obj.pickup_address.pincode,
                "return_address": obj.return_address.address,
                "return_pin": obj.return_address.pincode,
                "return_city": obj.return_address.city,
                "return_state": obj.return_address.state,
                "return_country": "India"
            }
            console.log("delhivery_authorization",requestData )
            const url = 'https://track.delhivery.com/api/backend/clientwarehouse/create/';
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${delhivery_authorization}`
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
        } else{
            return res.json({
                success: false,
                msz: "Manufacturer Info not saved",
                err: null
            });
        }
        } catch(err) {
            return res.json({
                success: false,
                msz: "An Error Occurred",
                err: err
            });
        }
    },
    getManufacturerInfo: function (req, res) {
        var obj = req.query;
        ManufacturerInfo.findOne({
            manufacturer_id: obj.manufacturer_id
        }, function (err, minfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong" });
            }
            if (!minfo) {
                return res.send({ success: true, msz: "No ManufacturerInfo Found", isNew: true });
            }
            else {
                if (minfo.length === 0) {
                    return res.send({ success: true, msz: "No ManufacturerInfo Found", isNew: true });
                }
                else {
                    return res.send({ success: true, msz: minfo, isNew: false });
                }
            }
        });
    },
    editManufacturerInfo: function (req, res) {
        var obj = req.body;
        if (obj.type === "gstin") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    gst_details: obj.gst_details,
                    gst_api_data: obj.gst_api_data,
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo });
                    }
                });
        } else if (obj.type === "gst_phone_email") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    phone: obj.phone,
                    email: obj.email,
                    gst_details: obj.gst_details,
                    gst_api_data: obj.gst_api_data,
                    store_name: obj.store_name
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo });
                    }
                });
        } else if (obj.type === "pickup_bank_supplier") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    pickup_address: obj.pickup_address,
                    return_address: obj.return_address,
                    bank_details: obj.bank_details,
                    name: obj.name,
                    store_name: obj.store_name
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo });
                    }
                });
        }
        else if (obj.type === "name") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    name: obj.name
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo });
                    }
                });
        } else if (obj.type === "signature_url") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    signature_url: obj.signature_url
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo });
                    }
                });
        } else if (obj.type === "phone") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id

                },
                {
                    phone: obj.phone
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "email") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    email: obj.email,
                    emailVerified: true
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "GSTIN") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    GSTIN: obj.GSTIN,
                    GSTINVerified: true
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "firmName") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    firmName: obj.firmName,
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "address") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    pickupAddress: obj.pickupAddress,
                    addressVerified: true
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else {
            return res.send({ success: false, msz: "Wrong Data Passed" });
        }
    },
    validateAndGetManufacturer: function (req, res) {

        const obj = req.query;

        User.findOne(
            { _id: obj.manufacturer_id, mode: 'Manufacturer' },
            function (err, doc) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occurred",
                        err: err
                    });
                } else {
                    if (doc === null || doc === undefined) {
                        return res.send({ success: false, msz: "User Doesnot Exist", err: null });
                    } else {
                        ManufacturerInfo.findOne({
                            manufacturer_id: obj.manufacturer_id
                        }, function (err, minfo) {
                            if (err) {
                                return res.send({ success: false, msz: "Something Went Wrong", err: err });
                            }
                            if (!minfo) {
                                return res.send({ success: true, msz: "No ManufacturerInfo Found",user: doc, isNew: true });
                            }
                            else {
                                if (minfo.length === 0) {

                                    return res.send({ success: true, msz: "No ManufacturerInfo Found",user: doc, isNew: true });
                                }
                                else {
                                    return res.send({ success: true, msz: minfo, user: doc, isNew: false });
                                }
                            }
                        });
                    }
                }
            }
        )
    },
    checkIsStoreNameUnique: function (req, res) {
        const obj = req.query;
        ManufacturerInfo.findOne({
            store_name: obj.store_name
        }, function (err, minfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong", err: err });
            }
            if (!minfo) {
                return res.send({ success: true, msz: "Store Name Is Unique", err: null });
            }
            else {
                if (minfo.length === 0) {
                    return res.send({ success: true, msz: "Store Name Is Unique", err: null });
                }
                else {
                    return res.send({ success: false, msz: 'Store Name Already Exist', err: null });
                }
            }
        });
    },
    getManufacturerSummary: function (req, res) {
        const obj = req.query;
        let orders = [];
        let listings = [];
        let listing_request = [];
        let stage = 0;
        ManufacturerInfo.findOne({
            manufacturer_id: obj.manufacturer_id
        }, async function (err, minfo) {
            if (err) {
                return res.send({ success: false, msz: "An Error Occured", err: err });
            }
            if (!minfo) {
                return res.send({ success: false, msz: "No ManufacturerInfo Found", isNew: true });
            }
            else {
                if (minfo.length === 0) {
                    return res.send({ success: false, msz: "No ManufacturerInfo Found", isNew: true });
                }
                else {
                    await ListingRequest.aggregate([
                        { $match: { manufacturer_id: obj.manufacturer_id } },
                        { $group: { _id: "$listing_id", count: { $sum: 1 }, documents: { $push: "$$ROOT" } } },
                        { $project: { _id: 0, listing_id: "$_id", count: 1, documents: 1 } }
                    ], function (err, lrinfo) {
                        if (err) {
                            return res.send({ success: false, msz: 'An Error Occured', err: err });
                        }
                        else if (!lrinfo) {
                            return res.send({
                                success: true,
                                msz: {
                                    stage: stage,
                                    manufacturer_info: minfo,
                                    listing_request: listing_request,
                                    listings: listings,
                                    orders: orders,
                                }
                            });
                        }
                        else {
                            if (lrinfo.length === 0) {
                                return res.send({
                                    success: true,
                                    msz: {
                                        stage: stage,
                                        manufacturer_info: minfo,
                                        listing_request: listing_request,
                                        listings: listings,
                                        orders: orders,
                                    }
                                });
                            }
                            else {
                                stage = 1;
                                listing_request = lrinfo;
                                Listing.find({
                                    manufacturer_id: obj.manufacturer_id
                                }, function (err, linfo) {
                                    if (err) {
                                        return res.send({ success: false, msz: 'An Error Occured', err: err });
                                    }
                                    else if (!linfo) {
                                        return res.send({
                                            success: true,
                                            msz: {
                                                stage: stage,
                                                manufacturer_info: minfo,
                                                listing_request: listing_request,
                                                listings: listings,
                                                orders: orders,
                                            }
                                        });
                                    }
                                    else {
                                        if (linfo.length === 0) {
                                            return res.send({
                                                success: true,
                                                msz: {
                                                    stage: stage,
                                                    manufacturer_info: minfo,
                                                    listing_request: listing_request,
                                                    listings: listings,
                                                    orders: orders,
                                                }
                                            });
                                        }
                                        else {
                                            stage = 2;
                                            listings = linfo;
                                            Order.find({
                                                manufacturer_id: obj.manufacturer_id
                                            }, function (err, oinfo) {
                                                if (err) {
                                                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                                                }
                                                else if (!oinfo) {
                                                }
                                                else {
                                                    if (oinfo.length === 0) {
                                                    }
                                                    else {
                                                        stage = 3;
                                                        orders = oinfo;
                                                        let ind = orders.findIndex(ord => ord.order_status != "Pending");
                                                        if (ind === -1) {
                                                            stage = 3;
                                                        } else {
                                                            stage = 4;
                                                        }
                                                    }
                                                    return res.send({
                                                        success: true,
                                                        msz: {
                                                            stage: stage,
                                                            manufacturer_info: minfo,
                                                            listing_request: listing_request,
                                                            listings: listings,
                                                            orders: orders,
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });

                            }
                        }
                    });

                }
            }
        });
    },
    verifyGSTIN: async function (req, res) {
        try {
            var obj = req.query;
            let mInfo = await ManufacturerInfo.findOne(
                { 'gst_details.gstin': obj.gstin });
            if (mInfo !== null) {
                return res.send({ success: false, msz: 'GSTIN already in use', err: null });
            } else {
                // const url = `http://sheet.gstincheck.co.in/check/c8dfb84d4b61cf36b1edba8c75280e65/${obj.gstin}`;
                // const headers = {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                // };
                // await axios.get(url, { headers }).then(response => {
                //     return res.json({
                //         success: true,
                //         msz: response.data,
                //         err: null
                //     });
                // })
                return res.json({
                    success: true,
                    msz: {
                        "flag": true,
                        "message": "GSTIN  found.",
                        "data": {
                            "ntcrbs": "MFT",
                            "adhrVFlag": "Yes",
                            "lgnm": "TUSHAR BISHT",
                            "stj": "Commissionerate - Uttarakhand,Zone - Haridwar,Sector - Rudraprayag (Jurisdictional Office)",
                            "dty": "Regular",
                            "cxdt": "",
                            "gstin": "05FICPB2597C1ZM",
                            "nba": [
                                "Retail Business",
                                "Wholesale Business",
                                "Factory / Manufacturing"
                            ],
                            "ekycVFlag": "Not Applicable",
                            "cmpRt": "NA",
                            "rgdt": "19/02/2022",
                            "ctb": "Proprietorship",
                            "pradr": {
                                "adr": "00, HEET DANG,  GGIC, RUDRAPRAYAG, Rudraprayag, Uttarakhand, 246171",
                                "addr": {
                                    "flno": "",
                                    "lg": "",
                                    "loc": " RUDRAPRAYAG",
                                    "pncd": " 246171",
                                    "bnm": " HEET DANG",
                                    "city": "",
                                    "lt": "",
                                    "stcd": " Uttarakhand",
                                    "bno": "0",
                                    "dst": " Rudraprayag",
                                    "st": "  GGIC"
                                }
                            },
                            "sts": "Active",
                            "tradeNam": "NATURES HERBALK",
                            "isFieldVisitConducted": "No",
                            "adhrVdt": "21/02/2022",
                            "ctj": "Commissionerate - DEHRADUN,Division - DIVISION RISHIKESH,Range - RANGE III RUDRAPRAYAG",
                            "einvoiceStatus": "No",
                            "lstupdt": "",
                            "adadr": [],
                            "ctjCd": "",
                            "errorMsg": null,
                            "stjCd": ""
                        }
                    },
                    err: null
                });
            }
        } catch (err) {
            return res.send({ success: false, msz: 'An Error Occured', err: err });
        }
    }
}

module.exports = functions;