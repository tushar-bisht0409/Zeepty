
const ListingRequest = require("../schemas/listingRequest");

var functions = {
    postListingRequest: function (req, res) {
        var obj = req.body;
        var listinginfo = new ListingRequest({
            listing_request_id: obj.listing_request_id,
            edit_id: obj.edit_id,
            listing_status: obj.listing_status,
            request_type: obj.request_type,
            listing_id: obj.listing_id,
            manufacturer_id: obj.manufacturer_id,
            edit_id: obj.edit_id,
            sku_id: obj.sku_id,
            style_code: obj.style_code,
            weight: obj.weight,
            media_urls: obj.media_urls,
            brand: obj.brand,
            product_name: obj.product_name,
            vertical: obj.vertical,
            category: obj.category,
            sub_category: obj.sub_category,
            sub_category2: obj.sub_category2,
            price: obj.price,
            mrp: obj.mrp,
            product_size: obj.product_size,
            pickup_address: obj.pickup_address,
            hsn_code: obj.hsn_code,
            gst_percent: obj.gst_percent,
            product_details: obj.product_details,
            other_details: obj.other_details,
        });
        listinginfo.save(function (err, uinfo) {
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


    getListingRequest: async function (req, res) {
        var obj = req.query;
        if(obj.type === "manufacturer_id"){
        ListingRequest.find({
            manufacturer_id: obj.manufacturer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id"){
        ListingRequest.find({
            listing_id: obj.listing_id,
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id_status_type"){
        ListingRequest.find({
            listing_id: obj.listing_id,
            listing_status: obj.listing_status,
            request_type: obj.request_type
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id_type"){
        ListingRequest.find({
            listing_id: obj.listing_id,
            request_type: obj.request_type
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id_edit_id"){
        ListingRequest.find({
            listing_id: obj.listing_id,
            edit_id: obj.edit_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "manufacturer_id_unique_listing_id"){
       await ListingRequest.aggregate([
            { $match: { manufacturer_id: obj.manufacturer_id } },
            { $group: { _id: "$listing_id", doc: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$doc" } }
          ], function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "all_unique_listing_id"){
        await ListingRequest.aggregate([
             { $group: { _id: "$listing_id", doc: { $first: "$$ROOT" } } },
             { $replaceRoot: { newRoot: "$doc" } }
           ], function (err, pinfo) {
             if (err) {
                 return res.send({ success: false, msz: 'An Error Occured', err: err});
             }
             else if (!pinfo) {
                 return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
             }
             else {
                 if (pinfo.length === 0) {
                     return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                 }
                 else {
                     return res.send({ success: true, msz: pinfo, err: null});
                 }
             }
         });
     } else {
        ListingRequest.findOne({
            listing_request_id: obj.listing_request_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ListingRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ListingRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
},
    editListingRequest: function (req, res) {
        var obj = req.body;
            ListingRequest.findOneAndUpdate(
                {
                    listing_request_id: obj.listing_request_id
                },
                {
                    listing_status: obj.listing_status,
                    request_type: obj.request_type,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                    weight: obj.weight,
                    media_urls: obj.media_urls,
                    brand: obj.brand,
                    product_name: obj.product_name,
                    price: obj.price,
                    mrp: obj.mrp,
                    product_size: obj.product_size,
                    pickup_address: obj.pickup_address,
                    hsn_code: obj.hsn_code,
                    gst_percent: obj.gst_percent,
                    product_details: obj.product_details,
                    other_details: obj.other_details,
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
    },
    editMultipleListingRequest: function (req, res) {
        var obj = req.body;
        let successArray = []
        let errArray = [];
        for(let i = 0; i<obj.listing_request_Array.length;i++){
            var lObj = obj.listing_request_Array[i];
        ListingRequest.findOneAndUpdate(
            {
                listing_request_id: lObj.listing_request_id
            },
            {
                listing_status: lObj.listing_status,
                request_type: lObj.request_type,
                sku_id: lObj.sku_id,
                style_code: lObj.style_code,
                weight: lObj.weight,
                media_urls: lObj.media_urls,
                brand: lObj.brand,
                product_name: lObj.product_name,
                price: lObj.price,
                mrp: lObj.mrp,
                product_size: lObj.product_size,
                pickup_address: lObj.pickup_address,
                hsn_code: lObj.hsn_code,
                gst_percent: lObj.gst_percent,
                product_details: lObj.product_details,
                other_details: lObj.other_details,
            },
            function(err,pInfo){
                if(err) {
                    successArray.push(false);
                    errArray.push(err);
                } else {
                    successArray.push(true);
                    errArray.push(null);
                }
            });
        }
            return res.send({ success: successArray, err: errArray});
},
    deleteListingRquest: function(req,res) {
        var obj = req.body;
            ListingRequest.findOneAndDelete(
                {
                    listing_request_id: obj.listing_request_id
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
    },

    deleteMultipleListingRquest: function(req,res) {
        var obj = req.body;
        if(obj.type === "listing_id"){
            ListingRequest.deleteMany(
                {
                    listing_id: obj.listing_ids
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
            } else {
                ListingRequest.deleteMany(
                    {
                        listing_request_id: obj.listing_request_ids
                    },
                    function(err,pInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: pInfo});
                        }
                    });
                } 
    },

    postManyListingRequests: function(req,res){
        var obj = req.body;
        ListingRequest.insertMany(obj.listings, function(err,pinfo){
            if(err) {
                return res.json({
                    success: false,
                    msz: "Failed to Save",
                    err: err
                });
            }
            else {
                return res.json({
                    success: true,
                    msz: "Successfully Saved"
                });
            }
        })
    },
}

module.exports = functions;