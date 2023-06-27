const Looks = require("../schemas/looks");

var functions = {
    postLooks: function (req, res) {
        var obj = req.body;
        var looksinfo = new Looks({
            looks_id: obj.looks_id,
            seller_id: obj.seller_id,
            media_url: obj.media_url,
            caption: obj.caption,
            products: obj.products
        });
        looksinfo.save(function (err, uinfo) {
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
    getLooks: function (req, res) {
        var obj = req.query;
        if(obj.type === "seller_id"){
        Looks.find({
            seller_id: obj.seller_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Looks Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Looks Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else {
        Looks.findOne({
            looks_id: obj.looks_id
    }, function (err, pinfo) {
        if (err) {
            return res.send({ success: false, msz: 'An Error Occured', err: err});
        }
        else if (!pinfo) {
            return res.send({ success: false, msz: 'Not Looks Found', err: null});
        }
        else {
            if (pinfo.length === 0) {
                return res.send({ success: false, msz: 'No Looks Found', err: null});
            }
            else {
                return res.send({ success: true, msz: pinfo, err: null});
            }
        }
    });
    }
},
}

module.exports = functions;