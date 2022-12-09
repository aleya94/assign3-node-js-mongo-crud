const {MongoClient} = require("mongodb");
require("dotenv").config();
const client = new MongoClient("mongodb://localhost:27017");
console.log(client);
module.exports = {client};

