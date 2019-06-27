const dbConfig = {
  mongodb: {
    app: {
      username: '',
      password: '',
      hosts: [{
        host: '192.168.197.137',
        port: '27017',
      }],
      database: 'dds',
      options: {
        poolSize: 10,
        connectTimeoutMS: 30000,
      },
    },
  },
  mysql: {

  },
  mssql: {

  }
};

const AppConnectString = function () {
  let connectString = "mongodb://";
  if (dbConfig.mongodb.app.username !== "" && dbConfig.mongodb.app.password !== "") {
    connectString += `${dbConfig.mongodb.app.username}:${dbConfig.mongodb.app.password}@`;
  }

  for (let i = 0; i < dbConfig.mongodb.app.hosts.length; i++) {
    connectString += (i === 0 ? "" : ",") + `${dbConfig.mongodb.app.hosts[i].host}:${dbConfig.mongodb.app.hosts[i].port}`;
  }

  connectString += `/${dbConfig.mongodb.app.database}`;
  console.log(connectString);
  return connectString;
}

module.exports = {
  AppDbConnectInfo: {
    AppConnectString,
    options: dbConfig.mongodb.app.options,
  }
}