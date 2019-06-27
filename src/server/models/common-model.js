// const mongodb = require('./db-provide/mongodb');
// const ObjectID = require('mongodb').ObjectID;

// module.exports = {

//   async haveRecord(docName, filterCondition) {
//     try {
//       const collection = mongodb.AppDb.getDb().collection(docName);
//       return await collection.findOne({
//         "user_acct": user_acct,
//         "user_pwd": user_pwd,
//       });
//     } catch (err) {
//       throw err;
//     }
//   },
// }