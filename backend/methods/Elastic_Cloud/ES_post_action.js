const { elasticClient } = require("../../config/elastic");

var functions = {
    createIndex: async function(req,res) {
        var obj = req.body;
        
        try{
        await elasticClient.indices.create({
            index: obj.indexName,
            body: {
              mappings: {
                properties: obj.properties
              }
            }
          }, { ignore: [400] });

          return res.send({
            success: true,
            msz: 'Successfully Created Index',
            err: null
        });

        } catch(e){
            return res.send({
                success: false,
                msz: 'An Error Occurred',
                err: e
            })
        }
    },

    saveInBulkElastic: async function(req,res) {
        var obj = req.body;
        
        try{

            const operations = obj.dataset.flatMap(doc => [{ index: { _index: obj.indexName } }, doc])

            const bulkResponse = await elasticClient.bulk({ refresh: true, operations })

            const erroredDocuments = []

            if (bulkResponse.errors) {
                // The items array has the same order of the dataset we just indexed.
                // The presence of the `error` key indicates that the operation
                // that we did for the document has failed.
                bulkResponse.items.forEach((action, i) => {
                const operation = Object.keys(action)[0]
                if (action[operation].error) {
                    erroredDocuments.push({
                    // If the status is 429 it means that you can retry the document,
                    // otherwise it's very likely a mapping error, and you should
                    // fix the document before to try it again.
                    status: action[operation].status,
                    error: action[operation].error,
                    operation: operations[i * 2],
                    document: operations[i * 2 + 1]
                    })
                }
                })
            }

            const count = await elasticClient.count({ index: obj.indexName })


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
    },

    getAllDocuments: async function(req,res) {
        var obj = req.query;
        
        try{
            const body = await elasticClient.search({
                index: obj.indexName,
                body: {
                  query: {
                    match_all: {},
                  }
                }
              });
              
              const documents = body.hits.hits.map(hit => hit._source);
            
            return res.send({
                success: true,
                msz: documents,
                err: null,
            });

        } catch(e){
            return res.send({
                success: false,
                msz: 'An Error Occurred',
                err: e
            })
        }
    },
}

module.exports = functions;