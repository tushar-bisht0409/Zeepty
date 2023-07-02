const { elasticClient } = require("../../config/elastic");

var functions = {

  editProductElastic: async function (req,res) {
    var obj = req.body;

    let getByObj = {};
    let updateObj = {};

    if(obj.getBy === "product_id") {
      getByObj = { product_id: obj.product_ids };
    } else if(obj.getBy === "seller_id") {
      getByObj = { seller_id: obj.seller_ids };
    }

    if(obj.type === "price") {
      updateObj = { price: obj.price};
    } else if(obj.type === "active") {
      updateObj = { active: obj.active , p_active: obj.p_active };
    } else if(obj.type === "p_active") {
      updateObj = { p_active: obj.p_active };
    } 

    try {
      const searchResults = await elasticClient.search({
        index: 'product',
        body: {
          query: {
            bool: {
              must: [
                { term: { product_id: obj.product_id } },
                { term: { style_code: obj.style_code } }
              ]
            }
          }
        }
      });

  
      const productsToUpdate = searchResults.hits.hits;
  
      // Update the name of each product
      const bulkUpdateBody = productsToUpdate.flatMap(product => [
        { update: { _index: 'product', _id: product._id } },
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
  
  searchProduct: async function(req,res) {
        var obj = req.body;

        let filterQuery = {};

        if(obj.filterArray != undefined){
        var filterArr = obj.filterArray.sort();
        }

        const filterString = filterArr.join('&');

        if(filterString === "Rating"){
          filterQuery = {
            bool: {
              must: [
                {
                  bool: {
                    should: [
                      { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                      { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                    ]
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                      params: {
                        threshold: parseFloat(obj.ratingThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else if(filterString === "Price"){
          filterQuery = {
            bool: {
              must: [
                {
                  range: {
                    price: {
                      gte: obj.minPrice,
                      lte: obj.maxPrice
                    }
                  }
                },
                {
                  multi_match: {
                    query: obj.keyword,
                    fields: ['brand', 'product_name'],
                    fuzziness: 2 
                  }
                }
              ]
            }
          }
        } else if(filterString === "Discount"){
          filterQuery = {
            bool: {
              must: [
                {
                  bool: {
                    should: [
                      { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                      { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                    ]
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                      params: {
                        threshold: parseFloat(obj.discountThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else if(filterString === "Price&Rating"){
          filterQuery = {
            bool: {
              must: [
                {
                  range: {
                    price: {
                      gte: obj.minPrice,
                      lte: obj.maxPrice
                    }
                  }
                },
                {
                  multi_match: {
                    query: obj.keyword,
                    fields: ['brand', 'product_name'],
                    fuzziness: 2 
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                      params: {
                        threshold: parseFloat(obj.ratingThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else if(filterString === "Discount&Price"){
          filterQuery = {
            bool: {
              must: [
                {
                  range: {
                    price: {
                      gte: obj.minPrice,
                      lte: obj.maxPrice
                    }
                  }
                },
                {
                  multi_match: {
                    query: obj.keyword,
                    fields: ['brand', 'product_name'],
                    fuzziness: 2 
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                      params: {
                        threshold: parseFloat(obj.discountThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else if(filterString === "Discount&Rating"){
          filterQuery = {
            bool: {
              must: [
                {
                  bool: {
                    should: [
                      { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                      { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                    ]
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                      params: {
                        discountThreshold: parseFloat(obj.discountThreshold),
                        ratingThreshold: parseFloat(obj.ratingThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else if(filterString === "Discount&Price&Rating"){
          filterQuery = {
            bool: {
              must: [
                {
                  range: {
                    price: {
                      gte: obj.minPrice,
                      lte: obj.maxPrice
                    }
                  }
                },
                {
                  multi_match: {
                    query: obj.keyword,
                    fields: ['brand', 'product_name'],
                    fuzziness: 2 
                  }
                },
                {
                  script: {
                    script: {
                      lang: 'painless',
                      source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                      params: {
                        discountThreshold: parseFloat(obj.discountThreshold),
                        ratingThreshold: parseFloat(obj.ratingThreshold)
                      }
                    }
                  }
                }
              ]
            }
          };
        } else {
          filterQuery = {
            "multi_match": {
              "query": obj.keyword,
              "fields": ["brand", "product_name"],
              "fuzziness": "2"
            }
          };
        } 

        let sortQuery = {};
        
        if(obj.sortBy === "Relevance"){
          sortQuery = { "rating_score": "desc" };
        } else if(obj.sortBy === "Popularity"){
          sortQuery = { "sold_count": "desc" };
        } else if(obj.sortBy === "PriceHighToLow"){
          sortQuery = { "price": "desc" };
        } else if(obj.sortBy === "PriceLowToHigh"){
          sortQuery = { "price": "asc" };
        } else if(obj.sortBy === "NewestFirst"){
          sortQuery = { "created_at": "desc" };
        }

        try {
            const body = await elasticClient.search({
                    "index": "product",
                    "body": 
                    {
                      "query": filterQuery,
                      "size": 20,
                      "sort": [
                        sortQuery
                      ],
                      collapse: {
                        field: 'product_id',
                        inner_hits: {
                          name: 'latest',
                          size: 1,
                          sort: [
                            { _score: 'desc' }
                          ]
                        }
                      }
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

    searchSellerProduct: async function(req,res) {
      var obj = req.body;

      let filterQuery = {};

      if(obj.filterArray != undefined){
      var filterArr = obj.filterArray.sort();
      }

      const filterString = filterArr.join('&');

      if(filterString === "Rating"){
        filterQuery = {
          bool: {
            must: [
              {
                bool: {
                  should: [
                    { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                    { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                  ]
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                    params: {
                      threshold: parseFloat(obj.ratingThreshold)
                    }
                  }
                }
              }
            ]
          }
        };
      } else if(filterString === "Price"){
        filterQuery = {
          bool: {
            must: [
              {
                range: {
                  price: {
                    gte: obj.minPrice,
                    lte: obj.maxPrice
                  }
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                multi_match: {
                  query: obj.keyword,
                  fields: ['brand', 'product_name'],
                  fuzziness: 2 
                }
              }
            ]
          }
        }
      } else if(filterString === "Discount"){
        filterQuery = {
          bool: {
            must: [
              {
                bool: {
                  should: [
                    { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                    { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                  ]
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                    params: {
                      threshold: parseFloat(obj.discountThreshold)
                    }
                  }
                }
              }
            ]
          }
        };
      } else if(filterString === "Price&Rating"){
        filterQuery = {
          bool: {
            must: [
              {
                range: {
                  price: {
                    gte: obj.minPrice,
                    lte: obj.maxPrice
                  }
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                multi_match: {
                  query: obj.keyword,
                  fields: ['brand', 'product_name'],
                  fuzziness: 2 
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                    params: {
                      threshold: parseFloat(obj.ratingThreshold)
                    }
                  }
                }
              }
            ]
          }
        };
      } else if(filterString === "Discount&Price"){
        filterQuery = {
          bool: {
            must: [
              {
                range: {
                  price: {
                    gte: obj.minPrice,
                    lte: obj.maxPrice
                  }
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                multi_match: {
                  query: obj.keyword,
                  fields: ['brand', 'product_name'],
                  fuzziness: 2 
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                    params: {
                      threshold: parseFloat(obj.discountThreshold)
                    }
                  }
                }
              }
            ]
          }
        };
      } else if(filterString === "Discount&Rating"){
        filterQuery = {
          bool: {
            must: [
              {
                bool: {
                  should: [
                    { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                    { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                  ]
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                    params: {
                      discountThreshold: parseFloat(obj.discountThreshold),
                      ratingThreshold: parseFloat(obj.ratingThreshold)
                    }
                  }
                }
              }
            ]
          }
        };
      } else if(filterString === "Discount&Price&Rating"){
        filterQuery = {
          bool: {
            must: [
              {
                range: {
                  price: {
                    gte: obj.minPrice,
                    lte: obj.maxPrice
                  }
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
              {
                multi_match: {
                  query: obj.keyword,
                  fields: ['brand', 'product_name'],
                  fuzziness: 2 
                }
              },
              {
                script: {
                  script: {
                    lang: 'painless',
                    source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                    params: {
                      discountThreshold: parseFloat(obj.discountThreshold),
                      ratingThreshold: parseFloat(obj.ratingThreshold)
                    }
                  }
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
                bool: {
                  should: [
                    { match: { brand: { query: obj.keyword, fuzziness: 2 } } },
                    { match: { product_name: { query: obj.keyword, fuzziness: 2 } } }
                  ]
                }
              },
              {
                term: {
                  "seller_id": obj.seller_id
                }
              },
            ]
          }
        };
      } 

      let sortQuery = {};
      
      if(obj.sortBy === "Relevance"){
        sortQuery = { "rating_score": "desc" };
      } else if(obj.sortBy === "Popularity"){
        sortQuery = { "sold_count": "desc" };
      } else if(obj.sortBy === "PriceHighToLow"){
        sortQuery = { "price": "desc" };
      } else if(obj.sortBy === "PriceLowToHigh"){
        sortQuery = { "price": "asc" };
      } else if(obj.sortBy === "NewestFirst"){
        sortQuery = { "created_at": "desc" };
      }

      try {
          const body = await elasticClient.search({
                  "index": "product",
                  "body": 
                  {
                    "query": filterQuery,
                    "size": 100,
                    "sort": [
                      sortQuery
                    ],
                    collapse: {
                      field: 'product_id',
                      inner_hits: {
                        name: 'latest',
                        size: 1,
                        sort: [
                          { _score: 'desc' }
                        ]
                      }
                    }
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

  getAllSellerProduct: async function(req,res) {
    var obj = req.body;

    let filterQuery = {};

    if(obj.filterArray != undefined){
    var filterArr = obj.filterArray.sort();
    }

    const filterString = filterArr.join('&');

    if(filterString === "Rating"){
      filterQuery = {
        bool: {
          must: [
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                  params: {
                    threshold: parseFloat(obj.ratingThreshold)
                  }
                }
              }
            }
          ]
        }
      };
    } else if(filterString === "Price"){
      filterQuery = {
        bool: {
          must: [
            {
              range: {
                price: {
                  gte: obj.minPrice,
                  lte: obj.maxPrice
                }
              }
            },
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
          ]
        }
      }
    } else if(filterString === "Discount"){
      filterQuery = {
        bool: {
          must: [
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                  params: {
                    threshold: parseFloat(obj.discountThreshold)
                  }
                }
              }
            }
          ]
        }
      };
    } else if(filterString === "Price&Rating"){
      filterQuery = {
        bool: {
          must: [
            {
              range: {
                price: {
                  gte: obj.minPrice,
                  lte: obj.maxPrice
                }
              }
            },
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "(float)doc['rating_total'].value / doc['rating_count'].value >= params.threshold",
                  params: {
                    threshold: parseFloat(obj.ratingThreshold)
                  }
                }
              }
            }
          ]
        }
      };
    } else if(filterString === "Discount&Price"){
      filterQuery = {
        bool: {
          must: [
            {
              range: {
                price: {
                  gte: obj.minPrice,
                  lte: obj.maxPrice
                }
              }
            },
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.threshold",
                  params: {
                    threshold: parseFloat(obj.discountThreshold)
                  }
                }
              }
            }
          ]
        }
      };
    } else if(filterString === "Discount&Rating"){
      filterQuery = {
        bool: {
          must: [
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                  params: {
                    discountThreshold: parseFloat(obj.discountThreshold),
                    ratingThreshold: parseFloat(obj.ratingThreshold)
                  }
                }
              }
            }
          ]
        }
      };
    } else if(filterString === "Discount&Price&Rating"){
      filterQuery = {
        bool: {
          must: [
            {
              range: {
                price: {
                  gte: obj.minPrice,
                  lte: obj.maxPrice
                }
              }
            },
            {
              term: {
                "seller_id": obj.seller_id
              }
            },
            {
              script: {
                script: {
                  lang: 'painless',
                  source: "((float)doc['mrp'].value - doc['price'].value)/ doc['mrp'].value >= params.discountThreshold && (float)doc['rating_total'].value / doc['rating_count'].value >= params.ratingThreshold",
                  params: {
                    discountThreshold: parseFloat(obj.discountThreshold),
                    ratingThreshold: parseFloat(obj.ratingThreshold)
                  }
                }
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
              term: {
                "seller_id": obj.seller_id
              }
            },
          ]
        }
      };
    } 

    let sortQuery = {};
    
    if(obj.sortBy === "Relevance"){
      sortQuery = { "rating_score": "desc" };
    } else if(obj.sortBy === "Popularity"){
      sortQuery = { "sold_count": "desc" };
    } else if(obj.sortBy === "PriceHighToLow"){
      sortQuery = { "price": "desc" };
    } else if(obj.sortBy === "PriceLowToHigh"){
      sortQuery = { "price": "asc" };
    } else if(obj.sortBy === "NewestFirst"){
      sortQuery = { "created_at": "desc" };
    }

    try {
        const body = await elasticClient.search({
                "index": "product",
                "body": 
                {
                  "query": filterQuery,
                  "size": 100,
                  "sort": [
                    sortQuery
                  ],
                  collapse: {
                    field: 'product_id',
                    inner_hits: {
                      name: 'latest',
                      size: 1,
                      sort: [
                        { _score: 'desc' }
                      ]
                    }
                  }
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
