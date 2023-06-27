const { elasticClient } = require("../../config/elastic");

var functions = {

  editSellerElastic: async function (req,res) {
    var obj = req.body;

    let getByObj = {};
    let updateObj = {};

    if(obj.getBy === "seller_id") {
      getByObj = { seller_id: obj.seller_id };
    } else if(obj.getBy === "seller_id") {
      getByObj = { seller_id: obj.seller_ids };
    }

    if(obj.type === "followers") {
      updateObj = { 
        followers_count: obj.followers_count,
        followers: obj.followers
      };
    } else if(obj.type === "display_name") {
      updateObj = { display_name: obj.display_name };
    } else if(obj.type === "user_name") {
      updateObj = { user_name: obj.user_name };
    }

    try {
      const searchResults = await elasticClient.search({
        index: 'seller',
        body: {
          query: {
            terms: { seller_id: obj.seller_id }
          }
        }
      });

  
      const sellersToUpdate = searchResults.hits.hits;
  
      const bulkUpdateBody = sellersToUpdate.flatMap(sell => [
        { update: { _index: 'seller', _id: sell._id } },
        { doc: updateObj }
      ]);
  
      const bulkUpdateResponse = await elasticClient.bulk({ body: bulkUpdateBody });
  
       return res.send({
        success: true,
        msz: 'Successfully Edited',
        bulkUpdateResponse: bulkUpdateResponse
    });

    } catch (err) {
      return res.send({
        success: false,
        msz: 'Something Went Wrong',
        err: err,
    });
    }

  },
  
  searchStoreAndInfluencer: async function(req,res) {
        var obj = req.body;

        let filterQuery = {};


        if(obj.filterString === "Store"){
          filterQuery = {
            bool: {
                must: [
                  {
                    multi_match: {
                      query: obj.keyword,
                      fields: ['display_name', 'user_name'],
                      fuzziness: 2 
                    }
                  }
                ]
              }
          };
        } else {
          filterQuery = {
            bool: {
                must: [
                  {
                    multi_match: {
                      query: obj.keyword,
                      fields: ['display_name', 'user_name'],
                      fuzziness: 2 
                    }
                  }
                ]
              }
          }
        }

        let sortQuery = { "followers_count": "desc" };  

        try {
            const body = await elasticClient.search({
                    "index": "seller",
                    "body": 
                    {
                      "query": filterQuery,
                      "size": 20,
                      "sort": [
                        sortQuery
                      ]
                    }
              });

            return res.send({
              success: true,
              msz: body.hits.hits,
              err: null,
            });
          } catch (e) {
            return res.send({
              success: false,
              msz: 'An Error Occurred',
              err: e,
            });
          }
    },
}

module.exports = functions;
