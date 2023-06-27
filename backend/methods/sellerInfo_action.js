const SellerInfo = require("../schemas/sellerInfo");
const Product = require("../schemas/product");
const Rating = require("../schemas/review");
const Payment = require("../schemas/payment");
const Order = require("../schemas/order");

var functions = {
    postSellerInfo: function (req, res) {
        var obj = req.body;
        var maninfo = new SellerInfo({
            seller_id: obj.seller_id,
            name: obj.name,
            phone: obj.phone,
            profile_image: obj.profile_image,
            cover_image: obj.cover_image,
            email: obj.email,
            wishlist: [],
            user_name: obj.user_name,
            display_name: obj.display_name,
            store_name: obj.store_name,
            store_url: "",
            accounts: obj.accounts,
            domains: obj.domains,
            gender: obj.gender,
            fav_categories: obj.fav_categories
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
    getSellerInfo: function (req, res) {
        var obj = req.query;
        SellerInfo.findOne({
            seller_id: obj.seller_id
        }, function (err, sinfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong" });
            }
            if (!sinfo) {
                return res.send({ success: true, msz: "No SellerInfo Found", isNew: true });
            }
            else {
                return res.send({ success: true, msz: sinfo, isNew: false });
            }
        });
    },
    saveStoreInfo: function (req, res) {
        var obj = req.body;
        SellerInfo.findOneAndUpdate(
            {
                seller_id: obj.seller_id
            },
            {
                profile_image: obj.profile_image,
                display_name: obj.display_name,
                user_name: obj.user_name,
                name: obj.name,
                fav_categories: obj.fav_categories
            },
            function (err, uInfo) {
                if (err) {
                    return res.send({ success: false, msz: "Something Went Wrong" });
                } else {
                    return res.send({ success: true, msz: uInfo });
                }
            });
    },
    // launchStore: function(req,res){
    //     var obj = req.body;
    //     Product.insertMany(obj.products, function(err,prd){
    //         if(err) {
    //             return res.json({
    //                 success: false,
    //                 msz: "Failed to Save"
    //             });
    //         }
    //         else {
    //             SellerInfo.findOneAndUpdate(
    //                 {
    //                     seller_id: obj.seller_id
    //                 },
    //                 {
    //                     store_url: obj.store_url
    //                 },
    //                 function(err,uInfo){
    //                     if(err) {
    //                         return res.send({ success: false, msz: "Something Went Wrong" });
    //                     } else {
    //                         return res.send({ success: true, msz: uInfo});
    //                     }
    //                 });
    //         }
    //     })
    // },
    editSellerInfo: function (req, res) {
        var obj = req.body;
        if (obj.type === "name") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
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
        } else if (obj.type === "phone") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
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
            SellerInfo.findOneAndUpdate(
                {
                    manufacturerID: obj.manufacturerID
                },
                {
                    email: obj.email
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "name") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    name: obj.name
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "user_name") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    user_name: obj.user_name
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "store_name") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    store_name: obj.store_name
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "store_url") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    store_url: obj.store_url
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "profileImage") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    profileImage: obj.profileImage
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "coverImage") {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    coverImage: obj.coverImage
                },
                function (err, minfo) {
                    if (err) {
                        return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: minfo });
                    }
                });
        } else if (obj.type === "collections") {
            if (obj.subType === "add") {
                SellerInfo.findOneAndUpdate(
                    { seller_id: obj.seller_id },
                    { $push: { 'collections': obj.collection } },
                    { new: true },
                    function (err, minfo) {
                        if (err) {
                            return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: minfo });
                        }
                    });
            } else if (obj.subType === "delete") {
                SellerInfo.findOneAndUpdate(
                    { seller_id: obj.seller_id },
                    { $pull: { 'collections': { collection_id: obj.collection_id } } },
                    { new: true },
                    function (err, minfo) {
                        if (err) {
                            return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: minfo });
                        }
                    });
            }

        } else if (obj.type === "collectionProducts") {
            if (obj.subType === "add") {
                SellerInfo.findOneAndUpdate(
                    { seller_id: obj.seller_id, 'collections.collection_id': obj.collection_id },
                    { $push: { 'collections.$.products': { $each: obj.products } } },
                    { new: true },
                    function (err, minfo) {
                        if (err) {
                            return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: minfo });
                        }
                    });
            } else if (obj.subType === "delete") {
                SellerInfo.findOneAndUpdate(
                    { seller_id: obj.seller_id, 'collections.collection_id': obj.collection_id },
                    { $pull: { 'collections.$.products': { $in: obj.products } } },
                    { new: true },
                    function (err, minfo) {
                        if (err) {
                            return res.send({ err: err, success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: minfo });
                        }
                    });
            }

        } else if (obj.type === "delete") {
            if (obj.subType === "wishlist") {
                SellerInfo.findOneAndUpdate(
                    {
                        seller_id: obj.seller_id
                    },
                    {
                        $pull: {
                            "wishlist": { wishlist_id: obj.wishlist_id }
                        }
                    },
                    function (err, uInfo) {
                        if (err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo });
                        }
                    });
            }
            if (obj.subType === "accounts") {
                SellerInfo.findOneAndUpdate(
                    {
                        seller_id: obj.seller_id
                    },
                    {
                        $pull: {
                            "accounts": obj.accounts,
                        }
                    },
                    function (err, uInfo) {
                        if (err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo });
                        }
                    });
            }
        } else if (obj.type === "add") {
            if (obj.subType === "wishlist") {
                SellerInfo.findOneAndUpdate(
                    {
                        seller_id: obj.seller_id
                    },
                    {
                        $push: {
                            "wishlist": obj.wishlistObj,
                        }
                    },
                    function (err, uInfo) {
                        if (err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo });
                        }
                    });
            } else if (obj.subType === "accounts") {
                SellerInfo.findOneAndUpdate(
                    {
                        seller_id: obj.seller_id
                    },
                    {
                        $push: {
                            "accounts": obj.accounts,
                        }
                    },
                    function (err, uInfo) {
                        if (err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo });
                        }
                    });
            }
        } else {
            return res.send({ success: false, msz: "Wrong Data Passed" });
        }
    },
    getStoreInformation: function (req, res) {
        var obj = req.query;
        SellerInfo.findOne({
            seller_id: obj.seller_id
        }, function (err, sinfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong" });
            }
            if (!sinfo) {
                return res.send({ success: true, msz: "No SellerInfo Found", isNew: true });
            }
            else {
                Product.distinct(
                    "product_id",
                    { seller_id: obj.seller_id },
                    function (err, pinfo) {
                        if (err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            Rating.aggregate([
                                {
                                    $match: { product_id: { $in: pinfo } }
                                },
                                {
                                    $group: {
                                        _id: '$product_id',
                                        average_rating: { $avg: '$rating' },
                                        num_rating: { $sum: 1 },
                                    },
                                },
                                {
                                    $project: {
                                        _id: 0,
                                        product_id: '$_id',
                                        average_rating: 1,
                                        num_rating: 1,
                                    },
                                },
                            ], function (err, rinfo) {
                                if (err) {
                                    return res.send({ success: false, msz: "Something Went Wrong" });
                                } else {
                                    return res.send({ success: true, msz: { seller_info: sinfo, products: pinfo, ratings: rinfo } });
                                }
                            })
                        }
                    })
            }
        });
    },
    handleFollowers: function (req, res) {
        var obj = req.body;
        if (obj.type == 'add') {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    $push: {
                        "followers": obj.customer_id,
                    }
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        SellerInfo.findOneAndUpdate(
                            {
                                seller_id: obj.customer_id
                            },
                            {
                                $push: {
                                    "following": obj.seller_id,
                                }
                            },
                            function (err, sInfo) {
                                if (err) {
                                    return res.send({ success: false, msz: "Something Went Wrong" });
                                } else {
                                    return res.send({ success: true, msz: sInfo });
                                }
                            });
                    }
                });

        } else {
            SellerInfo.findOneAndUpdate(
                {
                    seller_id: obj.seller_id
                },
                {
                    $pull: {
                        "followers": obj.customer_id,
                    }
                },
                function (err, uInfo) {
                    if (err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        SellerInfo.findOneAndUpdate(
                            {
                                seller_id: obj.customer_id
                            },
                            {
                                $pull: {
                                    "following": obj.seller_id,
                                }
                            },
                            function (err, sInfo) {
                                if (err) {
                                    return res.send({ success: false, msz: "Something Went Wrong" });
                                } else {
                                    return res.send({ success: true, msz: sInfo });
                                }
                            });
                    }
                });
        }
    },

    checkIsStoreNameUnique: function (req, res) {
        const obj = req.query;
        SellerInfo.findOne({
            user_name: obj.user_name
        }, function (err, minfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong", err: err });
            }
            if (!minfo) {
                return res.send({ success: true, msz: "User Name Is Unique", err: null });
            }
            else {
                if (minfo.length === 0) {
                    return res.send({ success: true, msz: "User Name Is Unique", err: null });
                }
                else {
                    return res.send({ success: false, msz: 'User Name Already Exist', err: null });
                }
            }
        });
    },

    getInsightsPageData: function (req, res) {
        const obj = req.query;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const startOfWeek = new Date();
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        startOfMonth.setHours(0, 0, 0, 0);

        Payment.aggregate([
            {
                $match: { seller_id: obj.seller_id }
              },
              {
                $group: {
                  _id: null,
                  today: {
                    $sum: {
                      $cond: [
                        { $and: [
                            { $gte: ["$createdAt", today] },
                            { $lt: ["$createdAt", tomorrow] }
                          ] },
                        1,
                        0
                      ]
                    }
                  },
                  todayDocuments: {
                    $push: {
                      $cond: [
                        { $gte: ["$createdAt", today] },
                        "$$ROOT",
                        null
                      ]
                    }
                  },
                  thisWeek: {
                    $sum: {
                      $cond: [
                        { $gte: ["$createdAt", startOfWeek] },
                        1,
                        0
                      ]
                    }
                  },
                  thisWeekDocuments: {
                    $push: {
                      $cond: [
                        { $gte: ["$createdAt", startOfWeek] },
                        "$$ROOT",
                        null
                      ]
                    }
                  },
                  thisMonth: {
                    $sum: {
                      $cond: [
                        { $gte: ["$createdAt", startOfMonth] },
                        1,
                        0
                      ]
                    }
                  },
                  thisMonthDocuments: {
                    $push: {
                      $cond: [
                        { $gte: ["$createdAt", startOfMonth] },
                        "$$ROOT",
                        null
                      ]
                    }
                  },
                  all: { $sum: 1 },
                  allDocuments: { $push: "$$ROOT" }
                }
              }
            ]).then((pay_result) => {
                Order.aggregate([
                    {
                        $match: { seller_id: obj.seller_id, order_status: "Pending"}
                      },
                      {
                        $group: {
                          _id: null,
                          today: {
                            $sum: {
                              $cond: [
                                { $and: [
                                    { $gte: ["$createdAt", today] },
                                    { $lt: ["$createdAt", tomorrow] }
                                  ] },
                                1,
                                0
                              ]
                            }
                          },
                          todayDocuments: {
                            $push: {
                              $cond: [
                                { $gte: ["$createdAt", today] },
                                "$$ROOT",
                                null
                              ]
                            }
                          },
                          thisWeek: {
                            $sum: {
                              $cond: [
                                { $gte: ["$createdAt", startOfWeek] },
                                1,
                                0
                              ]
                            }
                          },
                          thisWeekDocuments: {
                            $push: {
                              $cond: [
                                { $gte: ["$createdAt", startOfWeek] },
                                "$$ROOT",
                                null
                              ]
                            }
                          },
                          thisMonth: {
                            $sum: {
                              $cond: [
                                { $gte: ["$createdAt", startOfMonth] },
                                1,
                                0
                              ]
                            }
                          },
                          thisMonthDocuments: {
                            $push: {
                              $cond: [
                                { $gte: ["$createdAt", startOfMonth] },
                                "$$ROOT",
                                null
                              ]
                            }
                          },
                          all: { $sum: 1 },
                          allDocuments: { $push: "$$ROOT" }
                        }
                      }
                    ]).then((order_result) => {
                    return res.send({ success: true, payments: pay_result, orders: order_result,  err: null});
                  })
                  .catch((error) => {
                    return res.send({ success: false, err: error});
                  });
          })
          .catch((error) => {
            return res.send({ success: false, err: error});
          });

    }


}

module.exports = functions;