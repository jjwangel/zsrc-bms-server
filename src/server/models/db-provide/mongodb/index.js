const mongodb = require('./mongodb-provide');
const dbConfig = require('../../../../config/db-config');

const AppDb = new mongodb(dbConfig.AppDbConnectInfo, "dds");

const ConnectDB = async () => {
  try {
    await Promise.all([AppDb.connectDB()]);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  AppDb,
  ConnectDB,
};
