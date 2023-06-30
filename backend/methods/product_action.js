
const Product = require("../schemas/product");
const ProductRequest = requrie("../schemas/ProductRequest")
const Listing = require("../schemas/listing");
const { elasticClient } = require("../config/elastic");
const { editProductElastic } = require("./Elastic_Cloud/ES_product_action");
const { v4: uuidv4 } = require('uuid');

function flatTheProduct (obj) {
    let productInfo = {
        product_id: obj.product_id,
        seller_id: obj.seller_id,
        listing_id: obj.listing_id,
        manufacturer_id: obj.manufacturer_id,
        active: obj.active,
        sku_id: obj.sku_id,
        style_code: obj.style_code,
        weight: obj.weight,
        brand: obj.brand,
        product_name: obj.product_name,
        vertical: obj.vertical,
        category: obj.category,
        sub_category: obj.sub_category,
        sub_category2: obj.sub_category2,
        price: obj.price,
        mrp: obj.mrp,
        size: obj.product_size.size,
        inventory: obj.product_size.inventory,
        new_title: obj.new_title,
        new_description: obj.new_description,
    };

    const pDetails = obj.product_details.reduce((acc, object) => {
        const [key, value] = Object.entries(object)[0];
        acc[key] = value;
        return acc;
      }, {});

      const oDetails = obj.other_details.reduce((acc, object) => {
        const [key, value] = Object.entries(object)[0];
        acc[key] = value;
        return acc;
      }, {});

      return { ...productInfo, ...pDetails, ...oDetails };
}

var functions = {
    postProduct: function (req, res) {
        var obj = req.body;
        var productinfo = new Product({
            product_id: obj.product_id,
            seller_id: obj.seller_id,
            listing_id: obj.listing_id,
            sku_id: obj.sku_id,
            style_code: obj.style_code,
            manufacturer_id: obj.manufacturer_id,
            active: obj.active,
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
            hsn_code: obj.hsn_code,
            gst_percent: obj.gst_percent,
            product_details: obj.product_details,
            other_details: obj.other_details,
            pickup_address: obj.pickup_address,
            new_title: obj.new_title,
            new_description: obj.new_description,
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
    postProductInMongoAndElastic: async function (req, res) {
        var obj = req.body;
        var productinfo = new Product({
            product_id: obj.product_id,
            seller_id: obj.seller_id,
            listing_id: obj.listing_id,
            manufacturer_id: obj.manufacturer_id,
            active: obj.active,
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
            new_title: obj.new_title,
            new_description: obj.new_description,
        });
        productinfo.save(async function (err, uinfo) {
            if (err) {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: err
                });
            }
            else {
                const esProductInfo = flatTheProduct(obj);

                  try {
                    const result = await elasticClient.index({
                      index: "product",
                      body: esProductInfo,
                    });

                    return res.json({
                        success: true,
                        msz: "Successfully Saved"
                    });
                
                  } catch (error) {
                    return res.json({
                        success: false,
                        msz: "An Error Occured",
                        err: error
                    });
                  }
            }
        });
    },

    postMultipleProductInMongoAndElastic: function (req,res) {
        const obj = req.body;
        const product_ids_obj = {}
        for (let i = 0;i<obj.listing_ids.length;i++){
            product_ids_obj[`${obj.listing_ids[i]}`] = uuidv4();
        }
        Listing.find({
            listing_id: obj.listing_ids
        }, function (err, lrinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err });
            }
            else if (!lrinfo) {
                return res.send({ success: false, msz: 'Not Listing Request Found', err: null });
            }
            else {
                if (lrinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Listing Request Found', err: null });
                }
                else {
                    let allProducts = [];
                    let esAllProducts = [];

                    for(let i = 0; i<lrinfo.length; i++){
                        let newProductID = product_ids_obj[`${lrinfo[i].listing_id}`];
                        let ind = obj.prices.findIndex(oo => oo.listing_id === lrinfo[i].listing_id);
                        let newPrice = obj.prices[ind].price

                        let newProduct = {
                            product_id: newProductID,
                            seller_id: obj.seller_id,
                            listing_id: lrinfo[i].listing_id,
                            sku_id: lrinfo[i].sku_id,
                            style_code: lrinfo[i].style_code,
                            manufacturer_id: lrinfo[i].manufacturer_id,
                            active: lrinfo[i].active,
                            weight: lrinfo[i].weight,
                            media_urls: lrinfo[i].media_urls,
                            brand: lrinfo[i].brand,
                            product_name: lrinfo[i].product_name,
                            vertical: lrinfo[i].vertical,
                            category: lrinfo[i].category,
                            sub_category: lrinfo[i].sub_category,
                            sub_category2: lrinfo[i].sub_category2,
                            price: newPrice,
                            mrp: lrinfo[i].mrp,
                            product_size: lrinfo[i].product_size,
                            hsn_code: lrinfo[i].hsn_code,
                            gst_percent: lrinfo[i].gst_percent,
                            product_details: lrinfo[i].product_details,
                            other_details: lrinfo[i].other_details,
                            pickup_address: lrinfo[i].pickup_address,
                            new_title: lrinfo[i].new_title,
                            new_description: lrinfo[i].new_description,
                        };
                        allProducts.push(newProduct);
                        const eProductInfo = flatTheProduct(allProducts[i]);
                        esAllProducts.push(eProductInfo);
                    }

                    Product.insertMany(allProducts, async function (err, pinfo) {
                        if (err) {
                            return res.json({
                                success: false,
                                msz: "Failed to Save"
                            });
                        }
                        else {
                            try{

                                const operations = esAllProducts.flatMap(doc => [{ index: { _index: 'product' } }, doc])
                    
                                const bulkResponse = await elasticClient.bulk({ refresh: true, operations })
                    
                                const erroredDocuments = []
                    
                                if (bulkResponse.errors) {
                                    bulkResponse.items.forEach((action, i) => {
                                    const operation = Object.keys(action)[0]
                                    if (action[operation].error) {
                                        erroredDocuments.push({
                                        status: action[operation].status,
                                        error: action[operation].error,
                                        operation: operations[i * 2],
                                        document: operations[i * 2 + 1]
                                        })
                                    }
                                    })
                                }              
                                
                                return res.send({
                                    success: true,
                                    msz: 'Successfully Created Index',
                                    err: null,
                                    errDocuments: erroredDocuments
                                });
                    
                            } catch(e){
                                return res.send({
                                    success: false,
                                    msz: 'An Error Occurred',
                                    err: e
                                })
                            }
                        }
                    })


                }
            }
        });
    },

    getProduct: async function (req, res) {
        var obj = req.query;
        if(obj.type === "manufacturer_id"){
        Product.find({
            manufacturer_id: obj.manufacturer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "productSKU"){
        Product.findOne({
            product_id: obj.product_id,
            sku_id: obj.sku_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        })
    } else if(obj.type === "productSKUStyle"){
        Product.findOne({
            product_id: obj.product_id,
            sku_id: obj.sku_id,
            style_code: obj.style_code
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        })
    } else if(obj.type === "productStyle"){
        Product.findOne({
            product_id: obj.product_id,
            style_code: obj.style_code
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        })
    } else if(obj.type === "seller_id"){
        Product.find({
            seller_id: obj.seller_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "sellerListing"){
        Product.findOne({
            seller_id: obj.seller_id,
            listing_id: obj.listing_id,
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'No Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "unique_product_id") {
        await Product.aggregate([
            { $match: { seller_id: obj.seller_id } },
            { $group: { _id: "$product_id", doc: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$doc" } }
          ], function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "unique_productStyle") {
        await Product.aggregate([
            { $match: { seller_id: obj.seller_id } },
            { $group: {
                _id: { product_id: "$product_id", style_code: "$style_code" },
                documents: { $addToSet: "$$ROOT" }
              } }
          ], function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "color_variants") {
        await Product.aggregate([
            { $match: { product_id: obj.product_id }},
            { $group: { _id: "$style_code", doc: { $first: "$$ROOT" } } },
            { $replaceRoot: { newRoot: "$doc" } }
          ], function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else {
        Product.find({
            product_id: obj.product_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Product Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
},
    editProduct: function (req, res) {
        var obj = req.body;
        var err;
        if(obj.type === "brand"){
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
        } else if(obj.type === "sub_category") {
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
                },
                {
                    sub_category: obj.sub_category
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo});
                    }
                });
        } else if(obj.type === "mrp") {
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
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
                Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
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
                Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
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

    acceptProductRequest: function (req,res) {
        const obj = req.body;
        ProductRequest.find({
            product_id: obj.product_id
        }, function (err, lrinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err });
            }
            else if (!lrinfo) {
                return res.send({ success: false, msz: 'Not Product Request Found', err: null });
            }
            else {
                if (lrinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Product Request Found', err: null });
                }
                else {
                    let allListings = [];
                    let esAllListings = [];
                    for(let x = 0; x<lrinfo.length; x++){

                    for(let i = 0; i<lrinfo[x]['product_size'].length; i++){
                        let lsku = lrinfo[x].product_size[i].sku_id;
                        if(lsku === "" || lsku === undefined || lsku === null){
                            lsku = uuidv4();
                        }
                        let newListing = {
                            listing_id: lrinfo[x].listing_id,
                            sku_id: lsku,
                            style_code: lrinfo[x].style_code,
                            manufacturer_id: lrinfo[x].manufacturer_id,
                            active: lrinfo[x].active,
                            weight: lrinfo[x].weight,
                            media_urls: lrinfo[x].media_urls,
                            brand: lrinfo[x].brand,
                            product_name: lrinfo[x].product_name,
                            vertical: lrinfo[x].vertical,
                            category: lrinfo[x].category,
                            sub_category: lrinfo[x].sub_category,
                            sub_category2: lrinfo[x].sub_category2,
                            price: lrinfo[x].price,
                            mrp: lrinfo[x].mrp,
                            product_size: lrinfo[x].product_size[i],
                            inventory: lrinfo[x].product_size[i].inventory,
                            hsn_code: lrinfo[x].hsn_code,
                            gst_percent: lrinfo[x].gst_percent,
                            product_details: lrinfo[x].product_details,
                            other_details: lrinfo[x].other_details,
                            pickup_address: lrinfo[x].pickup_address
                        };
                        allListings.push(newListing);
                        const esListingInfo = flatTheListing(allListings[i]);
                        esAllListings.push(esListingInfo);
                    }
                }

                    Listing.insertMany(allListings, async function (err, pinfo) {
                        if (err) {
                            return res.json({
                                success: false,
                                msz: "Failed to Save"
                            });
                        }
                        else {
                            try{

                                const operations = esAllListings.flatMap(doc => [{ index: { _index: 'listing' } }, doc])
                    
                                const bulkResponse = await elasticClient.bulk({ refresh: true, operations })
                    
                                const erroredDocuments = []
                    
                                if (bulkResponse.errors) {
                                    bulkResponse.items.forEach((action, i) => {
                                    const operation = Object.keys(action)[0]
                                    if (action[operation].error) {
                                        erroredDocuments.push({
                                        status: action[operation].status,
                                        error: action[operation].error,
                                        operation: operations[i * 2],
                                        document: operations[i * 2 + 1]
                                        })
                                    }
                                    })
                                }              
                                
                                ListingRequest.updateMany(
                                    {listing_id: obj.listing_id}, 
                                    {listing_status: "Approved"},
                                    function (err, lrrinfo) {
                                        if(err){
                                            return res.json({
                                                success: false,
                                                msz: "Failed to Save",
                                                err: err
                                            });
                                        } else {
                                            return res.send({
                                                success: true,
                                                msz: 'Successfully Created Index',
                                                err: null,
                                                errDocuments: erroredDocuments
                                            });
                                        }
                                    });
                    
                            } catch(e){
                                return res.send({
                                    success: false,
                                    msz: 'An Error Occurred',
                                    err: e
                                })
                            }
                        }
                    })


                }
            }
        });
    },

    editProductES: function (req, res) {
        var obj = req.body;
        var err;
        if(obj.type === "price"){
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
                },
                {
                    price: obj.price
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        // return res.send({ success: true, msz: pInfo});
                        editProductElastic(req,res);
                    }
                });
        } else if(obj.type === "active") {
            Product.findOneAndUpdate(
                {
                    product_id: obj.product_id
                },
                {
                    active: obj.active
                },
                function(err,pInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        editProductElastic(req,res);
                    }
                });
        }
    },
    countManagement: async function(type,subType,product_id,rating) {
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
                await Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
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
                await Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
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
                await Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
                    },
                    {
                        $inc: { rateCount: cou}
                    },
                    async function(err,uInfo){
                        if(err) {
                            return { success: false, msz: "Something Went Wrong", err: err };
                        } else {
                            await Product.findOneAndUpdate(
                                {
                                    product_id: obj.product_id
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
                await Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
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
    postManyProducts: function(req,res){
        var obj = req.body;
        Product.insertMany(obj.products, function(err,pinfo){
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