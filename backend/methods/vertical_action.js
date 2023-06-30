
const Vertical = require("../schemas/vertical");
const { v4: uuidv4 } = require('uuid');

var functions = {
    postVertical: function (req, res) {
        var obj = req.body;
        var v_info = new Vertical({
            vertical_id: uuidv4(),
            vertical: obj.vertical,
            category: obj.category,
            sub_category: obj.sub_category,
            sub_category2: obj.sub_category2,
            all_options: obj.all_options,
            hsn_code: obj.hsn_code,
            gst_percent: obj.gst_percent,
            size: obj.size,
            size_fields: obj.size_fields,
        });
        v_info.save(function (err, pinfo) {
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
    postMultipleVerticals: function(req,res){
        var obj = req.body;
        Vertical.insertMany(obj.verticals, function(err,pinfo){
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
        });
    },
    getVertical: function (req, res) {
        var obj = req.query;
        if(obj.type === "Name") {
        Vertical.find({
            vertical: obj.vertical,
            category: obj.category,
            sub_category: obj.sub_category,
            sub_category2: obj.sub_category2,
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Vertical Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Vertical Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else{
        Vertical.find({
            vertical_id: obj.vertical_id,
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Vertical Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Vertical Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
    }
}

module.exports = functions;