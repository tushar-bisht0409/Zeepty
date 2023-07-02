
const { elasticClient } = require("../config/elastic");
const Listing = require("../schemas/listing");
const ListingRequest = require("../schemas/listingRequest");
const { editListingElastic } = require("./Elastic_Cloud/ES_listing_action");
const { saveInBulkElastic } = require("./Elastic_Cloud/ES_post_action");

const { v4: uuidv4 } = require('uuid');

function flatTheListing (obj) {
    let listingInfo = {
        listing_id: obj.listing_id,
        manufacturer_id: obj.manufacturer_id,
        active: true,
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
        inventory: obj.product_size.inventory
    }

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

      return { ...listingInfo, ...pDetails, ...oDetails };
}


var functions = {
    postListing: function (req, res) {
        var obj = req.body;
        var listinginfo = new Listing({
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

    postListingInMongoAndElastic: async function (req, res) {
        var obj = req.body;
        var listinginfo = new Listing({
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
        });
        listinginfo.save(async function (err, uinfo) {
            if (err) {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: err
                });
            }
            else {
                // let listingInfo = {
                //     listing_id: obj.listing_id,
                //     manufacturer_id: obj.manufacturer_id,
                //     active: obj.active,
                //     sku_id: obj.sku_id,
                //     style_code: obj.style_code,
                //     weight: obj.weight,
                //     brand: obj.brand,
                //     product_name: obj.product_name,
                //     vertical: obj.vertical,
                //     category: obj.category,
                //     sub_category: obj.sub_category,
                //     sub_category2: obj.sub_category2,
                //     price: obj.price,
                //     mrp: obj.mrp,
                //     product_size: obj.product_size,
                // }

                // const pDetails = obj.product_details.reduce((acc, object) => {
                //     const [key, value] = Object.entries(object)[0];
                //     acc[key] = value;
                //     return acc;
                //   }, {});

                //   const oDetails = obj.other_details.reduce((acc, object) => {
                //     const [key, value] = Object.entries(object)[0];
                //     acc[key] = value;
                //     return acc;
                //   }, {});

                //   const esListingInfo = { ...listingInfo, ...pDetails, ...oDetails };

                const esListingInfo = flatTheListing(obj);

                  try {
                    const result = await elasticClient.index({
                      index: "listing",
                      body: esListingInfo,
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

    acceptListingRequest: function (req,res) {
        const obj = req.body;
        ListingRequest.find({
            listing_id: obj.listing_id
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
                            active: true,
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
                        const esListingInfo = flatTheListing(newListing);
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

    searchListing: function (req, res) {
        var obj = req.query;
        Listing.find({
            product_name: { $regex: obj.keyword }
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err });
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Listing Found', err: null });
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Listing Found', err: null });
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null });
                }
            }
        });
    },
    getListing: function (req, res) {
        var obj = req.query;
        if (obj.type === "manufacturer_id") {
            Listing.find({
                manufacturer_id: obj.manufacturer_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Listing Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Listing Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "listingSKU") {
            Listing.findOne({
                listing_id: obj.listing_id,
                sku_id: obj.sku_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'No Listing Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Listing Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else if (obj.type === "listingSKUStyle") {
            Listing.findOne({
                listing_id: obj.listing_id,
                sku_id: obj.sku_id,
                style_code: obj.style_code
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'No Listing Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Listing Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        } else {
            Listing.find({
                listing_id: obj.listing_id
            }, function (err, pinfo) {
                if (err) {
                    return res.send({ success: false, msz: 'An Error Occured', err: err });
                }
                else if (!pinfo) {
                    return res.send({ success: false, msz: 'Not Listing Found', err: null });
                }
                else {
                    if (pinfo.length === 0) {
                        return res.send({ success: false, msz: 'No Listing Found', err: null });
                    }
                    else {
                        return res.send({ success: true, msz: pinfo, err: null });
                    }
                }
            });
        }
    },
    editListing: function (req, res) {
        var obj = req.body;
        var err;
        if (obj.type === "mrp") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    mrp: obj.mrp
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo });
                    }
                });
        } else if (obj.type === "price") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    price: obj.price,
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo });
                    }
                });
        } else if (obj.type === "active") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    active: obj.active,
                    product_size: obj.product_size
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo });
                    }
                });
        } else if (obj.type === "inventory") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    product_size: obj.product_size
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: pInfo });
                    }
                });
        }
    },

    editListingES: function (req, res) {
        var obj = req.body;
        var err;
        if (obj.type === "price") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    price: obj.price
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        // return res.send({ success: true, msz: pInfo});
                        editListingElastic(req, res);
                    }
                });
        } else if (obj.type === "active") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    active: obj.active,
                    product_size: obj.product_size
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        editListingElastic(req, res);
                    }
                });
        } else if (obj.type === "inventory") {
            Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id,
                    sku_id: obj.sku_id,
                    style_code: obj.style_code,
                },
                {
                    product_size: obj.product_size
                },
                function (err, pInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        editListingElastic(req, res);
                    }
                });
    }
},

    getListingColorAndSizeInformation: async function(req,res){
        const obj = req.query;

        Listing.find(
            {listing_id: obj.listing_id},
            function(err, lInfo) {
                if(err) {
                    return res.send({success: false, err: err, msz: "An Error Occurred" })
                } else {
                    //[ { style_code , sku_id , color , size } ]
                    let result_array = [];
                    function getColor(arr) {
                        let ind = arr.findIndex(item =>Object.keys(item)[0] === "color");
                        if(ind === -1) {
                            return "";
                        } else {
                            return arr[ind]['color'];
                        }
                    }
                    for(let i = 0; i< lInfo.length; i++) {
                        let newObj = {
                            style_code: lInfo[i].style_code,
                            sku_id: lInfo[i].sku_id,
                            size: lInfo[i].product_size.size,
                            color: getColor(lInfo[i].product_details)
                        }
                        result_array.push(newObj)
                    }
                    return res.send({ success: true, msz: result_array, listings: lInfo });
                }
            }
        )

    } ,
    countManagement: async function (type, subType, listing_id, rating) {
        var obj = req.body;
        var cou = 1;
        var rat = obj.rating;
        if (type === "delete") {
            cou = -1;
            if (rat !== 0) {
                rat = - obj.rating;
            }
        }
        if (subType === "soldCount") {
            await Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id
                },
                {
                    $inc: { soldCount: cou }
                },
                function (err, rInfo) {
                    if (err) {
                        return { success: false, msz: "Something Went Wrong" };
                    } else {
                        return { success: true, msz: rInfo };
                    }
                });
        } else if (subType === "reviewCount") {
            await Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id
                },
                {
                    $inc: { reviewCount: cou }
                },
                function (err, rInfo) {
                    if (err) {
                        return { success: false, msz: "Something Went Wrong" };
                    } else {
                        return { success: true, msz: rInfo };
                    }
                });
        } else if (subType === "rateCount") {
            await Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id
                },
                {
                    $inc: { rateCount: cou }
                },
                async function (err, uInfo) {
                    if (err) {
                        return { success: false, msz: "Something Went Wrong", err: err };
                    } else {
                        await Listing.findOneAndUpdate(
                            {
                                listing_id: obj.listing_id
                            },
                            {
                                $inc: { ratingTotal: rat }
                            },
                            function (err, rInfo) {
                                if (err) {
                                    return { success: false, msz: "Something Went Wrong" };
                                } else {
                                    return { success: true, msz: rInfo };
                                }
                            });
                    }
                });
        } else if (subType === "returnCount") {
            await Listing.findOneAndUpdate(
                {
                    listing_id: obj.listing_id
                },
                {
                    $inc: { returnCount: cou }
                },
                function (err, rInfo) {
                    if (err) {
                        return { success: false, msz: "Something Went Wrong" };
                    } else {
                        return { success: true, msz: rInfo };
                    }
                });
        }
    },
    getSkuAndStyleIds: function (req, res) {
        var obj = req.query;
        Listing.find({
            manufacturer_id: obj.manufacturer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err });
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Listing Found', err: null });
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Listing Found', err: null });
                }
                else {

                    let sku_ids = [];
                    let stylecodes = [];
                    let i;
                    for (i = 0; i < pinfo.length; i++) {
                        sku_ids.push(pinfo[i].sku_id);
                        if (stylecodes.includes(pinfo[i].style_code) === false) {
                            stylecodes.push(pinfo[i].style_code);
                        }
                    }
                    ListingRequest.find({
                        manufacturer_id: obj.manufacturer_id
                    }, function (err, lpinfo) {
                        if (err) {
                            return res.send({ success: false, msz: 'An Error Occured', err: err });
                        }
                        else if (!lpinfo) {
                            return res.send({ success: false, msz: 'Not Listing Found', err: null });
                        }
                        else {
                            if (lpinfo.length === 0) {
                                return res.send({ success: false, msz: 'Not Listing Found', err: null });
                            }
                            else {
                                for (i = 0; i < lpinfo.length; i++) {
                                    sku_ids.push(lpinfo[i].sku_id);
                                    if (stylecodes.includes(lpinfo[i].style_code) === false) {
                                        stylecodes.push(lpinfo[i].style_code);
                                    }
                                }
                                return res.send({ success: true, msz: { sku_ids: sku_ids, style_codes: stylecodes }, err: null });
                            }
                        }
                    });
                }
            }
        });
    },
    changeActiveStatus: function (req, res) {
        var obj = req.body;
        Listing.updateMany(
            {
                listing_id: obj.listing_idArray,
            },
            {
                active: obj.active
            },
            function (err, oInfo) {
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
                        msz: "Successfully Done"
                    });
                }
            });
    },
    postManyListings: function (req, res) {
        var obj = req.body;
        Listing.insertMany(obj.listings, function (err, pinfo) {
            if (err) {
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

