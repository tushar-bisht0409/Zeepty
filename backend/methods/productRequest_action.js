
const ProductRequest = require("../schemas/productRequest");

var functions = {
    postProductRequest: function (req, res) {
        var obj = req.body;
        var productinfo = new ProductRequest({
            product_request_id: obj.product_request_id,
            product_status: obj.product_status,
            product_id: obj.product_id,
            request_type: obj.request_type,
            listing_id: obj.listing_id,
            new_title: obj.new_title,
            new_description: obj.new_description,
            manufacturer_id: obj.manufacturer_id,
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
    } else if(obj.type === "seller_id_unique_product_id"){
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
        ProductRequest.findOneAndUpdate(
            {
                product_request_id: obj.product_request_id
            },
            {
                product_status: obj.product_status,
                request_type: obj.request_type,
                sku_id: obj.sku_id,
                style_code: obj.style_code,
                new_title: obj.new_title,
                new_description: obj.new_description,
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
editMultipleProductRequest: function (req, res) {
    var obj = req.body;
    let successArray = []
    let errArray = [];
    for(let i = 0; i<obj.product_request_Array.length;i++){
        var lObj = obj.product_request_Array[i];
    ProductRequest.findOneAndUpdate(
        {
            product_request_id: lObj.product_request_id
        },
        {
            product_status: lObj.product_status,
            request_type: lObj.request_type,
            sku_id: lObj.sku_id,
            style_code: lObj.style_code,
            new_title: lObj.new_title,
            new_description: lObj.new_description,
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