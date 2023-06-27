
const ProductRequest = require("../schemas/productRequest");

var functions = {
    postProductRequest: function (req, res) {
        var obj = req.body;
        var productinfo = new ProductRequest({
            productRequestID: obj.productRequestID,
            productStatus: obj.productStatus,
            requestType: obj.requestType,
            productID: obj.productID,
            SKUID: obj.SKUID,
            sellerID: obj.sellerID,
            listingID: obj.listingID,
            brand: obj.brand,
            title: obj.title,
            description: obj.description,
            sImageUrls: obj.sImageUrls,
            lableImageUrls: obj.lableImageUrls,
            sellingPrice: obj.sellingPrice,
            mrp: obj.mrp,
            imageUrls: obj.imageUrls,
            specification: obj.specification,
            gender: obj.gender,
            vertical: obj.vertical,
            category: obj.category,
            subCategory: obj.subCategory,
            variants: obj.variants,
        });
        productinfo.save(function (err, uinfo) {
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
    searchProductRequest: function(req, res) {
        var obj = req.query;
        ProductRequest.find({
            title: { $regex: obj.keyword }
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    },
    getProductRequest: async function (req, res) {
        var obj = req.query;
        if(obj.type === "seller_id"){
        ProductRequest.find({
            seller_id: obj.seller_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id"){
        ProductRequest.find({
            listing_id: obj.listing_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "manufacturer_id_unique_listing_id"){
       await ProductRequest.aggregate([
            { $match: { seller_id: obj.seller_id } },
            { $group: { _id: "$product_id", doc: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$doc" } }
          ], function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "all_unique_product_id"){
        await ProductRequest.aggregate([
             { $group: { _id: "$product_id", doc: { $first: "$$ROOT" } } },
             { $replaceRoot: { newRoot: "$doc" } }
           ], function (err, pinfo) {
             if (err) {
                 return res.send({ success: false, msz: 'An Error Occured', err: err});
             }
             else if (!pinfo) {
                 return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
             }
             else {
                 if (pinfo.length === 0) {
                     return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                 }
                 else {
                     return res.send({ success: true, msz: pinfo, err: null});
                 }
             }
         });
     } else {
        ProductRequest.findOne({
            product_request_id: obj.product_request_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not ProductRequest Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No ProductRequest Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
},
    editProductRequest: function (req, res) {
        var obj = req.body;
        var err;
        if(obj.type === "brand"){
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    brand: obj.brand
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "title") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    title: obj.title
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "description") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    description: obj.description
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "category") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    category: obj.category
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "subCategory") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    subCategory: obj.subCategory
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "mrp") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    mrp: obj.mrp
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "price") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    price: obj.price
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "stockCount") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    stockCount: obj.stockCount
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "pickupAddress") {
            ProductRequest.findOneAndUpdate(
                {
                    productRequestID: obj.productRequestID
                },
                {
                    pickupAddress: obj.pickupAddress
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "add"){
            if(obj.subType === "variants"){
                ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $push: {
                            "variants": obj.variants,
                        }
                    },
                    function(err,pInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: pInfo});
                        }
                    });
            } else{
                return res.send({ success: false, msz: "No Subtype Selected" });
            }
        } else if(obj.type === "delete"){
            if(obj.subType === "variants"){
                ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $pull: {
                            "variants": obj.variants,
                        }
                    },
                    function(err,pInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: pInfo});
                        }
                    });
            } else{
                return res.send({ success: false, msz: "No Subtype Selected" });
            }
        }
    },
    countManagement: async function(type,subType,productRequestID,rating) {
        var obj = req.body;
        var cou = 1;
        var rat = obj.rating;
        if(type === "delete") {
            cou = -1;
            if(rat !== 0) {
                rat = - obj.rating;
            }
        }
            if(subType === "soldCount") {
                await ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $inc: { soldCount: cou}
                    },
                    function(err,rInfo){
                        if(err) {
                            return { success: false, msz: "Something Went Wrong" };
                        } else {
                            return { success: true, msz: rInfo };
                        }
                    });
            } else if(subType === "reviewCount") {
                await ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $inc: { reviewCount: cou}
                    },
                    function(err,rInfo){
                        if(err) {
                            return { success: false, msz: "Something Went Wrong" };
                        } else {
                            return { success: true, msz: rInfo };
                        }
                    });
            } else if(subType === "rateCount") {
                await ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $inc: { rateCount: cou}
                    },
                    async function(err,uInfo){
                        if(err) {
                            return { success: false, msz: "Something Went Wrong", err: err };
                        } else {
                            await ProductRequest.findOneAndUpdate(
                                {
                                    productRequestID: obj.productRequestID
                                },
                                {
                                    $inc: { ratingTotal: rat}
                                },
                                function(err,rInfo){    
                                    if(err) {
                                        return { success: false, msz: "Something Went Wrong" };
                                    } else {
                                        return { success: true, msz: rInfo };
                                    }
                                });
                        }
                    });
            } else if(subType === "returnCount") {
                await ProductRequest.findOneAndUpdate(
                    {
                        productRequestID: obj.productRequestID
                    },
                    {
                        $inc: { returnCount: cou}
                    },
                    function(err,rInfo){
                        if(err) {
                            return { success: false, msz: "Something Went Wrong" };
                        } else {
                            return { success: true, msz: rInfo };
                        }
                    });
            } 
    },
    postManyProductRequests: function(req,res){
        var obj = req.body;
        ProductRequest.insertMany(obj.products, function(err,pinfo){
            if(err) {
                return res.json({
                    success: false,
                    msz: "Failed to Save"
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