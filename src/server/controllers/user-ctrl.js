const userService = require('../services/user-service');
const logUtil = require('../utils/log_util')

module.exports = {
  /**
   * @description 验证登录用户
   * @author Michael Jian
   * @param {any} ctx 上下文
   */
  async verifyUser(ctx) {
    let bodyData = ctx.request.body;
    let fromData = {
      user_acct: bodyData.user_acct,
      user_pwd: bodyData.user_pwd,
    };
    let result = {};

    try {
      let userInfo = await userService.verifyUser(fromData);
      if (userInfo === null) {
        result.retrun_code = "BUS0001";
      } else {
        result.retrun_code = "000000";
        result.data = userInfo.data;
        // 保存载荷信息
        ctx.state = {
          objectid: userInfo.data.objectid,
        }

      }
    } catch (err) {
      logUtil.logErrorApp.error(err);
      result.retrun_code = "SYS0001";
    }
    ctx.body = result;
  },
  /**
   * @description 验证token，如果没有传入用户账号，则返回用户信息，否则不获取用户信息。
   * @author Michael Jian
   * @param {any} ctx 上下文
   */
  async verifyToken(ctx) {
    let stateData = ctx.state;
    let bodyData = ctx.request.body;
    let result = {};

    if (bodyData.user_acct !== '') {
      result.retrun_code = "000000";
      result.data = {};
    } else {
      let fromData = {
        objectid: stateData.objectid,
      };
      try {
        let userInfo = await userService.getUserByid(fromData);
        if (userInfo === null) {
          result.retrun_code = "SYS0002";
        } else {
          result.retrun_code = "000000";
          result.data = userInfo.data;
        }
      } catch (err) {
        logUtil.logErrorApp.error(err);
        result.retrun_code = "SYS0001";
      }
    }

    ctx.body = result;
  },
  /**
   * @description 修改用户密码
   * @author Michael Jian
   * @param {any} ctx 上下文
   */
  async modifyUserPwd(ctx) {
    let bodyData = ctx.request.body;
    let fromData = {
      user_id: bodyData.user_id,
      user_acct: bodyData.user_acct,
      old_pwd: bodyData.old_pwd,
      new_pwd: bodyData.new_pwd,
    };
    let result = {};

    try {
      if (await userService.modifyUserPwd(fromData)) {
        result.retrun_code = "000000";
      } else {
        result.retrun_code = "BUS0002";
      }
    } catch (err) {
      logUtil.logErrorApp.error(err);
      result.retrun_code = "SYS0001";
    }
    ctx.body = result;
  },
}