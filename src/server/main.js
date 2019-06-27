const Koa = require('koa');
const path = require('path')
const koaStatic = require('koa-static')
// const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body');
const cors = require('koa2-cors');

const envConfig = require('../config/env-config')['sit'];
const routers = require('./routers');

const logResMiddWare = require('./middleware/log-middleware');

const logUtil = require('./utils/log_util')

const app = new Koa();

logUtil.logApp.info("start bms service......");
logUtil.logApp.info("add middware......");

//解决跨域问题 http://localhost:9001
app.use(cors({
  credentials: true, 
  origin: 'http://localhost:9001', // web前端服务器地址
}));

// 配置ctx.body解析中间件.........................................................................................................................
// app.use(bodyParser())
app.use(koaBody({
  multipart: true,
  strict : false,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}));

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname, '../static')
))

//请求日志中间件
app.use(logResMiddWare);

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

function startService() {
  let self = this;
  app.listen(envConfig.port);
  logUtil.logApp.info("bms service start succeed!");
  logUtil.logApp.info(`listen port:${envConfig.port}`);
}

logUtil.logApp.info("initialize service......");

startService();