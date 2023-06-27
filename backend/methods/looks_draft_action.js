const LooksDraft = require("../schemas/looks_draft");

var functions = {
    postLooksDraft: function (req, res) {
        var obj = req.body;
        var looksinfo = new LooksDraft({
            looks_draft_id: obj.looks_draft_id,
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
    getLooksDraft: function (req, res) {
        var obj = req.query;
        if(obj.type === "seller_id"){
        LooksDraft.find({
            seller_id: obj.seller_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not LooksDraft Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No LooksDraft Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else {
        LooksDraft.findOne({
            looks_draft_id: obj.looks_draft_id
    }, function (err, pinfo) {
        if (err) {
            return res.send({ success: false, msz: 'An Error Occured', err: err});
        }
        else if (!pinfo) {
            return res.send({ success: false, msz: 'Not LooksDraft Found', err: null});
        }
        else {
            if (pinfo.length === 0) {
                return res.send({ success: false, msz: 'No LooksDraft Found', err: null});
            }
            else {
                return res.send({ success: true, msz: pinfo, err: null});
            }
        }
    });
    }
},
    editLooksDraft: function(req,res) {
        var obj = req.body;

        LooksDraft.findOneAndUpdate(
            {
                looks_draft_id: obj.looks_draft_id
            },
            {
                $set: { caption: obj.caption, products: obj.products },
            },
            function(err,rInfo){ 
                if(err) {
                    return res.json({ success: false, msz: "Something Went Wrong" });
                } else {
                    return res.json({ success: true, msz: "Successfully Edited", rInfo:rInfo });
                }
            });
    },
    deleteLooksDraft: function(req,res) {
        var obj = req.body;

        LooksDraft.findOneAndDelete(
            {
                looks_draft_id: obj.looks_draft_id
            },
            function(err,rInfo){ 
                if(err) {
                    return res.json({ success: false, msz: "Something Went Wrong" });
                } else {
                    return res.json({ success: true, msz: "Successfully Deleted", rInfo:rInfo });
                }
            });
    }
}

module.exports = functions;