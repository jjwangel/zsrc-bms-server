const userModel = require('../models/user-model');
const logUtil = require('../utils/log_util');
const util = require('../utils/util');

module.exports = {
  /**
   * @description 验证登录用户
   * @author Michael Jian
   * @param {any} fromData 用户数据来源
   * @returns 
   */
  async verifyUser(fromData) {
    let result = {};
    try {
      let opt = {
        user_acct: fromData.user_acct,
        user_pwd: util.createHMAC(fromData.user_pwd, fromData.user_acct), //加密码传过来的密码
      }

      let userInfo = await userModel.verifyUser(opt);
      if (userInfo === null) {
        return null;
      } else {
        result.data = {
          objectid: userInfo._id,
          user_acct: userInfo.user_acct,
          user_name: userInfo.user_name,
          user_dept: userInfo.user_dept,
        }

        return result;
      }
    } catch (err) {
      throw err;
    }

  },
  /**
   * @description 通过用户id获取用户信息
   * @author Michael Jian
   * @param {any} fromData 数据来源
   * @returns 成功返回用户信息，否则返回null
   */
  async getUserByid(fromData) {
    let result = {};
    try {
      let userInfo = await userModel.getUserByid(fromData);
      if (userInfo === null) {
        return null;
      } else {
        result.data = {
          objectid: userInfo._id,
          user_acct: userInfo.user_acct,
          user_name: userInfo.user_name,
          user_dept: userInfo.user_dept,
        }

        return result;
      }
    } catch (err) {
      throw err;
    }
  },
  
  /**
   * @description 修改用户密码
   * @author Michael Jian
   * @param {any} fromData 数据来源
   * @returns 成功返回true，否则返回false
   */
  async modifyUserPwd(fromData) {
    let result = {};
    try {
      let opt = {
        user_id: fromData.user_id,
        old_pwd: util.createHMAC(fromData.old_pwd, fromData.user_acct), //加密码传过来的密码
        new_pwd: util.createHMAC(fromData.new_pwd, fromData.user_acct), //加密码传过来的密码
      }

      let result = await userModel.modifyUserPwd(opt);
      return result;

    } catch (err) {
      throw err;
    }

  },
}