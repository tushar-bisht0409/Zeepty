const { Client } = require('@elastic/elasticsearch')
const elasticConfig = require('./elasticConfig');

let elasticClient;

const connectElasticCloud = async() =>{
    try{
        elasticClient = new Client({
            cloud: {
              id: elasticConfig.cloudID
            },
            auth: {
              username: elasticConfig.username,
              password: elasticConfig.password
            }
          });

          elasticClient.info()
  .then(response => console.log("Elastic Cloud Connected"))
  .catch(error => console.error(error))
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

connectElasticCloud();
module.exports = {
    connectElasticCloud: connectElasticCloud,
    elasticClient: elasticClient
};