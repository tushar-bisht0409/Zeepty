
const CustomerInfo = require("../schemas/customerInfo");

var functions = {
    postCustomerInfo: function (req, res) {
        var obj = req.body;
        var userinfo = new CustomerInfo({
            customer_id: obj.customer_id,
            name: obj.name,
            phone: obj.phone,
            email: obj.email,
            profile_url: obj.profile_url,
            selected_address_id: "",
            wishlist: obj.wishlist,
            cart: obj.cart
        });
        userinfo.save(function (err, uinfo) {
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
    getCustomerInfo: function (req, res) {
        var obj = req.query;
        CustomerInfo.findOne({
            customer_id: obj.customer_id
        }, function (err, userinfo) {
            if (err) {
                return res.send({ success: false, msz: "Something Went Wrong" });
            }
            if (!userinfo) {
                return res.send({ success: false, msz: "No CustomerInfo Found" });
            }
            else {
                if (userinfo.length === 0) {
                    return res.send({ success: false, msz: "No CustomerInfo Found" });
                }
                else {
                    return res.send({ success: true, msz: userinfo });
                }
            }
        });
    },
    editCustomerInfo: function (req, res) {
        var obj = req.body;
        if(obj.type === "name"){
            CustomerInfo.findOneAndUpdate(
                {
                    customer_id: obj.customer_id
                },
                {
                    name: obj.name
                },
                function(err,uInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo});
                    }
                });
        } else if(obj.type === "phone") {
            CustomerInfo.findOneAndUpdate(
                {
                    customer_id: obj.customer_id
                },
                {
                    phone: obj.phone
                },
                function(err,uInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo});
                    }
                });
        } else if(obj.type === "email") {
            CustomerInfo.findOneAndUpdate(
                {
                    customer_id: obj.customer_id
                },
                {
                    email: obj.email
                },
                function(err,uInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo});
                    }
                });
        } else if(obj.type === "selectedAddressID") {
            CustomerInfo.findOneAndUpdate(
                {
                    customer_id: obj.customer_id
                },
                {
                    selected_address_id: obj.selected_address_id
                },
                function(err,uInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo});
                    }
                });
        } else if(obj.type === "imageUrl") {
            CustomerInfo.findOneAndUpdate(
                {
                    customer_id: obj.customer_id
                },
                {
                    profile_url: obj.profile_url
                },
                function(err,uInfo){
                    if(err) {
                        return res.send({ success: false, msz: "Something Went Wrong" });
                    } else {
                        return res.send({ success: true, msz: uInfo});
                    }
                });
        } else if(obj.type === "add"){
            if(obj.subType === "wishlist"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "wishlist": obj.productObj,
                        }
                    },
                    function(err,uInfo){
                        
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "cart"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "cart": obj.product,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "orders") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "orders": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "cancelled"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "cancelled": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "returns") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "returns": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "bought") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "bought": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "addresses") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $push: {
                            "addresses": obj.address,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else{
                return res.send({ success: false, msz: "No SubType Selected" });
            }
        } else if(obj.type === "delete"){
            if(obj.subType === "wishlist"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "wishlist": { wishlist_id: obj.wishlist_id }
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "cart"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "cart": obj.product,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "orders") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "orders": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "cancelled"){
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "cancelled": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "returns") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "returns": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "bought") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "bought": obj.product_id,
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else if(obj.subType === "addresses") {
                CustomerInfo.findOneAndUpdate(
                    {
                        customer_id: obj.customer_id
                    },
                    {
                        $pull: {
                            "addresses": { address_id: obj.address_id },
                        }
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.send({ success: false, msz: "Something Went Wrong" });
                        } else {
                            return res.send({ success: true, msz: uInfo});
                        }
                    });
            } else{
                return res.send({ success: false, msz: "No SubType Selected" });
            }
        }
    },
    addCartAndWishlistData: function(req,res) {
        const obj = req.body;
        CustomerInfo.findOne(
            {
                customer_id: obj.customer_id
            }, function(err,cInfo){
                if(err){
                    return res.send({ success: false, msz: "Something Went Wrong", err: err });
                } else {
                    
                    const mergedCart = [...cInfo.cart, ...obj.cart];
                    const mergedWishlist = [...cInfo.wishlist, ...obj.wishlist];

                    const finalCart = mergedCart.reduce((acc, obje) => {
                        const { product_id, sku_id, style_code } = obje;
                        const isDuplicate = acc.some(item => item.product_id === product_id && item.sku_id === sku_id && item.style_code === style_code);
                        if (!isDuplicate) {
                          acc.push(obje);
                        }
                        return acc;
                      }, []);

                      const finalWishlist = mergedWishlist.reduce((acc, obje) => {
                        const { product_id, style_code } = obje;
                        const isDuplicate = acc.some(item => item.product_id === product_id && item.style_code === style_code);
                        if (!isDuplicate) {
                          acc.push(obje);
                        }
                        return acc;
                      }, []);

                      console.log("C: ",finalCart,"\n","W: ",finalWishlist)

                      CustomerInfo.findOneAndUpdate(
                        {
                            customer_id: obj.customer_id
                        },
                        {
                            cart: finalCart,
                            wishlist: finalWishlist
                        },
                        function(err,uInfo){
                            if(err) {
                                return res.send({ success: false, msz: "Something Went Wrong" });
                            } else {
                                return res.send({ success: true, msz: uInfo});
                            }
                        });

                }
            })
        }
}

module.exports = functions;