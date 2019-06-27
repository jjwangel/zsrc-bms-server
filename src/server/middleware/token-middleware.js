const util = require('../utils/util');
const logUtil = require('../utils/log_util');
const appConfig = require('../../config/app-config');

const noNeedVerifyTokenURL = ['/user/VerifyUser'];
const noNeedReturnTokenURL = [];
const apiURL = ['/user/VerifyUser', '/user/VerifyToken', '/baseinfo','/user/ModifyUserPassword'];

module.exports = async (ctx, next) => {

  const req = ctx.request;
  let token = '';
  let payload = {};
  let result = {};
  let url = '';

  switch (req.method) {
    case 'GET':
      {
        url = req.originalUrl.trim().split('?')[0];
        break;
      }
    case 'POST':
      {
        url = req.originalUrl.trim();
      }
    default:
      {
        url = req.originalUrl.trim();
      }
  }
  logUtil.logApp.info(url);

  ctx.body = result;
  if (!apiURL.includes(url)) {
    result.retrun_code = 'SYS0000';
    return;
  }


  //url是否需要判断token
  if (!noNeedVerifyTokenURL.includes(url)) {
    token = req.body.token || req.query.token || '';
    if (token === '') {
      result.retrun_code = 'SYS0002';
      return;
    } else {
      //验证token
      try {
        payload = await util.tokenVerify(token, appConfig.tokenParameter);

        logUtil.logApp.info(`通过验证，token:${token}`);
      } catch (err) {
        logUtil.logErrorApp.error(err);
        result.retrun_code = 'SYS0002';
        return;
      }
    }
  }

  // 将token的载荷解释出来，并赋给ctx.state中，用于传到下一个中间件
  ctx.state.objectid = payload.objectid;

  //开始进入到下一个中间件
  await next();
  if (ctx.body.data) {
    //更新token
    if (!noNeedReturnTokenURL.includes(url)) {
      try {
        payload = ctx.state;
        token = await util.tokenSign(payload, appConfig.tokenParameter);
        ctx.body.data.token = token;
        logUtil.logApp.info(`更新token:${token}`);
      } catch (err) {
        ctx.body.retrun_code = 'SYS0001';
        logUtil.logErrorApp.error(err);
      }
    }
  } else {
    result.retrun_code = 'SYS0000';
  }

}