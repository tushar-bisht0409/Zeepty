const Review = require("../schemas/review");
const Product = require("../schemas/product");
const Listing = require("../schemas/listing");

function getNewRatingScore (obj,res){
    Review.find(
        { $or: [{ product_id: obj.product_id }, { listing_id: obj.listing_id}] },
        function (err, rinfo) {
        if (err) {
            return res.json({ success: false, msz: 'An Error Occured', err: err});
        }
        else if (!rinfo) {
            return res.json({ success: false, msz: 'Not Review Found', err: null});
        }
        else {
            if (rinfo.length === 0) {
                return res.json({ success: false, msz: 'No Review Found', err: null});
            }
            else {
                
                //Calculating Review Score

                let allRatingP = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0};
                let allRatingL = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0};
                


                for(let i = 0;i<rinfo.length;i++){
                    if(rinfo[i].product_id === obj.product_id && rinfo[i].listing_id === obj.listing_id ){ 
                        allRatingP[rinfo[i].rating]++;
                        allRatingL[rinfo[i].rating]++;
                    } else if(rinfo[i].product_id === obj.product_id && rinfo[i].listing_id !== obj.listing_id){
                        allRatingP[rinfo[i].rating]++;
                    } else if(rinfo[i].product_id !== obj.product_id && rinfo[i].listing_id === obj.listing_id){
                        allRatingL[rinfo[i].rating]++;
                    }
                }


                let positiveScoreP = (allRatingP['1'] * 0.0) + (allRatingP['2'] * 0.25) + (allRatingP['3'] * 0.5) + (allRatingP['4'] * 0.75) + (allRatingP['5'] * 1.0);
                let negativeScoreP = (allRatingP['1'] * 1.0) + (allRatingP['2'] * 0.75) + (allRatingP['3'] * 0.5) + (allRatingP['4'] * 0.25) + (allRatingP['5'] * 0.0);
                let positiveScoreL = (allRatingL['1'] * 0.0) + (allRatingL['2'] * 0.25) + (allRatingL['3'] * 0.5) + (allRatingL['4'] * 0.75) + (allRatingL['5'] * 1.0);
                let negativeScoreL = (allRatingL['1'] * 1.0) + (allRatingL['2'] * 0.75) + (allRatingL['3'] * 0.5) + (allRatingL['4'] * 0.25) + (allRatingL['5'] * 0.0);
                

                let ratingScoreP = positiveScoreP + negativeScoreP > 0 ? ((positiveScoreP + 1.9208) / (positiveScoreP + negativeScoreP) - 1.96 * Math.sqrt((positiveScoreP * negativeScoreP) / (positiveScoreP + negativeScoreP) + 0.9604) / (positiveScoreP + negativeScoreP)) / (1 + 3.8416 / (positiveScoreP + negativeScoreP)) : 0;

                let ratingScoreL = positiveScoreL + negativeScoreL > 0 ? ((positiveScoreL + 1.9208) / (positiveScoreL + negativeScoreL) - 1.96 * Math.sqrt((positiveScoreL * negativeScoreL) / (positiveScoreL + negativeScoreL) + 0.9604) / (positiveScoreL + negativeScoreL)) / (1 + 3.8416 / (positiveScoreL + negativeScoreL)) : 0;

                Product.findOneAndUpdate(
                    {
                        product_id: obj.product_id
                    },
                    {
                         $set: { rating_score: ratingScoreP,rating_score_at: Date.now()}, $inc: { rateCount: 1, ratingTotal: obj.rating },
                    },
                    function(err,uInfo){
                        if(err) {
                            return res.json({ success: false, msz: "Something Went Wrong", err: err });
                        } else {
                            Listing.findOneAndUpdate(
                                {
                                    listing_id: obj.listing_id
                                },
                                {
                                    $set: { rating_score: ratingScoreL, rating_score_at: Date.now()}, $inc: { rateCount: 1, ratingTotal: obj.rating },
                                },
                                function(err,rInfo){ 
                                    if(err) {
                                        return res.json({ success: false, msz: "Something Went Wrong" });
                                    } else {
                                        return res.json({ success: true, msz: "Successfully Edited", rInfo:rInfo });
                                    }
                                });
                        }
                    });

                // return { success: true, ratingScoreP: ratingScoreP, ratingScoreL: ratingScoreL, err: null};
            }
        }
    });
}

var functions = {
    postReview: function (req, res) {
        var obj = req.body;
        var reviewInfo = new Review({
            review_id: obj.review_id,
            product_id: obj.product_id,
            listing_id: obj.listing_id,
            order_id: obj.order_id,
            customer_id: obj.customer_id,
            rating: obj.rating,
            text: obj.text,
            media_urls: obj.media_urls,
        });
        reviewInfo.save(async function (err, rinfo) {
            if (err) {
                return res.json({
                    success: false,
                    msz: "An Error Occured",
                    err: err
                });
            }
            else {
                getNewRatingScore(obj,res);
            }
        });
    },
    getReview: function (req, res) {
        var obj = req.query;
        if(obj.type === "customer_id"){
        Review.find({
            customer_id: obj.customer_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Review Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Review Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "product_id"){
        Review.find({
            product_id: obj.product_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Review Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Review Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else if(obj.type === "listing_id"){
        Review.find({
            listing_id: obj.listing_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Review Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Review Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    } else {
        Review.find({
            review_id: obj.review_id
        }, function (err, pinfo) {
            if (err) {
                return res.send({ success: false, msz: 'An Error Occured', err: err});
            }
            else if (!pinfo) {
                return res.send({ success: false, msz: 'Not Review Found', err: null});
            }
            else {
                if (pinfo.length === 0) {
                    return res.send({ success: false, msz: 'No Review Found', err: null});
                }
                else {
                    return res.send({ success: true, msz: pinfo, err: null});
                }
            }
        });
    }
},
getProductRatingInfo: async function(req,res) {
    const obj = req.query;
    try {
        const ratingStats = await Review.aggregate([
            {
                $match: {
                  product_id: obj.product_id
                }
              },
              {
                $group: {
                  _id: '$rating',
                  count: { $sum: 1 }
                }
              },
              {
                $group: {
                    _id: null,
                    ratings: {
                      $push: {
                        rating: '$_id',
                        count: '$count'
                      }
                    },
                    averageRating: { $avg: '$_id' },
                    count: {$sum: 1}
                  }
              }
            ]);
            if(ratingStats.length === 0){
                let finalStats = [{
                    "_id": null,
                    "ratings": [],
                    "averageRating": 0,
                    "count": 0
                }]
                return res.send({ success: true, rating_info: finalStats, err: null});
            } else{
                return res.send({ success: true, rating_info: ratingStats, err: null});
            }
        
      } catch (error) {
        return res.send({ success: false, msz: 'An Error Occured', err: error});
      }
}
}

module.exports = functions;