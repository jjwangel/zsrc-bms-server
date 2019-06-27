const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

module.exports = class Mongodb_Provide {
  constructor(connect_info, db_name) {
    this.dbName = db_name;
    this.connectInfo = connect_info;
    this.client = {};
  };

  async connectDB() {
    try {
      this.client = await mongoClient.connect(this.connectInfo.AppConnectString(), this.connectInfo.options);
    } catch (err) {
      throw err;
    }
  };

  getDb() {
    try {
      return this.client.db(this.dbName);
    } catch (err) {
      throw err;
    }
  }

  async closeDB() {
    try {
      await this.client.close();
    } catch (err) {
      throw err;
    }
  };

  isConnected() {
    try {
      return this.client.isConnected(this.dbName);
    } catch (err) {
      throw err;
    }
  };
  
  getObjectId(id){
    return ObjectId(id);
  }


}