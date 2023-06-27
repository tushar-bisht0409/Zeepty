const Listing = require("../schemas/listing");
const ManufacturerInfo = require("../schemas/manufacturerInfo");
const User = require("../schemas/user");
const Order = require("../schemas/order");
const ListingRequest = require("../schemas/listingRequest");


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
            pickup_address: obj.pickup_address,
            return_address: obj.return_address,
            bank_details: obj.bank_details,
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
        if (obj.type === "gst_phone_email") {
            ManufacturerInfo.findOneAndUpdate(
                {
                    manufacturer_id: obj.manufacturer_id
                },
                {
                    phone: obj.phone,
                    email: obj.email,
                    gst_details: obj.gst_details
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
                                        return res.send({ success: false, msz: 'An Error Occured', err: err});
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
    }
}

module.exports = functions;