const User = require("../schemas/user");
const Customer = require("../schemas/customerInfo")
const Seller = require("../schemas/sellerInfo")
const Manufacturer = require("../schemas/manufacturerInfo")
const jwt = require("jwt-simple");
const config = require("../config/dbconfig");

const accountSid = "AC736fa3b356e47d62b7cd47b8ed2fc704";
const authToken = "5d1fb072e96fb77ceb27e4ca8a78febe";
const verifySid = "VAf2747c231bc667894a2ec024fa666357";
const client = require('twilio')(accountSid, authToken);

var functions = {
    sendOTP: async function (req, res) {
        var obj = req.query;
        try {
            const response = await client.lookups.phoneNumbers("+91" + obj.phone).fetch({ type: ['carrier', 'caller-name'] });
            const { carrier } = response;
            console.log("SDS: ", response)
            if (carrier && carrier.type === 'mobile') {
                await client.verify.v2.services
                    .create({ friendlyName: 'OTP Verify Service- Be Here' }).then((val) => {
                        User.findOne({
                            phone: obj.phone,
                            mode: obj.mode
                        }, async function (err, user) {
                            if (err) {
                                return res.send({
                                    success: false,
                                    msz: "An Error Occurred",
                                    userExist: false
                                });
                            }
                            else if (!user) {
                                await client.verify.v2.services(verifySid)
                                    .verifications
                                    .create({ to: "+91" + obj.phone, channel: 'sms' })
                                    .then(verification => console.log(verification)).catch(() => {
                                        return res.send({
                                            success: false,
                                            msz: "Something Went Wrong",
                                            userExist: false,
                                            err: e
                                        });
                                    });
                                return res.send({
                                    success: true,
                                    msz: "OTP Sent Successfully",
                                    userExist: false
                                });
                            }
                            else {
                                await client.verify.v2.services(verifySid)
                                    .verifications
                                    .create({ to: "+91" + obj.phone, channel: 'sms' })
                                    .then(verification => console.log(verification.status)).catch((e) => {
                                        return res.send({
                                            success: false,
                                            msz: "Something Went Wrong",
                                            userExist: false,
                                            err: e
                                        });
                                    });
                                return res.send({
                                    success: true,
                                    msz: "OTP Sent Successfully",
                                    userExist: true
                                });;
                            }
                        });
                    }).catch((error) => {
                        return res.send({
                            success: false,
                            msz: "An Error Occurred",
                            userExist: false,
                            error: error
                        });
                    });
            } else {
                return res.send({
                    success: false,
                    msz: "Phone Number is Invalid",
                    userExist: false,
                });
            }
        } catch (e) {
            return res.send({
                success: false,
                msz: "An Error Occurred",
                userExist: false,
                error: e
            });
        }

    },
    verifyOTP: function (req, res) {
        var obj = req.query;
        client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: "+91" + obj.phone, code: obj.otp })
            .then((verification_check) => {
                console.log(verification_check.status);
                if (verification_check.status === "approved") {
                    return res.json({
                        success: true,
                        msz: "OTP Verified",
                        userID: newUser._id
                    });
                } else {
                    return res.json({
                        success: false,
                        msz: "Wrong OTP",
                    });
                }
            });
    },
    authenticationOTP: function (req, res) {
        var obj = req.body;
        try {
            if (obj.authMode === "Signup") {
                client.verify.v2
                    .services(verifySid)
                    .verificationChecks.create({ to: "+91" + obj.phone, code: obj.otp })
                    .then((verification_check) => {
                        if (verification_check.status === "approved") {
                            var user_info = new User({
                                phone: obj.phone,
                                password: obj.password,
                                email: obj.email,
                                mode: obj.mode,
                            });
                            user_info.save(function (err, newUser) {
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
                                        msz: "Successfully Saved",
                                        userID: newUser._id
                                    });
                                }
                            });
                        }
                        else {
                            return res.send({
                                success: false,
                                msz: "Wrong OTP",
                            });
                        }
                    });

            } else if (obj.authMode === "Login") {
                client.verify.v2
                    .services(verifySid)
                    .verificationChecks.create({ to: "+91" + obj.phone, code: obj.otp })
                    .then((verification_check) => {
                        console.log(verification_check.status);
                        if (verification_check.status === "approved") {
                            User.findOne({
                                phone: obj.phone,
                                mode: obj.mode,
                            }, function (err, user) {
                                if (err) {
                                    return res.json({
                                        success: false,
                                        msz: "An Error Occurred"
                                    });
                                };
                                if (!user) {
                                    res.send({ success: false, msz: "Authentication Failed,User Not Found" });
                                }
                                else {
                                    var token = jwt.encode(user, config.secret);
                                    return res.send({
                                        success: true,
                                        token: token,
                                        userID: user._id
                                    });
                                }
                            });
                        }
                        else {
                            return res.send({
                                success: false,
                                msz: "Wrong OTP",
                            });
                        }
                    });
            }
        } catch (e) {
            return res.send({
                success: false,
                msz: "Something Went Wrong",
                err: e
            });
        }
    },
    addNew: function (req, res) {
        var obj = req.body;
        client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: "+91" + obj.phone, code: obj.otp })
            .then((verification_check) => {
                console.log(verification_check.status);
                if (verification_check.status === "approved") {
                    var newUser = User({
                        phone: obj.phone,
                        password: obj.password,
                        mode: obj.mode,
                    });
                    newUser.save(function (err, newUser) {
                        if (err) {
                            return res.json({
                                success: false,
                                msz: "An Error Occurred"
                            });
                        }
                        else {
                            var userMode = req.body.mode;
                            if (userMode == "customer") {
                                var newCustomer = Customer({
                                    userID: newUser._id,
                                    phone: obj.phone,
                                    name: obj.name,
                                })
                                newCustomer.save(function (err, newCustomer) {
                                    if (err) {
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Save"
                                        });
                                    }
                                    else {
                                        return res.json({
                                            success: true,
                                            msz: "Successfully Saved",
                                            userID: newUser._id
                                        });
                                    }
                                });
                            } else if (userMode == "Influencer") {
                                var newSeller = Seller({
                                    seller_id: newUser._id,
                                    phone: obj.phone,
                                    mode: 'Influencer',
                                    displayName: obj.displayName,
                                    userName: obj.userName,
                                    email: obj.email,
                                    gender: obj.gender,
                                    accounts: obj.accounts,
                                    domains: obj.domains
                                })
                                newSeller.save(function (err, newSeller) {
                                    if (err) {
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Save"
                                        });
                                    }
                                    else {
                                        return res.json({
                                            success: true,
                                            msz: "Successfully Saved",
                                            userID: newUser._id
                                        });
                                    }
                                });
                            } else if (userMode == "Manufacturer") {
                                var newManufacturer = Manufacturer({
                                    manufacturer_id: newUser._id,
                                    phone: obj.phone,
                                    name: obj.name,
                                })
                                newManufacturer.save(function (err, newManufacturer) {
                                    if (err) {
                                        return res.json({
                                            success: false,
                                            msz: "Failed to Save"
                                        });
                                    }
                                    else {
                                        return res.json({
                                            success: true,
                                            msz: "Successfully Saved",
                                            userID: newUser._id
                                        });
                                    }
                                });
                            }

                        }
                    });
                } else {
                    return res.json({
                        success: false,
                        msz: "OTP Error",
                    });
                }
            })
    },
    verifyPassword: function (req, res) {
        var obj = req.query;
        User.findOne(
            {
                $and: [
                    { $or: [{ email: obj.email }, { phone: obj.phone }] },
                    { mode: obj.mode },
                ]
            }, function (err, user) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occurred"
                    });
                };
                if (!user) {
                    return res.send({ success: false, msz: "Authentication Failed,User Not Found" });
                }
                else {
                    user.comparePassword(obj.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(user, config.secret);
                            return res.json({
                                success: true,
                                token: token,
                                userID: user._id
                            });
                        }
                        else {
                            return res.send({
                                success: false,
                                msz: "Authentication Failed,Wrong Password"
                            });
                        }
                    });
                }
            });
    },

    isValidUser: function (req, res) {
        var obj = req.query;
        User.findOne(
            { _id: obj._id, mode: obj.mode },
            function (err, doc) {
                if (err) {
                    return res.json({
                        success: false,
                        msz: "An Error Occurred",
                    });
                } else {
                    return res.json({
                        success: true,
                        msz: "User Is Valid",
                        user_info: doc
                    });
                }
            }
        )
    },

    changePassword: function (req, res) {
        User.findOne({ phone: req.body.phone, mode: req.body.mode, }, function (err, user) {
            if (err) {
                return res.json({
                    success: false,
                    msz: "Failed to Change Password",
                });
            } else {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        user.password = req.body.new_password;
                        user.save(function (err, newUser) {
                            if (err) {
                                return res.json({
                                    success: false,
                                    msz: "Failed to Change Password",
                                    err: err
                                });
                            }
                            else {
                                return res.json({
                                    success: true,
                                    msz: "Password Successfully Changed",
                                });
                            }
                        });
                    }
                    else {
                        return res.send({
                            success: false,
                            msz: "Wrong Password"
                        });
                    }
                });
            }

        });
    }
};

module.exports = functions;
