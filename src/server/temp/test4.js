const mongodb = require('../models/db-provide/mongodb');


mongodb.ConnectDB();

setTimeout(() => {

  // const collection = mongodb.AppDb.getDb().collection('theme_info');
  // collection.find({}).count(function (err, count) {
  //   console.log(count);
  // })

  const collection = mongodb.AppDb.getDb().collection('level1_info');
  collection.find({}).forEach(function (doc) {
    console.log(doc);
  }, function (err) {
    if(err){
      console.log('err:%s' ,err)
    }
  })

  setTimeout(() => {
    console.log('closing');
    mongodb.AppDb.closeDB().then(() => {
      console.log('mongodb is close')
    }).catch(() => {
      console.log('closeERR');
    })
  }, 3000);

}, 2000);